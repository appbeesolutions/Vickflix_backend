const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../../dbconnection');

const privateKEY = `-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQCfBiC4cfKs7aGJFAKvpZ+B5pKGJiPtI9N/Of/nzOq9cxj1HG6w
lOYdK4lP4H+JgJjC2KT+9bgxr9ROp5WIBrvjb6mQltwsW4wm+iiEuOxC8FjgoyD5
/1MIJf3MdLP9s6t7/KHZKN7P6hxwJAVbgyiRsZGSYaM80n/fEHF1zKXSSwIDAQAB
AoGBAJh7brqNgI2ymjbvuhekb0tGxO7e+Yn01WLkQW6KPfgEukSly7mEPRZxXYv7
Dy/Q4CnNRIC5KrJyD9iPtsEk+9jyWo66kg1CreYcvLYltXq2MG3geiPqpt6/Yexa
lGZEbH9IDO95tfN6SimZGT2y0B7OkY7dnHZltakhXMzSpsUBAkEA9LJKWM3tMc7t
kQNcpQ0jWDNto/xBLKsgz8n+YEQMCOJZ/8+XGozzZVzFGM7dswXTWh3kisbOOjcU
qtn5G1RQywJBAKZesvJK4aedMWpW5+wQbj9+BFAHNLP+UrQ+IQcoZJOn3yFynrch
kfODEjs+SRDKk45YL/3ZjUP+YCo6n+mj1IECQFjJqLh4YCzGjOUldyRclAqY/puW
GIAAyDMddDOx/TvsBgQQax+zLU4GT24lAcTHxFzao+bHJGVzPwiPdxg3i+kCQQCF
bpoyvV/yIJ7LXNwxdpQVlCo9TSo12hnWuaWfqgPQcOkCWH12/xOhrFPo8/GB6Bck
KRKElAE6sT/LXq12o5EBAkEAyj1R42vC7kOo41SsAi2z62FyDfT2N7Lw7hrMZACQ
edsvZPwrvMn5/P1kg+S68LJcKPnQFW+v8zM8eaVA6Id7yA==
-----END RSA PRIVATE KEY-----`;



const jwssecret = config.get('privatekey');
const i = 'AppBee Tech';
const s = 'some@user.com';
const a = 'Herdman';
const signOptions = {
  issuer: i,
  subject: s,
  audience: a,
  algorithm: "RS256"   // RSASSA [ "RS256", "RS384", "RS512" ]
};


router.post('/videolist', async (req, res) => {
    const pool = await poolPromise;
    const request = await pool.request();
    let thumb = `SELECT cat1.cat_id,cat1.cat_name,cat2.sub_id,cat2.sub_name,vid.video_id,vid.video_link,vid.title,vid.description,vid.thumbnail,vid.likes,vid.dislikes,vid.views,vid.share FROM video_info as vid INNER JOIN cat_1_level_1 as cat1 on vid.cat_id = cat1.cat_id INNER JOIN cat_1_level_2 as cat2  on cat2.sub_id = vid.sub_id where [vstatus] ='A'`;
    let tres = await request.query(thumb);
    if (tres) {
        console.log("mm", tres)
        tres.map
        res.send('200', tres.recordset)
    }
});

