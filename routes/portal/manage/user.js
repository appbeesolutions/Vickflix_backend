const express = require('express');
const router = express.Router();
const upload = require('../../../utils/upload-multer');
const config = require('config');
var session = require('express-session');
const { sql, poolPromise } = require('../../dbconnection');
const nodemailer = require("nodemailer");
const fs = require('fs');
const jwt = require('jsonwebtoken');
// var md5 = require('md5')
var Activestate = "Active";
var InActivestate = "New";
var Deactivestate = "Deactive";
var Archievedstate = "Archived";


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
  expiresIn: "1h",
  algorithm: "RS256"   // RSASSA [ "RS256", "RS384", "RS512" ]
};

/*email sent*/
let sendemail = (emailContent) => {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.get('email'),
        pass: config.get('email_password')
      }
    });
    var mailOptions = {
      from: config.get('email'),
      to: emailContent.email,
      subject: emailContent.subject,
      html: emailContent.html
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });

  })
}

// login api
router.post('/isAuhtenticated', async (req, res) => {
  console.log(req.session.user)
  return req.session.user ? ture : false;
});

router.post('/logout', async (req, res) => {
  console.log(req.session.user)
  req.session.destroy();
});

router.post('/login', async (req, res) => {
  console.log("api calling")
  const pool = await poolPromise;
  const request = await pool.request();
  if (!req.body.email || !req.body.password) return res.status(400).send("Invalid email or password");
  var Active = "Active";
  let loginquery = `SELECT id,status,role_id,email FROM [t_portal_users] WHERE [email] = '${req.body.email}' and [password]=(HashBytes('md5','${req.body.password}' )) and [status]= 'Active' and [ustatus] = 'A' `;
  // console.log("data", loginquery)
  let response = await request.query(loginquery);
  // console.log("data", response)
  if (response) {
    if (response.recordset[0]) {
      let payload = {
        id: response.recordset[0].id,
        email: response.recordset[0].email,
        role_id: response.recordset[0].role_id,
        status: response.recordset[0].status
        // org_category:response.org_category
      }
      console.log("data1", payload)
      let token = jwt.sign(payload, privateKEY, signOptions);
      res.json({
        success: true,
        message: 'Login success',
        token: token,
        RawData: response.recordset,
        // orgcount:response.length
      });
    } else {
      res.json({
        success: false,
        message: 'Invalid credentials',
        token: "",
        RawData: response
      });
    }
  }
})


router.post('/moblogin', async (req, res, next) => {
  const pool = await poolPromise;
  const request = await pool.request();
  console.log("api calling")
  let email = req.body.email;
  let password = req.body.password;
  console.log(email, password);
  //  let vals = [email,password];
  let sql = "SELECT * FROM mobile_users WHERE email = '" + email + "' AND password = md5('" + password + "')";
  console.log(sql)
  let logres = await request.query(sql);
  let resdata = JSON.stringify(logres)
  resdata = JSON.parse(resdata)
  // console.log(resdata[0].name)
  if (logres.rowsAffected > 0) {
    let jwtt = jwt.sign({ name: resdata[0].name, id: resdata[0].id }, 'key', { expiresIn: "6h" }, (err, token) => {
      console.log(token)
      res.json({ token })
      res.send(logres)
    });
  } else {
    res.send('404')
  }
});

// router.get('/home', function(request, response) {
//   if (request.session.loggedin) {
//     response.send('Welcome back, ' + request.session.username + '!');
//   } else {
//     response.send('Please login to view this page!');
//   }
//   response.end();
// });

