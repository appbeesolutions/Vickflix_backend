const router = require('express').Router()
const upload = require('../utils/upload-multer');
var cookieParser = require('cookie-parser');
const sessionStorage = require("express-session");
const { sql, poolPromise } = require('./dbconnection');
 

Youtube = require("youtube-api"),
    fs = require("fs"),
    readJson = require("r-json"),
    Logger = require("bug-killer"),
    opn = require("opn"),
    prettyBytes = require("pretty-bytes");
path = require('path');
var fs = require('fs');
const CREDENTIALS = readJson(path.join(`${__dirname}/../config/credentials.json`));


// Authenticate
// You can access the Youtube resources via OAuth2 only.
// https://developers.google.com/youtube/v3/guides/moving_to_oauth#service_accounts
let oauth = Youtube.authenticate({
    type: "oauth",
    client_id: CREDENTIALS.web.client_id,
    client_secret: CREDENTIALS.web.client_secret,
    redirect_url: CREDENTIALS.web.redirect_uris[0]
});

router.post('/', (req, res) => {
    // res.send("uploaded");
    console.log("website url",res.url)
    upload(req, res, async (err) => {
        const pool = await poolPromise;
        const request = await pool.request();
        let download_status = req.body.download_status; 
        console.log("file name: ", req.files.uploads[0].path,download_status);
        if (download_status == 1) {
            var sql = "INSERT INTO video_info ([thumbnail], [vname], [download_status]) VALUES ('" + req.files.images[0].path + "','"+ req.files.uploads[0].path +"',"+download_status+") select SCOPE_IDENTITY() as user_id";
        let backend = await request.query(sql)
        var id  = backend.recordset[0].user_id;
        } else {
        console.log("download stats is 2")
        var statusdwonload = 2;
        var sql = "INSERT INTO video_info ([thumbnail], [vname], [download_status]) VALUES ('" + req.files.images[0].path + "','"+ req.files.uploads[0].path +"',"+statusdwonload+") select SCOPE_IDENTITY() as user_id";
        console.log(sql)
        let backend = await request.query(sql)
    
        console.log("video iddd", backend.recordset[0].user_id)
        var id  = backend.recordset[0].user_id;
        }
        // res.cookie("cookieImage", backend.recordset[0].user_id, { signed: true })

        if (err) {
            console.log(err)
        } else {
            var authurl = oauth.generateAuthUrl({
                access_type: "offline",
                scope: ["https://www.googleapis.com/auth/youtube.upload"]
            })
            var title = req.body.title;
            var description = req.body.description;
            var author = req.body.author;
            var cat = req.body.cat_id;
            var sub = req.body.sub_id;
            var userid = req.body.user_id;

            let data = {
                id: id,
                title: title,
                description: description,
                author: author,
                cat: cat,
                sub: sub,
                userid:userid
            }
            
             
            var dataJSON = JSON.stringify(data);
            let callback = function (err) {
                if (err) throw err;
                console.log('The file has been saved!');
            };
            fs.writeFile('cookies.json', dataJSON, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
            res.cookie("title", title, { signed: true });
            res.cookie("description", description, { signed: true });
            res.cookie("author", author, { signed: true });
            res.cookie("cat", cat, { signed: true })
            res.cookie("sub", sub, { signed: true })
            res.cookie("userid", userid, { signed: true })
            res.send({ url: authurl })

        }
    })
})

module.exports = router;