router.post('/banner', async (req, res, err) => {
    const pool = await poolPromise;
    const request = await pool.request();
    let current_status = `SELECT banner FROM settings `
    let response = await request.query(current_status)
    console.log("data", typeof (response.recordset[0].banner), response.recordset[0].banner)

    if (response.recordset[0].banner.trim() === "Latest") {
        console.log("Latest")
        let thumb = "SELECT cat_id,cat_name FROM cat_1_level_1";
        // let thumb = 'SELECT cat1.cat_id,cat1.cat_name,cat2.sub_id,cat2.sub_name,vid.video_link,vid.title,vid.description FROM video_info as vid INNER JOIN cat_1_level_1 as cat1 INNER JOIN cat_1_level_2 as cat2 WHERE cat1.cat_id = cat2.cat_id AND cat2.sub_id = vid.sub_id';
        let tres = await request.query(thumb);
        let senddata = []
        if (tres) {
            console.log("tres1: ", tres);
            for (let cat of tres.recordset) {
                console.log("cat is:", cat);
                let subcat = `select top (5) * from video_info where [cat_id] = ${cat.cat_id} order by video_id DESC`;
                let res1 = await request.query(subcat)
                cat.video = res1.recordset
                senddata.push(cat || [])
            }
        }
        res.send('200', senddata);
    } else {
        console.log('views')
        let thumb = "SELECT cat_id,cat_name FROM cat_1_level_1";
        // let thumb = 'SELECT cat1.cat_id,cat1.cat_name,cat2.sub_id,cat2.sub_name,vid.video_link,vid.title,vid.description FROM video_info as vid INNER JOIN cat_1_level_1 as cat1 INNER JOIN cat_1_level_2 as cat2 WHERE cat1.cat_id = cat2.cat_id AND cat2.sub_id = vid.sub_id';
        let tres = await request.query(thumb);
        let senddata = []
        if (tres) {
            console.log("tres: ", tres);
            for (let cat of tres.recordset) {
                console.log("cat is:", cat);
                let subcat = `SELECT top(5) * FROM video_info WHERE [cat_id] = ${cat.cat_id} ORDER BY [likes] DESC `;
                let res1 = await request.query(subcat)
                cat.video = res1.recordset
                senddata.push(cat || [])
            }
        }
        res.send('200', senddata);
    }
});


router.post('/like', async (req, res, err) => {
    console.log("api calling")
    const pool = await poolPromise;
    const request = await pool.request();
    let id = req.body.videoLink ? req.body.videoLink : "";
    let status = req.body.status ? req.body.status : "";
    console.log(id, status)
    if (status == 'liked') {
        let sql = `SELECT likes FROM video_info where [video_link] = '${id}' `;
        let sqlres = await request.query(sql);
        console.log(sqlres)
        if (sqlres.rowsAffected > 0) {
            console.log("incommng")
            var likesArrya = (sqlres.recordset[0].likes) + 1;
            console.log(likesArrya)
            var update = `UPDATE video_info SET [likes] = ${likesArrya} WHERE [video_link] = '${id}' `;
            let updateres = await request.query(update, likesArrya)
            res.send("200")
            console.log("record updated", updateres)
        } else {
            res.json({ mmsg: '400', msg: err })
        }
    } else if (status == 'unLiked') {
        console.log("api unliked")
        let sql = `SELECT likes FROM video_info where [video_id] = '${id}' `;
        let sqlres = await request.query(sql);
        if (sqlres.rowsAffected > 0) {
            var likesArrya = (sqlres.recordset[0].likes) - 1;
            var update = `UPDATE video_info SET [likes] = ${likesArrya} WHERE [video_link] = '${id}' `;
            let updateres = await request.query(update, likesArrya)
            res.send("200")
            console.log("record updated", updateres)
        } else {
            res.send('400')
        }
    } else if (status == 'disLikeToLike') {
        console.log("disLikeToLike")
        let sql = `SELECT likes FROM video_info where [video_link] = '${id}' `;
        let sqlres = await request.query(sql);
        if (sqlres.rowsAffected > 0) {
            var likesArrya = (sqlres.recordset[0].likes) + 1;
            var update = `UPDATE video_info SET [likes] = ${likesArrya} WHERE [video_link] = '${id}' `;
            let updateres = await request.query(update, likesArrya)
            console.log("record updated", updateres)
        }
        let sqld = `SELECT dislikes FROM video_info where [video_link] = '${id}' `;
        let sqlresd = await request.query(sqld);
        console.log(sqlresd)
        if (sqlresd.rowsAffected > 0) {
            var likesArryad = (sqlresd.recordset[0].dislikes) - 1;
            console.log("data", likesArryad)
            var updated = `UPDATE video_info SET [dislikes] = ${likesArryad} WHERE [video_link] = '${id}' `;
            let updateresd = await request.query(updated, likesArryad)
            res.send("200")
            console.log("record updated", updateresd)
        } else {
            res.send('400')
        }
    } else if (status == 'disliked') {
        let sqld = `SELECT dislikes FROM video_info where [video_link] = '${id}' `;
        let sqlresd = await request.query(sqld);
        console.log(sqlresd)
        if (sqlresd.rowsAffected > 0) {
            var likesArryad = (sqlresd.recordset[0].dislikes) + 1;
            var updated = `UPDATE video_info SET [dislikes] = ${likesArryad} WHERE [video_link] = '${id}' `;
            let updateresd = await request.query(updated, likesArryad)
            res.send("200")
            console.log("record updated", updateresd)
        } else {
            res.send('400')
        }
    } else if (status == 'unDislike') {
        let sqld = `SELECT dislikes FROM video_info where [video_link] = '${id}' `;
        let sqlresd = await request.query(sqld);
        console.log(sqlresd)
        if (sqlresd.rowsAffected > 0) {
            var likesArryad = (sqlresd.recordset[0].dislikes) - 1;
            var updated = `UPDATE video_info SET [dislikes] = ${likesArryad} WHERE [video_link] = '${id}' `;
            let updateresd = await request.query(updated, likesArryad)
            res.send("200")
            console.log("record updated", updateresd)
        } else {
            res.send('400')
        }
    } else if (status == 'likeToDislike') {
        let sqld = `SELECT dislikes FROM video_info where [video_link] = '${id}' `;
        let sqlresd = await request.query(sqld);
        console.log(sqlresd)
        if (sqlresd.rowsAffected > 0) {
            var likesArryad = (sqlresd.recordset[0].dislikes) + 1;
            var updated = `UPDATE video_info SET [dislikes] = ${likesArryad} WHERE [video_link] = '${id}' `;
            let updateresd = await request.query(updated, likesArryad)
            console.log("record updated", updateresd)
        }
        let sql = `SELECT likes FROM video_info where [video_link] = '${id}' `;
        let sqlres = await request.query(sql);
        if (sqlres.rowsAffected > 0) {
            var likesArrya = (sqlres.recordset[0].likes) - 1;
            var update = `UPDATE video_info SET [likes] = ${likesArrya} WHERE [video_link] = '${id}' `;
            let updateres = await request.query(update, likesArrya)
            res.send("200")
            console.log("record updated", updateres)
        } else {
            res.send('400')
        }
    } else {
        res.send("400")
    }

});