//drop down roles
router.post('/getroles', async (req, res, next) => {
  console.log("get role api calling")
  const pool = await poolPromise;
  const request = await pool.request();
  let role_id = 0;
  let role_session = req.body.role ? req.body.role : "";
  let data = req.body.role;
  if (data == 3) {
    if (role_session == 0) {
      role_id = 0;
    }
    let getrole = `SELECT id,role FROM t_roles where id != 3 `;
    // let rolevals = [role_id];
    let roleresponse = await request.query(getrole);
    res.status("200").json(roleresponse.recordset);
  } else if (data == 2) {
    if (role_session == 0) {
      role_id = 0;
    }
    let getrole = `SELECT id,role FROM t_roles where id != 3 and id != 2 `;
    // let rolevals = [role_id];
    let roleresponse = await request.query(getrole);
    res.status("200").json(roleresponse.recordset);
  }
  // console.log("Session ", req.session);
  
 
});


router.post('/getcat', async (req, res, next) => {
  console.log("get cat api calling")
  const pool = await poolPromise;
  const request = await pool.request();
  let role_id = 0;
  let cat_session = req.body.cat_name ? req.body.cat_name : "";
  // console.log("Session ", req.session);
  if (cat_session == 0) {
    role_id = 0;
  }
  let getrole = `SELECT cat_id,cat_name FROM cat_1_level_1 where cat_id >= ${role_id} `;
  // let rolevals = [role_id];
  let roleresponse = await request.query(getrole);
  res.status("200").json(roleresponse.recordset);
});

router.post('/get', async (req, res, next) => {
  console.log("get cat api calling")
  const pool = await poolPromise;
  const request = await pool.request();
  let role_id = 0;
  let cat_session = req.body.cat_name ? req.body.cat_name : "";
  // console.log("Session ", req.session);
  if (cat_session == 0) {
    role_id = 0;
  }
  let getrole = `SELECT cat_id,cat_name FROM cat_1_level_1 `;
  // let rolevals = [role_id];
  let roleresponse = await request.query(getrole);
  res.status("200").json(roleresponse.recordset);
});

router.post('/getsub', async (req, res, next) => {
  console.log("get sub api calling")
  const pool = await poolPromise;
  const request = await pool.request();
  let role_id = 0;
  let sub_session = req.body.sub_name ? req.body.sub_name : "";
  // console.log("Session ", req.session);
  if (sub_session == 0) {
    role_id = 0;
  }
  let getrole = `SELECT cat_id,sub_id,sub_name FROM cat_1_level_2 where sub_id >= ${role_id} `;
  // let rolevals = [role_id];
  let roleresponse = await request.query(getrole);
  res.status("200").json(roleresponse.recordset);
});
// router.post('/checkuseremail', async(req, res,next) => {
//     let email = req.body.email ? req.body.email : "";
//     let vals=[email];
//     let getquery="SELECT map.status FROM t_portal_users AS usr INNER JOIN t_portal_user_mapping AS map ON usr.portal_user_id = map.portal_user_id WHERE usr.email=? and map.org_id=?";
//     let response = await runQuery(getquery,vals);
//     let sadmin=await getsuperadmin();
//     if(response.length > 0 || (email == sadmin.email)){
//     res.send('404');
//     }else{
//     res.send('200');
//     }
//     })

// adding users
router.post('/addupdateuser', async (req, res, next) => {
  // console.log(req.body, "requested par")
  const pool = await poolPromise;
  const request = await pool.request();
  let user = req.body.name ? req.body.name : "";
  let email = req.body.email ? req.body.email : "";
  let mobile = req.body.mobile ? req.body.mobile : "";
  let role = req.body.role ? req.body.role : "";
  let Active = "Active"
  let ustatus = 'A'
  //console.log("name", user)
  let date = new Date();
  let rand = date.getTime() * (Math.floor(100000 + Math.random() * 900000));
  let usrchck = await request.query("Select * from t_portal_users where email= '" + email + "' ");
  // console.log('email', usrchck)
  if (usrchck.rowsAffected == 0) {
    // let insertdata = { name: name, mobile: mobile , email: email, role_id: role, token: rand };
    let insertQuery = "INSERT INTO t_portal_users ([name],[mobile],[email],[role_id],[token],[status],[ustatus]) VALUES ('" + user + "','" + mobile + "','" + email + "','" + role + "','" + rand + "','" + Active + "','" + ustatus + "')"
    let insresponse = await request.query(insertQuery);
    // console.log("effected rows", insresponse, "numberrrrrrrr", rand)
    if (insresponse.rowsAffected) {
      let host = 'https://beta.vicflix.com/#';
      let link = host + "/resetpassword?id=" + rand + "&email=" + email;
      console.log('hosting', link)


      let emailContent = {
        title: "Online Video Streaming",
        subject: "Please confirm your Email account",
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href='" + link + "'>Click here to verify</a>",
        email: email
      }
      sendemail(emailContent).then((emailres) => {
        console.log(emailres)
        res.send("200");
      }).catch(error => {
        next(error || new Error('unknown'))
      })
    } else {
      res.send("404");
    }
  } else {
    res.send('404')
  }

});
/***********************CRUD FOR USERS*********************/

