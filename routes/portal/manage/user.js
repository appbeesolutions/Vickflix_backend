const express = require('express');
const router = express.Router();
const upload = require('../../../utils/upload-multer');
const config = require('config');
var session = require('express-session');
const { sql, poolPromise } = require('../../dbconnection');
const nodemailer = require("nodemailer");
const fs = require('fs');
const jwt = require('jsonwebtoken');
var crypto = require("crypto");
// var md5 = require('md5')
var Activestate = "Active";
var InActivestate = "New";
var Deactivestate = "Deactive";
var Archievedstate = "Archived";


const privateKEY = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAvYJT5HsAdyH+Z+Zsoy5oXhlKQ8jaycOHa6k1tiW9NZXFQCws
jcOiPYzavilFsXiFqq5rFTwBpPDtzk4wRleBkAh3aR7QdujVC+9XiskSaQfMdjDW
o/5fySbn7K2IWikq8IgL1074qFrBVadoqdGeMyoQpAapiijDjma2SNE3k45/9Gc5
6KmnB4nHfNGsxI6l2vM8Afx782WYejxbV96opqo81M76NUgmpdR53B2qIGK9TZfc
EL7HfHFIlmfNQ5m1Ek6tKDpgBtUT659bN6J0FqObJ+eUPGMnBityZWcsH4xcdLTm
364nTvUNqEb5Pm9ADGCWtl6xkm+Mn/fNUZguuwIDAQABAoIBAGp5D9Nd/Dvy4HHV
t5HTIBZGVUBSWAJmFe66KhBFkdHKbQGKEBoyITQ9sCSJIbv9P/ROfKF4jl/ycVmo
+lx7C7M13ok0I+G7HP/QoDm8kNhr5kc9V0raP0zPzBxgvywQ1yw+85ArsW89VkRe
g2JuAFk0uBbAG38hOgYG1UGCMpx2yw+z5cGOR2PLJfjLGklmdZcB9AUa3+4IaSSj
3INQCsFyeX+lyBdesHQjOmKhKp8BMQtCoFHKUsm4ycDfpFjfyr/I10pmH220qZv1
9B4ApoReG3hS1AF95E90ZJPGG5WHj+4qkYhRpxFN6xC3lPacv2xn5W+2VqSK1myO
ntVGW9kCgYEA3kzMEwETKRA6qWsyXnkOrdNv1ZOT7h6xmCS+bCXfoRcUQ+gcv0PK
vmqvwrJj8YDGiiCgGA4d1jCHGarXrgIYM3UZ9B0uq2GzhPD68FX1M0wgaoaNGycc
d8Lrfp2C7QmbPykAu/naNdQVCmfqqXBhUmIhhxJxBiTJgOMBS1nMZsUCgYEA2jz0
REFTAQVtCvo/Te4NZ51WSOkLlZAQrXkaVoQYVhuBHz1A5gKGcJNGtbfE7xTmqxqk
qGKHGlSILUEACvNp8JRtfzI8AZjb9E0fmjGpGxLF4UcdN/vvTKGgN5S63MIdJ9oB
VECZYtzPD09Gue1mBiFHXti4gED32Y8ODaN3l38CgYEAqhc22p+q6nOJfxIPgyu7
aJNscY2u1bbUiiYrMZK1DowbLG5QeKRFX/c/rohSYnn2779Q37cFa1rMNH588p6V
p+HEzvz5NZbXBjRgvT34FJz9/KQhGZKOfLA/Ai1A/V+pUuVrs2jUZvV0d/bVHXpo
bOG655/brSi+qYiH+AConkUCgYBPHFt7xqZdL2dY3GBIUqwfTGSz527gl6nECKto
g1gDFtNWzLCS8IVll63BP82u0UfQ7MaVl6nb/JqktPRcA+L6aAPNYRtphMzvIWn8
TlY7zzFWOZ445iXYBJr8qviV//Prt1ZWAVjZAqw4o4dC7PDX9gZWNn+jVmnCPt5c
SU6X5wKBgQC26hTaHhBrcev5Xkx3mRDh39JrIapUjQTSlI4sgIUK/LEir7DhB+SZ
ColChaktQx5t/vQQsFN66gi5OsS2+cnNK4lbdWwvYW5g/RW/3C6T++UjtUuKXClH
FQKm3eVBEN5lpTxWrKfIDzbIi0XZbUPYx9L+SY+qexaqYzZ68bczlg==
-----END RSA PRIVATE KEY-----`;



const jwssecret = config.get('privatekey');
const i = 'AppBee Tech';
const s = 'some@user.com';
const a = 'AppBee';
const signOptions = {
  issuer: i,
  subject: s,
  audience: a,
  expiresIn: config.get('expiresIn'),
  algorithm: "RS256"   // RSASSA [ "RS256", "RS384", "RS512" ]
};
const key = config.get('gkey')


function encrypt(text){
  console.log(text)
var mykey = crypto.createCipher('aes-128-cbc', key);
var mystr = mykey.update(text, 'utf8', 'hex')
mystr += mykey.final('hex');
return mystr
}
router.post('/cryptopass', async(req,res,next) => {
  console.log("crypto api calling")
  const pool = await poolPromise;
  const request = await pool.request();
  let clipass = req.body.password;
  let password = encrypt(clipass)
  let test_email = 'supreeth.bhat@gmail.com';
  console.log(password)
  let insertdata = `update gmail_info set [password] = '${password}'`;
  let datares = await request.query(insertdata)
  console.log("password updated")
  if (datares.rowsAffected > 0) {
      let emailContent = {
        title: "Vicflix",
        subject: "SMTP-test",
        html: "Hello,<br> Your SMTP gmail account credentials have been set successfully on Vicflix portal",
        email: test_email
      }
      sendemail(emailContent).then((emailres) => {
        console.log(emailres)
        res.send("200");
      }).catch(error => {
        res.send("400")
        // next(error || new Error('unknown'))
      })
  }
});


function decrypt(text){
  var decipher = crypto.createDecipher('aes-128-cbc',key)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
/*email sent*/
let sendemail = async(emailContent) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let ginfo = `select [gmail_id],[password] from gmail_info`;
  let infores = await request.query(ginfo)
  let gmail = infores.recordset[0].gmail_id;
  let password = decrypt(infores.recordset[0].password)
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmail,
        pass: password
      }
    });
    var mailOptions = {
      from: gmail,
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

router.post('/sharelink', async (req, res) => {
  var link = config.get("app_link")
  res.json({ app_link: link })
});
router.post('/sharelinkios', async (req, res) => {
  var link = config.get("app_link_ios")
  res.json({ app_link: link })
});
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
  const request = await pool.request();  if (!req.body.email || !req.body.password) return res.status(400).send("Invalid email or password");
  var Active = "Active";
  let loginquery = `SELECT id,status,role_id,email FROM [t_portal_users] WHERE [email] = @emailId and [password]=(HashBytes('md5',@securedPass )) and [status]= @Active and [ustatus] = @A; `;
  request.input('emailId',sql.VarChar,req.body.email)
  request.input('securedPass',sql.VarChar,req.body.password)
  request.input('Active',sql.VarChar,Active)
  request.input('A',sql.VarChar,'A')
  let response = await request.query(loginquery)
  console.log(response)
      if (response.rowsAffected > 0) {
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
      let host = config.get('host_link');
      let link = host + "/setpassword?id=" + rand + "&email=" + email;
      console.log('hosting', link)


      let emailContent = {
        title: "Vicflix",
        subject: "Set-password Vicflix-Portal",
        html: "Hello,<br> To Set your password first time,click the URL below.<br><a href='" + link + "'>vicflix.com/set-password</a><br>If you did not request for ypur password to be set for the first time, Please ignore this email",
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
  console.log("data", req.body)
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
      let host = config.get('host_link');
      let link = host + "/resetpassword?id=" + rand + "&email=" + email;

      let emailContent = {
        title: "Vicflix",
        subject: "Reset-password Vicflix-Portal",
        html: "Hello,<br> To reset your password, click the URL below.<br><a href=" + link + ">vicflix.com/resetpassword</a><br>If you did not request your password to be reset, just ignore this email and your password will continue the same.",
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

router.post('/getsubcatlist_ios', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  // let userquery = 'SELECT * FROM cat_1_level_2'
  let userquery = `SELECT distinct  sub.sub_id, sub.sub_name, cat.cat_name FROM cat_1_level_2 AS sub INNER JOIN cat_1_level_1 as cat on cat.cat_id = sub.cat_id Inner join video_info as vid on sub.sub_id = vid.sub_id  where vid.vstatus = 'A' `;
  let response = await request.query(userquery);
  if (response) {
    console.log("mmmm", response)
    res.status("200").json(response.recordset);
  }
  console.log(response);
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
      // console.log(res1.recordset[0].title)
      // let replacedData = res1.recordset[0].title.replace(/\\/g,"'")
      // console.log(replacedData)
      sub.video = res1.recordset;
      sub.video.forEach((element,index) => {
        console.log('ELEMENTS',element)
        let temptitleInfo = element.title.replace(/\\/g,"'")
        sub.video[index]['title'] = temptitleInfo
        let tempdescriptionInfo = element.description.replace(/\\/g,"'")
        sub.video[index]['description'] = tempdescriptionInfo
      })
    console.log('VIDEO DETAILS',sub.video)
      senddata.push(sub || [])
    }
  }
  res.send('200', senddata);
})

router.post('/videolist', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let thumb = `SELECT cat1.cat_id,cat1.cat_name,cat2.sub_id,cat2.sub_name,vid.video_id,vid.video_link,vid.title,vid.description,vid.thumbnail,vid.likes,vid.dislikes,vid.views,vid.share,vid.vname,vid.rating,vid.rcount,vid.downloadcount,vid.download_status FROM video_info as vid INNER JOIN cat_1_level_1 as cat1 on vid.cat_id = cat1.cat_id INNER JOIN cat_1_level_2 as cat2  on cat2.sub_id = vid.sub_id where [vstatus] ='A'`;
  let tres = await request.query(thumb);
  if (tres) {
    tres.map
    res.send('200', tres.recordset)
  }
})

router.post('/videolistbycountry', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let id = req.body.country_id;
  let thumb = `SELECT cat1.cat_id,cat1.cat_name,cat2.sub_id,cat2.sub_name,vid.video_id,vid.video_link,vid.title,vid.description,vid.thumbnail,vid.likes,vid.dislikes,vid.views,vid.share,vid.vname,vid.rating,vid.rcount,vid.downloadcount FROM video_info as vid INNER JOIN cat_1_level_1 as cat1 on vid.cat_id = cat1.cat_id INNER JOIN cat_1_level_2 as cat2  on cat2.sub_id = vid.sub_id inner join countrys_data as cd on cd.video_id = vid.video_id where [vstatus] ='A' and [country_id] = ${id}`;
  let tres = await request.query(thumb);
  if (tres) {
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
    let catId = req.body.cat_id ? req.body.cat_id : "";
    let subId = req.body.sub_id ? req.body.sub_id : "";
    // console.log("thumbnail", req.files.images)
    if (req.files.images == undefined) {
      // let updatepasswordquery = `UPDATE video_info SET [title] = '${title}', [description]= '${description}' WHERE [video_id]= ${video_id}`;
      let updatepasswordquery = `UPDATE video_info SET  [cat_id] = ${catId},[sub_id] = ${subId},  [title] = '${title}', [description]= '${description}' WHERE [video_id]= ${video_id}`;
      let response = await request.query(updatepasswordquery);
      if (response.rowsAffected) {
        res.status("200").json({ res: response.recordset, title: title, des: description });
      } else {
        res.send('404');
      }
    } else {
      let thumbnail = req.files.images[0].path;
      // let updatepasswordquery = `UPDATE video_info SET [title] = '${title}', [description]= '${description}', [thumbnail] ='${thumbnail}' WHERE [video_id]= ${video_id}`;
      let updatepasswordquery = `UPDATE video_info SET  [cat_id] = ${catId},[sub_id] = ${subId}, [title] = '${title}', [description]= '${description}', [thumbnail] ='${thumbnail}' WHERE [video_id]= ${video_id}`;
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
  let id = req.body.videoId ? req.body.videoId : "";
  let status = req.body.status ? req.body.status : "";
  let mob_user_id = req.body.userId ? req.body.userId : "";
  console.log(req.body)
  if (status == 'liked') {
    let checkdata = `select [mob_user_id], [video_id] from video_likes where [mob_user_id] = ${mob_user_id} AND [video_id] = ${id}`;
    let resdata = await request.query(checkdata)
    if (resdata.rowsAffected == 0) {
      let insertlike = `INSERT INTO video_likes ( [mob_user_id] , [video_id] ) VALUES (${mob_user_id},${id})`;
      let insertres = await request.query(insertlike)
    }
    let sql = `SELECT likes FROM video_info where [video_id] = ${id} `;
    let sqlres = await request.query(sql);
    console.log(sqlres)
    if (sqlres.rowsAffected > 0) {
      console.log("incommng")
      var likesArrya = (sqlres.recordset[0].likes) + 1;
      console.log(likesArrya)
      var update = `UPDATE video_info SET [likes] = ${likesArrya} WHERE [video_id] = ${id} `;
      let updateres = await request.query(update, likesArrya)
      res.send("200")
      console.log("record updated", updateres)
    } else {
      res.json({ mmsg: '400', msg: err })
    }
  } else if (status == 'unLiked') {
    console.log("api unliked")
    let sql = `SELECT likes FROM video_info where [video_id] = ${id} `;
    let sqlres = await request.query(sql);
    if (sqlres.rowsAffected > 0) {
      var likesArrya = (sqlres.recordset[0].likes) - 1;
      var update = `UPDATE video_info SET [likes] = ${likesArrya} WHERE [video_id] = ${id} `;
      let updateres = await request.query(update, likesArrya)
      res.send("200")
      console.log("record updated", updateres)
    } else {
      res.send('400')
    }
  } else if (status == 'disLikeToLike') {
    console.log("disLikeToLike")
    let sql = `SELECT likes FROM video_info where [video_id] = ${id} `;
    let sqlres = await request.query(sql);
    if (sqlres.rowsAffected > 0) {
      var likesArrya = (sqlres.recordset[0].likes) + 1;
      var update = `UPDATE video_info SET [likes] = ${likesArrya} WHERE [video_id] = ${id} `;
      let updateres = await request.query(update, likesArrya)
      console.log("record updated", updateres)
    }
    let sqld = `SELECT dislikes FROM video_info where [video_id] = ${id} `;
    let sqlresd = await request.query(sqld);
    console.log(sqlresd)
    if (sqlresd.recordset[0].dislikes == 0) {
      res.send('200')
    } else if (sqlresd.rowsAffected > 0) {
      var likesArryad = (sqlresd.recordset[0].dislikes) - 1;
      console.log("data", likesArryad)
      var updated = `UPDATE video_info SET [dislikes] = ${likesArryad} WHERE [video_id] = ${id} `;
      let updateresd = await request.query(updated, likesArryad)
      res.send("200")
      console.log("record updated", updateresd)
    } else {
      res.send('400')
    }
  } else if (status == 'disliked') {
    let checkdata = `select [mob_user_id], [video_id] from dislike where [mob_user_id] = ${mob_user_id} and [video_id] = ${id}`;
    let resdata = await request.query(checkdata)
    if (resdata.rowsAffected == 0) {
      let insertlike = `INSERT INTO dislike ( [mob_user_id] , [video_id] ) VALUES (${mob_user_id},${id})`;
      let insertres = await request.query(insertlike)
    }
    let sqld = `SELECT dislikes FROM video_info where [video_id] = ${id} `;
    let sqlresd = await request.query(sqld);
    console.log(sqlresd)
    if (sqlresd.rowsAffected > 0) {
      var likesArryad = (sqlresd.recordset[0].dislikes) + 1;
      var updated = `UPDATE video_info SET [dislikes] = ${likesArryad} WHERE [video_id] = ${id} `;
      let updateresd = await request.query(updated, likesArryad)
      res.send("200")
      console.log("record updated", updateresd)
    } else {
      res.send('400')
    }
  } else if (status == 'unDislike') {
    let sqld = `SELECT dislikes FROM video_info where [video_id] = ${id} `;
    let sqlresd = await request.query(sqld);
    console.log(sqlresd)
    if (sqlresd.rowsAffected > 0) {
      var likesArryad = (sqlresd.recordset[0].dislikes) - 1;
      var updated = `UPDATE video_info SET [dislikes] = ${likesArryad} WHERE [video_id] = ${id} `;
      let updateresd = await request.query(updated, likesArryad)
      res.send("200")
      console.log("record updated", updateresd)
    } else {
      res.send('400')
    }
  } else if (status == 'likeToDislike') {
    let sqld = `SELECT dislikes FROM video_info where [video_id] = ${id} `;
    let sqlresd = await request.query(sqld);
    console.log(sqlresd)
    if (sqlresd.rowsAffected > 0) {
      var likesArryad = (sqlresd.recordset[0].dislikes) + 1;
      var updated = `UPDATE video_info SET [dislikes] = ${likesArryad} WHERE [video_id] = ${id} `;
      let updateresd = await request.query(updated, likesArryad)
      console.log("record updated", updateresd)
    }
    let sql = `SELECT likes FROM video_info where [video_id] = ${id} `;
    let sqlres = await request.query(sql);
    if (sqlres.recordset[0].likes == 0) {
      res.send('200')
    } else if (sqlres.rowsAffected > 0) {
      var likesArrya = (sqlres.recordset[0].likes) - 1;
      var update = `UPDATE video_info SET [likes] = ${likesArrya} WHERE [video_id] = ${id} `;
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
  console.log(req.body)
  let id = req.body.videoId ? req.body.videoId : "";
  let mob_user_id = req.body.userId ? req.body.userId : "";
  let checkdata = `select [mob_user_id], [video_id] from share where [mob_user_id] = ${mob_user_id} and [video_id] = ${id}`;
  let resdata = await request.query(checkdata)
  if (resdata.rowsAffected == 0) {
    let insertlike = `INSERT INTO share ( [mob_user_id] , [video_id] ) VALUES (${mob_user_id},${id})`;
    let insertres = await request.query(insertlike)
  }
  let sql = `SELECT share FROM video_info where [video_id] = ${id}  `;
  let sqlres = await request.query(sql);
  if (sqlres.rowsAffected > 0) {
    var likesArrya = parseInt(sqlres.recordset[0].share) + 1;
    console.log("****adadaw*****", likesArrya, sqlres.recordset[0].share)
    var update = `UPDATE video_info SET [share] = ${likesArrya} WHERE [video_id] = ${id}`;
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
  // let mob_user_id = req.body.user_id ? req.body.user_id : "";
  // let videoid = req.body.videoid ? req.body.videoid : "";
  // let insertlike = `INSERT INTO views ( [mob_user_id] , [video_id] ) VALUES (${mob_user_id},${videoid})`;
  // let insertres = await request.query(insertlike)
  // console.log(insertres)
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
  console.log(req.protocol + '://' + req.headers.host + req.originalUrl)
  console.log("analytics api calling")
  const pool = await poolPromise;
  const request = await pool.request();
  let data = "select sum(likes)as total_likes , sum(dislikes) as total_dislikes , sum(share) as total_share, sum(downloadcount) as total_downloads  from video_info";
  let alldata = await request.query(data)
  let data1 = "select count(*) as tota_users from mobile_users"
  let alldata2 = await request.query(data1);
  let data3 = "select sum(views) as total_views from video_info"
  let alldata3 = await request.query(data3);
  if (alldata3.rowsAffected) {
    alldata.recordset.push(alldata2.recordset[0], alldata3.recordset[0])
    // console.log(alldata.recordset)
    res.status("200").json(alldata.recordset)
  } else {
    res.send('404')
  }
});

//mobile users

router.post('/addmob_android', async (req, res) => {
  console.log("addmob api calling")
  const pool = await poolPromise;
  const request = await pool.request();
  // let name = req.body.username ? req.body.username : "";
  let email = req.body.email ? req.body.email : "";
  let gender = req.body.gender ? req.body.gender : "";
  let age = req.body.age ? req.body.age : "";
  let device_id = 1;
  console.log(req.body)
  let usrchck = await request.query(`Select * from mobile_users where [email] = '${email}'`);
  if (usrchck.rowsAffected == 0) {
    let sql = "INSERT INTO mobile_users ( [email], [gender], [age], [device])  VALUES ('" + email + "','" + gender + "'," + age + "," + device_id + "); select SCOPE_IDENTITY() as id";
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

router.post('/addmob', async (req, res) => {
  console.log("addmob api calling")
  const pool = await poolPromise;
  const request = await pool.request();
  // let name = req.body.username ? req.body.username : "";
  let email = req.body.email ? req.body.email : "";
  let gender = req.body.gender ? req.body.gender : "";
  let age = req.body.age ? req.body.age : "";
  let device_id = 2;
  console.log(req.body)
  let usrchck = await request.query(`Select * from mobile_users where [email] = '${email}'`);
  if (usrchck.rowsAffected == 0) {
    let sql = "INSERT INTO mobile_users ( [email], [gender], [age], [device])  VALUES ('" + email + "','" + gender + "'," + age + "," + device_id + "); select SCOPE_IDENTITY() as id";
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
  const user_id = req.body.userId;
  const video_id = req.body.videoId;
  const lat = req.body.lattitude;
  const lng = req.body.longittude;
  console.log(req.body)
  let checkdata = `select [mob_user_id], [video_id] from views where [mob_user_id] = ${user_id} and [video_id] = ${video_id}`;
  let resdata = await request.query(checkdata)
  console.log(req.body)
  if (resdata.rowsAffected == 0) {
    let insertlike = `INSERT INTO views ( [mob_user_id] , [video_id] ) VALUES (${user_id},${video_id})`;
    let insertres = await request.query(insertlike)
    console.log(req.body)
  }
  console.log(lat, lng)
  const query = `INSERT INTO HeatMap ([user_id],[video_id],[latitude],[longitude]) VALUES (${user_id}, '${video_id}','${lat}','${lng}')`;
  const result = await request.query(query);
  let sql = `SELECT views FROM video_info where [video_id] = ${video_id}`;
  let sqlres = await request.query(sql);
  console.log(sqlres)
  if (sqlres.rowsAffected > 0) {
    var likesArrya = parseInt(sqlres.recordset[0].views) + 1;
    var update = `UPDATE video_info SET [views] = ${likesArrya} WHERE [video_id] = ${video_id} `;
    let updateres = await request.query(update)
    res.send("200")
    console.log("record updated", updateres)
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
  let id = req.body.videoId;
  let rating = req.body.rating;
  let sql = `SELECT rating FROM video_info where [video_id] = ${id}`;
  let sqlres = await request.query(sql);
  console.log("Rating", req.body, sqlres)
  if (sqlres.rowsAffected > 0) {
    var likesArrya = parseFloat(sqlres.recordset[0].rating) + parseFloat(`${rating}`);
    console.log("asdsdasd", likesArrya)
    var update = `UPDATE video_info SET [rating] = ${likesArrya} WHERE [video_id] =${id} `;
    let updateres = await request.query(update)
    console.log("updated rating", updateres)
    let ratingcount = `SELECT rcount FROM video_info where [video_id] = ${id}`;
    let rcountres = await request.query(ratingcount)
    console.log("***rcount***", rcountres)
    if (rcountres.rowsAffected > 0) {
      var incr = parseInt(rcountres.recordset[0].rcount) + 1;
      console.log("***rcount***", incr)
      var rupdate = `UPDATE video_info SET [rcount] = ${incr} WHERE [video_id] = ${id} `;
      let rupdateres = await request.query(rupdate)
      if (rupdateres.rowsAffected) {
        res.send('200')
      } else {
        throw err;
      }
    } else {
      throw err;
    }
  } else {
    throw err;
  }
});


router.post('/download', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let id = req.body.videoId ? req.body.videoId : "";
  let mob_user_id = req.body.userId ? req.body.userId : "";
  console.log(req.body)
  let checkdata = `select [mob_user_id], [video_id] from download where [mob_user_id] = ${mob_user_id} AND [video_id] = ${id}`;
  let resdata = await request.query(checkdata)
  if (resdata.rowsAffected == 0) {
    let insertlike = `INSERT INTO download ( [mob_user_id] , [video_id] ) VALUES (${mob_user_id},${id})`;
    let insertres = await request.query(insertlike)
  }
  console.log(req.body)
  let sql = `SELECT downloadcount FROM video_info where [video_id] = ${id}  `;
  let sqlres = await request.query(sql);
  if (sqlres.rowsAffected > 0) {
    var likesArrya = parseInt(sqlres.recordset[0].downloadcount) + 1;
    console.log("****adadaw*****", likesArrya, sqlres.recordset[0].downloadcount)
    var update = `UPDATE video_info SET [downloadcount] = ${likesArrya} WHERE [video_id] = ${id}`;
    let updateres = await request.query(update)
    console.log("record updated", updateres)
    res.send('200')
  } else {
    res.send("400")
  }

})

router.post('/addcountry', async (req, res) => {
  console.log('country calling')
  const pool = await poolPromise;
  const request = await pool.request();
  let name = req.body.countryname ? req.body.countryname : "";
  console.log(req.body)
  let sql = "INSERT INTO countrys ([country_name]) values ('" + name + "')";
  let sqlres = await request.query(sql);
  if (sqlres.rowsAffected > 0) {
    res.send('200')
  } else {
    res.send('error')
  }
});


router.post('/allcountrys', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let sql = 'select * from countrys'
  let sqlres = await request.query(sql);
  if (sqlres.rowsAffected) {
    res.send(sqlres.recordset)
  } else {
    res.send('error')
  }
});

router.post('/updatecountry', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let country_id = req.body.country_id;
  let country_name = req.body.country_name
  let sql = `update countrys set [country_name] = '${country_name}' where [country_id] = ${country_id}`;
  let sqlres = await request.query(sql);
  if (sqlres.rowsAffected) {
    res.send('200')
  } else {
    res.send('error')
  }
});

router.post('/deletecountry', async (req, res) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let country_id = req.body.country_id;
  let sql = `delete from countrys where [country_id] = ${country_id}`;
  let sqlres = await request.query(sql);
  if (sqlres.rowsAffected) {
    res.send('200')
  } else {
    res.send('error')
  }
});

router.post('/getcountrys', async (req, res, next) => {
  const pool = await poolPromise;
  const request = await pool.request();
  let role_id = 0;
  let country_data = req.body.country_name ? req.body.country_name : "";
  // console.log("Session ", req.session);
  if (country_data == 0) {
    role_id = 0;
  }
  let getcountrys = `SELECT * FROM countrys`;
  // let rolevals = [role_id];
  let roleresponse = await request.query(getcountrys);
  res.status("200").json(roleresponse.recordset);
});


// router.post('/chart', async (req, res) => {
//   console.log("chart api calling")
//   const pool = await poolPromise;
//   const request = await pool.request();
//   let data = "select * from dislike";
//   let alldata = await request.query(data)
//   let data1 = "select * from download";
//   let alldata2 = await request.query(data1);
//   let data3 = "select * from share";
//   let alldata3 = await request.query(data3);
//   let data4 = "select * from mobile_users";
//   let alldata4 = await request.query(data4);
//   let data5 = "select * from video_likes";
//   let alldata5 = await request.query(data5);
//   let data6 = "select * from views";
//   let alldata6 = await request.query(data6);
//   if (alldata6.rowsAffected) {
//     // alldata.recordset.push(alldata2.recordset, alldata3.recordset,alldata4.recordset,alldata5.recordset,alldata6.recordset)
//     // console.log(alldata.recordset)
//     res.status("200").json({dislikes:alldata.recordset,download:alldata2.recordset,share:alldata3.recordset,mobile_users:alldata4.recordset,likes:alldata5.recordset,views:alldata6.recordset})
//   } else {
//     res.send('404')
//   }
// });
router.post('/chart', async (req, res) => {
  console.log("chart api calling")
  const pool = await poolPromise;
  const request = await pool.request();
  let data = "select created_date from dislike";
  let alldata = await request.query(data)
  let data1 = "select created_date from download";
  let alldata2 = await request.query(data1);
  let data3 = "select created_date from share";
  let alldata3 = await request.query(data3);
  let data4 = "select created_date from mobile_users";
  let alldata4 = await request.query(data4);
  let data5 = "select created_date from video_likes";
  let alldata5 = await request.query(data5);
  let data6 = "select created_date from views";
  let alldata6 = await request.query(data6);
  let data7 = "select created_date from qrcode";
  let alldata7 = await request.query(data7);
  if (alldata6.rowsAffected) {
    // alldata.recordset.push(alldata2.recordset, alldata3.recordset,alldata4.recordset,alldata5.recordset,alldata6.recordset)
    // console.log(alldata.recordset)
    res.status("200").json({dislikes:alldata.recordset,
      download:alldata2.recordset,
      share:alldata3.recordset,
      mobile_users:alldata4.recordset,
      likes:alldata5.recordset,
      views:alldata6.recordset,
      QRcode:alldata7.recordset
    })
  } else {
    res.send('404')
  }
});




router.post('/QRcode', async (req, res) => {
  console.log('QRcode calling')
  const pool = await poolPromise;
  const request = await pool.request();
  let userId = req.body.userId ? req.body.userId : "";
  let videoId = req.body.videoId ? req.body.videoId : "";
  console.log(req.body)
  let sql = `INSERT INTO qrcode ([mob_user_id],[video_id]) values (${userId},${videoId})`;
  let sqlres = await request.query(sql);
  if (sqlres.rowsAffected > 0) {
    res.send('200')
  } else {
    res.send('error')
  }
});


router.post('/sortByDate', async (req,res) => {
  const pool = await poolPromise;
  const request = await pool.request();
console.log(req.body)
  let data = `select * from dislike where created_date between '${req.body.x}' and '${req.body.y}' `
  let response = await request.query(data);
  let data2 = `select * from download where created_date between '${req.body.x}' and '${req.body.y}' `
  let response2 = await request.query(data2);
  let data3 = `select * from share where created_date between '${req.body.x}' and '${req.body.y}' `
  let response3 = await request.query(data3);
  let data4 = `select * from mobile_users where created_date between '${req.body.x}' and '${req.body.y}' `
  let response4 = await request.query(data4);
  let data5 = `select * from video_likes where created_date between '${req.body.x}' and '${req.body.y}' `
  let response5 = await request.query(data5);
  let data6 = `select * from views where created_date between '${req.body.x}' and '${req.body.y}' `
  let response6 = await request.query(data6);
  let data7 = `select * from qrcode where created_date between '${req.body.x}' and '${req.body.y}' `
  let response7 = await request.query(data7);
  

    res.status("200").json({dislikes:response.recordset,
      download:response2.recordset,
      share:response3.recordset,
      mobile_users:response4.recordset,
      likes:response5.recordset,
      views:response6.recordset,
      QRcode:response7.recordset
    })
 
})


module.exports = router;