router.post('/share', async (req, res) => {
    console.log("api calling")
    const pool = await poolPromise;
    const request = await pool.request();
    let id = req.body.video_id ? req.body.video_id : "";
    let status = req.body.status ? req.body.status : "";
    let sql = `SELECT shares FROM video_info where [video_id] = ${id}  `;
    let sqlres = await request.query(sql);
    if (sqlres.rowsAffected > 0) {
        var likesArrya = parseInt(sqlres.recordset[0].status) + 1;
        var update = `UPDATE video_info SET [shares] = ${likesArrya} WHERE video_id = ${id}`;
        let updateres = await request.query(update, likesArrya)
        res.send("200")
        console.log("record updated", updateres)
    } else {
        res.send("400")
    }

})


router.post('/views', async (req, res) => {
    console.log("VIEWS api calling")
    const pool = await poolPromise;
    const request = await pool.request();
    let id = req.body.video_id ? req.body.video_id : "";
    let status = req.body.status ? req.body.status : "";
    let sql = `SELECT likes FROM video_info where [video_id] = ${id}  `;
    let sqlres = await runQuery(sql);
    if (sqlres.rowsAffected > 0) {
        var likesArrya = parseInt(sqlres[0].likes) + 1;
        var update = `UPDATE video_info SET [views] = ${likesArrya} WHERE [video_id] = ${id} `;
        let updateres = await request.query(update, likesArrya)
        res.send("200")
        console.log("record updated", updateres)
    } else {
        res.send("400")
    }
});