router.post('/status', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let id = req.body.user_id ? req.body.user_id : "";
  let active_status = req.body.Active_status ? req.body.Active_status : "";
  let sql = `UPDATE t_portal_users SET [status] = '${active_status}' WHERE [id] = ${id}`;
  console.log(sql)
  let response = await request.query(sql)
  if (response) {
    res.send('200');
  }
  console.log(response);
});




// listing user data
router.post('/getuserlist', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let data = req.body.role;
  console.log("data",req.body)
  let A = 'A';
  if (data == 3) {
    let userquery = `SELECT  tpu.id, tpu.name, tpu.mobile, tpu.email, tpu.status, tr.role FROM t_portal_users as tpu INNER JOIN t_roles as tr ON tpu.role_id = tr.id where [ustatus] = '${A}' and role_id != 3`;
  let response = await request.query(userquery);
  if (response) {
    res.status("200").json(response.recordset)
  }
  } else if (data == 2) {
    let userquery = `SELECT  tpu.id, tpu.name, tpu.mobile, tpu.email, tpu.status, tr.role FROM t_portal_users as tpu INNER JOIN t_roles as tr ON tpu.role_id = tr.id where [ustatus] = '${A}' and role_id != 3 and role_id != 2`;
  let response = await request.query(userquery);
  if (response) {
    res.status("200").json(response.recordset)
  }
  }
});

//verify reset
router.post('/verifyreset', async (req, res) => {
  console.log("verify")
  const pool = await poolPromise;
  const request = await pool.request();
  let token = req.body.id ? req.body.id : "";
  let email = req.body.email ? req.body.email : "";
  let resetquery = `SELECT * FROM t_portal_users where [token]= '${token}' and [email]='${email}'`;
  // let resetvals = [token, email];
  let response = await request.query(resetquery);
  if (response.rowsAffected == 0) {

    res.send('404');
  } else {
    res.send('200');
  }
})


// update password
router.post('/updatepassword', async (req, res) => {
  //console.log("update",req)
  const pool = await poolPromise;
  const request = await pool.request();
  let token = req.body.token ? req.body.token : "";
  let email = req.body.email ? req.body.email : "";
  let password = req.body.password ? req.body.password : "";
  password = password.toString();
  token = token.toString();
  let updatepasswordquery = `UPDATE t_portal_users SET [token] = '', [password]=(HashBytes('md5','${password}' )) WHERE [email] = '${email}' AND [token] = '${token}' `;
  console.log("sql", updatepasswordquery)
  // let vals = [password, '', email, token];
  let response = await request.query(updatepasswordquery);
  if (response.rowsAffected) {
    res.send("200");
  } else {
    res.send('404');
  }
})

// update user info
router.post('/updateportal', async (req, res) => {
  console.log("update")
  const pool = await poolPromise;
  const request = await pool.request();
  let id = req.body.userid ? req.body.userid : "";
  let name = req.body.name ? req.body.name : "";
  let role = req.body.role ? req.body.role : "";
  let mobile = req.body.mobile ? req.body.mobile : "";
  let updatepasswordquery = `UPDATE [t_portal_users]
  SET
     [name] = '${name}',
     [role_id] = ${role},
     [mobile] = ${mobile}

WHERE [id] = ${id} `;
  console.log("sql", updatepasswordquery)
  let vals = { name: name, name, role_id: role, mobile: mobile };
  let response = await request.query(updatepasswordquery, vals);
  if (response.rowsAffected) {
    res.send("200");
  } else {
    res.send('404');
  }
})

