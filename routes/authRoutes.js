const router = require('express').Router()
const path = require('path')
const CREDENTIALS = readJson(path.join(`${__dirname}/../config/credentials.json`));
const video = path.join(__dirname, "../public/videos")
Youtube = require("youtube-api")
const Lien = require("lien");
const fs = require('fs');
const pool = require('./dbconnection');
const { sql, poolPromise } = require('./dbconnection');

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
    console.log("awdawdawd", req.signedCookies['image'])
    var title = req.signedCookies['title'];
    var description = req.signedCookies['description']
    var id = req.signedCookies['image']
    var cat_id = req.signedCookies['cat']
    var sub_id = req.signedCookies['sub']
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
                if (err) throw err
                data.fileName = newVideo
                console.log('done', data)
                var video_link = data.id,
                    youtubeTitile = data.snippet.title,
                    youtubeDescription = data.snippet.description;
                console.log(video_link, youtubeTitile, youtubeDescription, cat_id, sub_id, id)
                var sql = `UPDATE video_info set [cat_id] = ${cat_id},[sub_id] = ${sub_id},[video_link] = '${video_link}',[title] = '${youtubeTitile}',[description] = '${youtubeDescription}',[vstatus] = 'A',[likes] = 0,[dislikes] = 0,[views] = 0,[share] = 0,[rating] = 0,[rcount] = 0 where [video_id] = ${id} `;
                let sqlres = await request.query(sql)
                if (err) {
                    console.error(err)
                } else {
                    console.log("1 record inserted");
                }


            });

        });

    });
    res.redirect('/#/video-upload');
})

module.exports = router