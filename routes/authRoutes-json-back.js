const router = require('express').Router()
const path = require('path')
const CREDENTIALS = readJson(path.join(`${__dirname}/../config/credentials.json`));
const config = require("config");
const video = path.join(__dirname, "../public/videos")
Youtube = require("youtube-api")
const Lien = require("lien");
const fs = require('fs');
const pool = require('./dbconnection');
const { sql, poolPromise } = require('./dbconnection');
const ch = config.get("ch");
// const jsonShareddata = require('./cookies.json')

// Authenticate
// You can access the Youtube resources via OAuth2 only.
// https://developers.google.com/youtube/v3/guides/moving_to_oauth#service_accounts
let oauth = Youtube.authenticate({
    type: "oauth",
    client_id: CREDENTIALS.web.client_id,
    client_secret: CREDENTIALS.web.client_secret,
    redirect_url: CREDENTIALS.web.redirect_uris[0]
});
 

router.get('/', async (req, res) => {
    const pool = await poolPromise;
    const request = await pool.request();
    
    var dataBuffer = fs.readFileSync('cookies.json')
    var dataJson = dataBuffer.toString()
    var jsonShareddata = JSON.parse(dataJson)

     var title = jsonShareddata.title;
    var description = jsonShareddata.description;
    var id = jsonShareddata.id;
    var cat_id = jsonShareddata.cat;
    var sub_id = jsonShareddata.sub;
    var userid = jsonShareddata.userid;
    // console.log("awdawdawd", req.signedCookies['cookieImage'])
    // var title = req.signedCookies['title'];
    // var description = req.signedCookies['description']
    // var id = req.signedCookies['cookieImage']
    // var cat_id = req.signedCookies['cat']
    // var sub_id = req.signedCookies['sub']
    // var userid = req.signedCookies['userid']
    Logger.log("Trying to get the token using the following code: " + req.query.code);
    let newVideo = ""

    fs.readdir(video, (err, files) => {

        if (err) console.log(err)
        files.forEach(file => {
            newVideo = file
        });


        oauth.getToken(req.query.code, (err, tokens) => {

            if (err) {
                console.log(err)
                // res.send(err);
                return Logger.log(err);
            }

            __dirname



            Logger.log("Got the tokens.");

            oauth.setCredentials(tokens);


            // lien.end("The video is being uploaded. Check out the logs in the terminal.");

            var req = Youtube.videos.insert({
                resource: {
                    // Video title and description
                    snippet: {
                        title: title,
                        description: description
                    }
                    // I don't want to spam my subscribers
                    ,
                    status: {
                        privacyStatus: "unlisted"
                    }
                }
                // This is for the callback function
                ,
                part: "snippet,status"

                // Create the readable stream to upload the video
                ,
                media: {
                    body: fs.createReadStream(path.join(video, newVideo))
                }
            }, async (err, data) => {
                console.log('done', data)
                if (err){
                    let data = `select thumbnail, vname from video_info where [video_id] = ${id}`;
                    let datares = await request.query(data)
                    let imgpath = datares.recordset[0].thumbnail;
                    let vpath = datares.recordset[0].vname;
                    fs.unlinkSync(vpath);
                    fs.unlinkSync(imgpath);
                    let sql = `delete from video_info where [video_id] = ${id}`;
                    let sqlres = await request.query(sql)
                    if (sqlres.rowsAffected > 0) {
                        res.redirect("/#/video-response?id=1&ch="+ch);
                        throw err               
                    }
                } else if (data.snippet.channelId == 'UCualjAuSyVaqXqujf0BFPww') {
                    let vdata = `select thumbnail, vname, download_status from video_info where [video_id] = ${id}`;
                    let datares = await request.query(vdata)
                    console.log("datares",vdata,datares)
                    let imgpath = datares.recordset[0].thumbnail;
                    let vpath = datares.recordset[0].vname;
                    let download_status = datares.recordset[0].download_status;
                    let video_link = data.id;
                    let youtubeTitile = data.snippet.title;
                    let youtubeDescription = data.snippet.description;
                console.log(video_link, youtubeTitile, youtubeDescription, cat_id, sub_id, id,imgpath)
                var sql = `UPDATE video_info set [user_id] = ${userid} , [cat_id] = ${cat_id},[sub_id] = ${sub_id},[video_link] = '${video_link}',[title] = '${youtubeTitile}',[description] = '${youtubeDescription}',[vstatus] = 'A',[likes] = 0,[dislikes] = 0,[views] = 0,[share] = 0,[rating] = 0,[rcount] = 0 ,[downloadcount] = 0 where [video_id] = ${id} `;
                let sqlres = await request.query(sql)
                if (download_status == 1) {
                    fs.unlinkSync(vpath);
                    res.redirect("/#/video-response?id=4&ch="+ch);
                } else {
                    res.redirect("/#/video-response?id=4&ch="+ch);
                    console.log("1 record inserted");
                }
            } else if (data.snippet.channelId != 'UCualjAuSyVaqXqujf0BFPww') {
                let data = `select thumbnail, vname from video_info where [video_id] = ${id}`;
                let datares = await request.query(data)
                let imgpath = datares.recordset[0].thumbnail;
                let vpath = datares.recordset[0].vname;
                 fs.unlinkSync(imgpath);
                 fs.unlinkSync(vpath);
                 console.log("video deleted from folder")
                let sql = `delete from video_info where [video_id] = ${id}`;
                let sqlres = await request.query(sql)
                if (sqlres.rowsAffected > 0) {
                    console.log("uploadedin other channel")
                    res.redirect("/#/video-response?id=3&ch="+ch);
                }
            } else {
                res.send(501)
            }
        });

        });

    });
})

module.exports = router