let resetpassword = async (email, token) => {
  console.log("ftoken", token)
  const pool = await poolPromise;
  const request = await pool.request();
  return new Promise((resolve, reject) => {
    let qwq = request.query(`UPDATE t_portal_users SET [token]= ${token}  where email='${email}'`, function (error, response, fields) {
      if (error) {
        reject(error);
      } else {
        if (response) {
          resolve(response);
        } else {
          resolve('error')
        }
      }
    })
  })
}

//forgot password
router.post('/forgotpassword', async (req, res, next) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let email = req.body.email ? req.body.email : "";
  let date = new Date();
  let rand = date.getTime() * (Math.floor(100000 + Math.random() * 900000));
  rand = rand.toString();
  let usrchck = await request.query("Select * from t_portal_users where email= '" + email + "' ");
  console.log(usrchck)
  if (usrchck.rowsAffected > 0) {
    // res.send('200');
    // let insertdata = { token: rand };
    let insertQuery = `UPDATE [t_portal_users]
        SET
           [token] = ('${rand}')
        WHERE [email] = '${email}' `;
    let insresponse = await request.query(insertQuery)
    resetpassword(email, rand).then((reset) => {
      console.log(reset, "email resetreset");
      // let host=req.get('host');
      let host = 'https://beta.vicflix.com/#';
      let link = host + "/resetpassword?id=" + rand + "&email=" + email;
      // let link=host+"/resetpassword?id="+rand+"&email="+email;
      // link = "http://localhost:4200/resetpassword?id=" + rand + "&email=" + email;
      // let htmlContent  =  '<a align="center" href="#" style="pointer-events:none;"><img src="http://dev.jitha.com/qa/portal/qb-backend/public/logos/Jitha_Logo_Tagline.png" alt="Jitha" style="display: block;margin-left: auto;margin-right: auto;width:30%;"></a><p align="left" style="font-size:12px;">OrderId : '+ orderid + '</p><table class="reportWrapperTable" cellspacing="3" cellpadding="5" width="100%" rules="rows" style="border-collapse:collapse;color:#1f2240;background-color:#ffffff"><caption style="background-color:#ffffff;color:#1f2240;margin-bottom:.5em;font-size:18pt;width:100%;border:0">Order Details</caption><thead style="color:#ffffff;background-color:#1f2240;font-weight:bold"><tr style="height:40px;"><th scope="col" style="background-color:#3F51B5;">Item(s)</th><th scope="col" style="background-color:#3F51B5">Total</th></tr></thead><tbody>';
      // htmlContent = htmlContent +`<tr><td align="right">Grand Total</td><td align="center">${ordervalue}</td></tr>`;
      // htmlContent = htmlContent +'</tbody></table>';
      let emailContent = {
        title: "Your JithA+ order",
        subject: "Please confirm your Email account",
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>",
        email: email
      }
      // console.log(link,'qqqqqqq');
      sendemail(emailContent).then((emailres) => {
        console.log(emailres, "email sent successfully");
        res.send('200');
      }).catch(error => {
        next(error || new Error('unknown'))
      })
    }).catch(error => {
      next(error || new Error('unknown'))
    })
  } else {
    res.send('404');
  }
}
);


//delete user
router.post('/deleteuser', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let id = req.body.userid ? req.body.userid : "";
  console.log('deleteing user', req.body)
  var sql = `update t_portal_users set [ustatus] = 'D' WHERE id=${id}`;
  let response = await request.query(sql)
  if (response.rowsAffected > 0) {
    res.send('200')

  } else {
    res.send('error')
  }
});