router.post('/addmob', async (req, res) => {
    console.log("addmob api calling")
    const pool = await poolPromise;
    const request = await pool.request();
    let name = req.body.username ? req.body.username : "";
    let email = req.body.email ? req.body.email : "";
    let gender = req.body.gender ? req.body.gender : "";
    let age = req.body.age ? req.body.age : "";
    console.log(req.body)
    let usrchck = await request.query(`Select * from mobile_users where [email] = '${email}'`);
    if (usrchck.rowsAffected == 0) {
        let sql = "INSERT INTO mobile_users ([name], [email], [gender], [age])  VALUES ('" + name + "', '" + email + "','" + gender + "','" + age + "'); select SCOPE_IDENTITY() as user_id";
        console.log(sql)
        let sqlres = await request.query(sql)
        if (sqlres.rowsAffected) {
            console.log("mobile", sqlres.recordset, sqlres)
            res.json({ status: '200', data: sqlres.recordset })
        } else {
            res.send("404")
        }
    } else if (usrchck.rowsAffected > 0) {
        let sql = `update mobile_users  set [name] = '${name}',[gender] = '${gender}',[age] = ${age} where [email] = '${email}; select SCOPE_IDENTITY() as user_id`;
        let sqlres = await request.query(sql)
        if (sqlres.rowsAffected) {
            res.json({ status: '200', data: sqlres.recordset })
        } else {
            res.send('404')
        }
    } else {
        res.send('404')
    }
});


router.post('/location', async (req, res) => {
    console.log("location api calling")
    const pool = await poolPromise;
    const request = await pool.request();
    const user_id = req.body.user_id;
    const video_link = req.body.video_link || '';
    const lat = req.body.lat;
    const lng = req.body.lng;
    console.log(req.body)
    const query = `INSERT INTO HeatMap ([user_id],[video_link],[latitude],[longitude]) VALUES (${user_id}, '${video_link}','${lat}','${lng}')`;
    const result = await request.query(query);
    if (result.rowsAffected) {
        res.send(result.recordset)
    } else {
        res.status(404).send('ERROR')
    }
});

router.post('/getsubcatlist', async (req, res) => {
    const pool = await poolPromise;
    const request = await pool.request();
    // let userquery = 'SELECT * FROM cat_1_level_2'
    let userquery = 'SELECT  sub.sub_id, sub.sub_name, cat.cat_name FROM cat_1_level_2 AS sub INNER JOIN cat_1_level_1 as cat on cat.cat_id = sub.cat_id';
    let response = await request.query(userquery);
    if (response) {
        console.log("mmmm", response)
        res.status("200").json(response.recordset);
    }
    console.log(response);
});

router.post('/getcatlist', async (req, res) => {
    const pool = await poolPromise;
    const request = await pool.request();
    let userquery = 'SELECT  cat_id,cat_name FROM cat_1_level_1';
    let response = await request.query(userquery);
    if (response) {
        res.status("200").json(response.recordset);
    }
    console.log(response);

});

router.post('/addmob', async (req, res) => {
    console.log("addmob api calling")
    const pool = await poolPromise;
    const request = await pool.request();
    // let name = req.body.username ? req.body.username : "";
    let email = req.body.email ? req.body.email : "";
    let gender = req.body.gender ? req.body.gender : "";
    let age = req.body.age ? req.body.age : "";
    console.log(req.body)
    let usrchck = await request.query(`Select * from mobile_users where [email] = '${email}'`);
    if (usrchck.rowsAffected == 0) {
      let sql = "INSERT INTO mobile_users ( [email], [gender], [age])  VALUES ('" + email + "','" + gender + "'," + age + "); select SCOPE_IDENTITY() as id";
      console.log(sql)
      let sqlres = await request.query(sql)
      if (sqlres.rowsAffected) {
        let payload = {
            id: response.recordset[0].id,
            email: response.recordset[0].email,
            role_id: response.recordset[0].role_id,
            status: response.recordset[0].status
        }
        let token = jwt.sign(payload, privateKEY, signOptions);
      res.json({
        success: true,
        message: 'Login success',
        token: token,
        RawData: response.recordset
    });
        // console.log("mobile", sqlres.recordset, sqlres)
        // res.json({ status: '200', data: sqlres.recordset })
      } else {
        res.send("404")
      }
    } else if (usrchck.rowsAffected > 0) {
      let sql = `update mobile_users  set [gender] = '${gender}',[age] = ${age} OUTPUT INSERTED.id where [email] = '${email}'`;
      let sqlres = await request.query(sql)
      console.log("*****data***", sqlres)
      if (sqlres.rowsAffected) {
        let token = jwt.sign(payload, privateKEY, signOptions);
        res.json({
          success: true,
          message: 'Login success',
          token: token,
          RawData: response.recordset
      });
      } else {
        res.json({
            success: false,
            message: 'Invalid credentials',
            token: "",
            RawData: response
          });      }
    } else {
      res.send('404')
    }
  });

  