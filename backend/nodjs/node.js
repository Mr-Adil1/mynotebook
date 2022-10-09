let http = require("http");
let formidable = require("formidable");
let url = require("url");
let fs = require("fs");
var nodemailer = require("nodemailer");
// http
//   .createServer((req, res) => {
//    let q = url.parse(req.url,true);
//    let filname = "." + q.pathname;
//    fs.readFile(filname,(err,data)=>{
//     if(err){
//       // res.writeHead(404,{"Content-Type":"text/html"});
//       return res.end("404 note found");
//     }
//     // res.writeHead(200,{"Content-Type":"text/html"});
//     res.write(data)
//     return res.end()
//    })
//   })
//   .listen(8080);

// http
//   .createServer((req, res) => {
//     if (req.url == "/fileupload") {
//       var form = new formidable.IncomingForm();
//       form.parse(req, (err, fields, files) => {
//         let oldpath = files.filetoupload.filepath;
//         let newpath = "C:/Users/drcad/" + files.filetoupload.originalFilename;
//         fs.rename(oldpath, newpath, (err) => {
//           if (err) throw err;
//           res.write('uploaded');
//           console.log('its worked');
//           res.end();
//         });
//       });
//     }
//   })
//   .listen(8080);

// ggbvkhcxxsgulhfe

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "drcadil88@gmail.com",
    pass: "wcruteegietflrse",
  },
});

var mailOptions = {
  from: "drcadil388@gmail.com",
  to: "drcadil388@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error.message);
  } else {
    console.log("Email sent: " + info.response);
  }
});