/***********************CATEGORY CRUD OPERATION*********************/

// add category
router.post('/addcat', async (req, res, next) => {
  console.log(req.body, "requested par")
  const pool = await poolPromise;
  const request = await pool.request();
  let cat_name = req.body.cat_name ? req.body.cat_name : "";
  let usrchck = await request.query(`Select * from cat_1_level_1 where [cat_name] = '${cat_name}'`);
  console.log('cat', usrchck)
  if (usrchck.rowsAffected == 0) {
    let insertQuery = "INSERT INTO cat_1_level_1 ([cat_name]) VALUES ( '" + cat_name + "')"
    let insresponse = await request.query(insertQuery);
    console.log("effected rows", insresponse, "numberrrrrrrr")
    if (insresponse.rowsAffected) {

      res.send("200")
    }
  }
});

//list category

router.post('/getcatlist', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let userquery = 'SELECT  cat_id,cat_name FROM cat_1_level_1';
  let response = await request.query(userquery);
  if (response) {
    res.status(200).json(response.recordset);
  }
  console.log(response);

});

//update category

router.post('/updatecat', async (req, res) => {
  console.log("update")
  const pool = await poolPromise;
  const request = await pool.request();
  let cat_id = req.body.cat_id ? req.body.cat_id : "";
  let cat_name = req.body.cat_name ? req.body.cat_name : "";
  let updatepasswordquery = `UPDATE [cat_1_level_1]
  SET
     [cat_name] = ('${cat_name}') 
WHERE [cat_id] = ${cat_id} `;
  console.log("sql", updatepasswordquery)
  // let vals = {cat_name:cat_name};
  let response = await request.query(updatepasswordquery);
  console.log(response, "abhi")
  if (response.rowsAffected) {
    res.send("200");
  } else {
    res.send('404');
  }
});

//delecte category

router.post('/deletecat', async (req, res) => {
  console.log("delete cat")
  const pool = await poolPromise;
  const request = await pool.request();
  let cat_id = req.body.cat_id ? req.body.cat_id : "";
  console.log('deleteing cat', req.body)
  var sql = `DELETE FROM [cat_1_level_1] WHERE [cat_id]=${cat_id}`;
  let response = await request.query(sql)
  if (response.rowsAffected > 0) {
    res.send("200")

  } else {
    res.send('error')
  }
});
//cat crud operation ends

/***********************SUB CATEGORY*********************/
//sub category crud operation

router.post('/addsubcat', async (req, res, next) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let cat_id = req.body.role ? req.body.role : "";
  let sub_name = req.body.sub_name ? req.body.sub_name : "";
  console.log(cat_id, "requested par")

  // let usrchck = await runQuery('Select * from `cat_1_level_2` where `sub_name`=?', [sub_name]);
  // console.log('cat', usrchck)
  // if (usrchck.length == 0) {
  // let insertdata = { sub_name: sub_name, cat_id: cat_id};
  let insertQuery = `INSERT INTO cat_1_level_2 ([cat_id],[sub_name]) VALUES ( ${cat_id},'${sub_name}')`;
  console.log(insertQuery)
  let insresponse = await request.query(insertQuery);
  console.log("effected rows", insresponse, "numberrrrrrrr")
  if (insresponse.rowsAffected) {

    res.send("200")
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


router.post('/updatesubcat', async (req, res) => {
  console.log("update")
  const pool = await poolPromise;
  const request = await pool.request();
  let sub_id = req.body.sub_id ? req.body.sub_id : "";
  let sub_name = req.body.sub_name ? req.body.sub_name : "";

  let updatepasswordquery = `UPDATE [cat_1_level_2]
  SET
     [sub_name] = ('${sub_name}') 
WHERE [sub_id] = ${sub_id} `;
  console.log("sql", updatepasswordquery)
  // let vals = {sub_name: sub_name};
  let response = await request.query(updatepasswordquery);
  if (response.rowsAffected) {
    res.send("200");
  } else {
    res.send('404');
  }
})



router.post('/deletesubcat', async (req, res) => {
  console.log("delete subcat")
  const pool = await poolPromise;
  const request = await pool.request();
  let sub_id = req.body.sub_id ? req.body.sub_id : "";
  var sql = `DELETE FROM cat_1_level_2 WHERE sub_id=${sub_id}`;
  let response = await request.query(sql)
  if (response.rowsAffected > 0) {
    res.send("200")

  } else {
    res.send('error')
  }
});

//sub category ends

/***********************VIDEOS*********************/
// sending video info



router.post('/dashboardvideolist', async (req, res) => {
  console.log("dashboard api calling")
  const pool = await poolPromise;
  const request = await pool.request();
  let cat_id = req.body.cat_id ? req.body.cat_id : "";
  let thumb = `SELECT sub_id,sub_name FROM cat_1_level_2 WHERE [cat_id] = ${cat_id}`;
  // let thumb = 'SELECT cat1.cat_id,cat1.cat_name,cat2.sub_id,cat2.sub_name,vid.video_link,vid.title,vid.description FROM video_info as vid INNER JOIN cat_1_level_1 as cat1 INNER JOIN cat_1_level_2 as cat2 WHERE cat1.cat_id = cat2.cat_id AND cat2.sub_id = vid.sub_id';
  let tres = await request.query(thumb);
  console.log(tres.recordset)
  let senddata = []
  if (tres) {
    console.log("tres: ", tres);
    for (let sub of tres.recordset) {
      console.log("sub is:", sub);
      let subcat = `SELECT * FROM video_info WHERE [sub_id] = ${sub.sub_id} AND [vstatus] = 'A'`;
      let res1 = await request.query(subcat)
      sub.video = res1.recordset
      senddata.push(sub || [])
    }
  }
  res.send('200', senddata);

})

router.post('/videolist', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let thumb = `SELECT cat1.cat_id,cat1.cat_name,cat2.sub_id,cat2.sub_name,vid.video_id,vid.video_link,vid.title,vid.description,vid.thumbnail,vid.likes,vid.dislikes,vid.views,vid.share,vid.vname,vid.rating,vid.rcount,vid.downloadcount FROM video_info as vid INNER JOIN cat_1_level_1 as cat1 on vid.cat_id = cat1.cat_id INNER JOIN cat_1_level_2 as cat2  on cat2.sub_id = vid.sub_id where [vstatus] ='A'`;
  let tres = await request.query(thumb);
  if (tres) {
    console.log("mm", tres)
    tres.map
    res.send('200', tres.recordset)
  }
})



router.post('/chngthumb', async (req, res) => {
  upload(req, res, async (err) => {
    const pool = await poolPromise;
    const request = await pool.request();
    let id = req.body.id ? req.body.id : "";
    console.log("file name: ", req.files.images[0].path);
    var sql = `update video_info SET [thumbnail] = ${req.files.images[0].path} where [video_id] = ${id}`;
    let backend = await request.query(sql)
    if (err) {
      console.error(err);
    } else {
      res.json({ status: '200' })
    }
  })
});
//update title and description
router.post('/updatevinfo', async (req, res) => {
  console.log("update")
  upload(req, res, async (err) => {
    const pool = await poolPromise;
    const request = await pool.request();
    let video_id = req.body.video_id ? req.body.video_id : "";
    let title = req.body.Title ? req.body.Title : "";
    let description = req.body.Description ? req.body.Description : "";
    // console.log("thumbnail", req.files.images)
    if (req.files.images == undefined) {
      let updatepasswordquery = `UPDATE video_info SET [title] = '${title}', [description]= '${description}' WHERE [video_id]= ${video_id}`;
      let response = await request.query(updatepasswordquery);
      if (response.rowsAffected) {
        res.status("200").json({ res: response.recordset, title: title, des: description });
      } else {
        res.send('404');
      }
    } else {
      let thumbnail = req.files.images[0].path;
      let updatepasswordquery = `UPDATE video_info SET [title] = '${title}', [description]= '${description}', [thumbnail] ='${thumbnail}' WHERE [video_id]= ${video_id}`;
      let response = await request.query(updatepasswordquery);
      if (response.rowsAffected) {
        res.status("200").json({ res: response.recordset, title: title, des: description });
        console.log("data", title, description)
      } else {
        res.send('404');
      }
    }
  })
});

router.post('/deletevideo', async (req, res) => {
  console.log("delete video")
  const pool = await poolPromise;
  const request = await pool.request();
  let video_id = req.body.video_id ? req.body.video_id : "";
  console.log('deleteing video', video_id)
  var sql = `UPDATE  video_info SET [vstatus] = 'D' WHERE [video_id] = ${video_id}`;
  let response = await request.query(sql)
  if (response.rowsAffected > 0) {
    res.send("200")

  } else {
    res.send('error')
  }
});

router.post('/radio', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let active_status = req.body.Active_status ? req.body.Active_status : "";
  let sql = `UPDATE settings SET [banner] = '${active_status}' WHERE [id] = 1`;
  console.log(sql)
  let response = await request.query(sql)
  if (response) {
    res.send("200", response.recordset);
  }
  console.log(response);
});


router.post('/defaultsetting', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let sql = "select * from settings";
  let sqlres = await request.query(sql)
  if (sqlres.rowsAffected) {
    res.status("200").json(sqlres.recordset)
  } else {
    res.send('404')
  }
})

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
        let subcat = `select top (5) * from video_info where [cat_id] = ${cat.cat_id} and [vstatus] != 'D' order by video_id DESC `;
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
        let subcat = `SELECT top(5) * FROM video_info WHERE [cat_id] = ${cat.cat_id} and [vstatus] != 'D' ORDER BY [likes] DESC `;
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
    if (sqlresd.recordset[0].dislikes == 0) {
      res.send('200')
    } else if (sqlresd.rowsAffected > 0) {
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
    if (sqlres.recordset[0].likes == 0) {
      res, send('200')
    } else if (sqlres.rowsAffected > 0) {
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
  let id = req.body.videoLink ? req.body.videoLink : "";
  // let status = req.body.status ? req.body.status : "";
  console.log(req.body)
  let sql = `SELECT share FROM video_info where [video_link] = '${id}'  `;
  let sqlres = await request.query(sql);
  if (sqlres.rowsAffected > 0) {
    var likesArrya = parseInt(sqlres.recordset[0].share) + 1;
    console.log("****adadaw*****", likesArrya, sqlres.recordset[0].share)
    var update = `UPDATE video_info SET [share] = ${likesArrya} WHERE [video_link] = '${id}'`;
    let updateres = await request.query(update)
    res.send("200")
    console.log("record updated", updateres)
  } else {
    res.send("400")
  }
});

router.post('/views', async (req, res) => {
  console.log("VIEWS api calling")
  const pool = await poolPromise;
  const request = await pool.request();
  let id = req.body.video_id ? req.body.video_id : "";
  let status = req.body.status ? req.body.status : "";
  let sql = `SELECT likes FROM video_info where [video_id] = ${id}  `;
  let sqlres = await request.query(sql);
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

router.post('/analytics', async (req, res) => {
  console.log("analytics api calling")
  const pool = await poolPromise;
  const request = await pool.request();
  let data = "select sum(likes)as total_likes , sum(dislikes) as total_dislikes , sum(views)as total_views , sum(share) as total_share  from video_info";
  let alldata = await request.query(data)
  let data1 = "select count(*) as tota_users from mobile_users"
  let alldata2 = await request.query(data1);
  if (alldata2.rowsAffected) {
    alldata.recordset.push(alldata2.recordset[0])
    console.log(alldata.recordset)
    res.status("200").json(alldata.recordset)
  } else {
    res.send('404')
  }
});

//mobile users

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
      console.log("mobile", sqlres.recordset, sqlres)
      res.json({ status: '200', data: sqlres.recordset })
    } else {
      res.send("404")
    }
  } else if (usrchck.rowsAffected > 0) {
    let sql = `update mobile_users  set [gender] = '${gender}',[age] = ${age} OUTPUT INSERTED.id where [email] = '${email}'`;
    let sqlres = await request.query(sql)
    console.log("*****data***", sqlres)
    if (sqlres.rowsAffected) {
      res.json({ status: '200', data: sqlres.recordset })
    } else {
      res.send('404')
    }
  } else {
    res.send('404')
  }
});

router.post('/mobusr', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let sql = "select * from mobile_users";
  let sqlres = await request.query(sql)
  if (sqlres.rowsAffected) {
    res.send(sqlres.recordset)
  } else {
    res.send('404')
  }
})

router.post('/location', async (req, res) => {
  console.log("location api calling")
  const pool = await poolPromise;
  const request = await pool.request();
  const user_id = req.body.user_id;
  const video_link = req.body.videoLink;
  const lat = req.body.lattitude;
  const lng = req.body.longittude;
  console.log(lat, lng)
  const query = `INSERT INTO HeatMap ([user_id],[video_link],[latitude],[longitude]) VALUES (${user_id}, '${video_link}','${lat}','${lng}')`;
  const result = await request.query(query);
  if (result.rowsAffected) {
    res.send('200')
  } else {
    res.status(404).send('ERROR')
  }
});

router.get('/get_heatmap_data', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  const query = `SELECT * FROM HeatMap`
  const result = await request.query(query);
  if (result.rowsAffected) {
    res.send(result.recordset)
  } else {
    res.status(404).send('ERROR')
  }
});


router.post('/rating', async (req, res, err) => {
  console.log("rating api calling")
  const pool = await poolPromise;
  const request = await pool.request();
  let id = req.body.video_link;
  let rating = req.body.rating;
  let sql = `SELECT rating FROM video_info where [video_link] = '${id}'`;
  let sqlres = await request.query(sql);
  console.log("Rating",req.body, sqlres)
  if (sqlres.rowsAffected > 0) {
    var likesArrya = parseFloat(sqlres.recordset[0].rating) + parseFloat(`${rating}`);
    console.log("asdsdasd", likesArrya)
    var update = `UPDATE video_info SET [rating] = ${likesArrya} WHERE [video_link] ='${id}' `;
    let updateres = await request.query(update)
    console.log("updated rating", updateres)
    let ratingcount = `SELECT rcount FROM video_info where [video_link] = '${id}'`;
    let rcountres = await request.query(ratingcount)
    console.log("***rcount***", rcountres)
    if (rcountres.rowsAffected > 0) {
      var incr = parseInt(rcountres.recordset[0].rcount) + 1;
      console.log("***rcount***", incr)
      var rupdate = `UPDATE video_info SET [rcount] = ${incr} WHERE [video_link] = '${id}' `;
      let rupdateres = await request.query(rupdate)
      if (rupdateres.rowsAffected) {
        res.send('200')
      } else {
        throw err;
      }
    } else {
      throw err;    }
  } else {
    throw err;  }
});


router.post('/download', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let id = req.body.videoLink ? req.body.videoLink : "";
  // let status = req.body.status ? req.body.status : "";
  console.log(req.body)
  let sql = `SELECT downloadcount FROM video_info where [video_link] = '${id}'  `;
  let sqlres = await request.query(sql);
  if (sqlres.rowsAffected > 0) {
    var likesArrya = parseInt(sqlres.recordset[0].downloadcount) + 1;
    console.log("****adadaw*****", likesArrya, sqlres.recordset[0].downloadcount)
    var update = `UPDATE video_info SET [downloadcount] = ${likesArrya} WHERE [video_link] = '${id}'`;
    let updateres = await request.query(update)
    console.log("record updated", updateres)
    res.send('200')
  } else {
    res.send("400")
  }

})

module.exports = router;