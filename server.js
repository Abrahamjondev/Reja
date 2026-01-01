// const http = require("http");
// const mongodb = require("mongodb");

// let db;
// const connectionString =
//   "mongodb+srv://Abraham_db_user:Abraham2004%21@cluster0.yju4wqh.mongodb.net/Reja?appName=Cluster0";
// mongodb.connect(
//   connectionString,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err, client) => {
//     if (err) {
//       console.log("ERROR on connection mongoDB");
//     } else {
//       console.log("mongoDB connetion succeed");

//       const app = require("./app");
//       const server = http.createServer(app);
//       let PORT = 3000;
//       server.listen(PORT, function () {
//         console.log(
//           `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
//         );
//       });
//     }
//   }
// );

// const http = require("http");
// const mongodb = require("mongodb");

// let db;
// const connectionString =
//   "mongodb+srv://Abraham:YDAHKXrQQtb1Bz28@cluster0.wxofbvc.mongodb.net/Reja?appName=Cluster0";
// mongodb.connect(
//   connectionString,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err, client) => {
//     if (err) {console.log("ERROR on connection MongoDB");
//      console.log("error;",err);}
//     else {
//       console.log("MongoDB connetion succeed");
//       console.log(client);
//       module.exports = client;
//       const app = require("./app");
//       const server = http.createServer(app);
//       let PORT = 3000;
//       server.listen(PORT, function () {
//         console.log(
//           `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
//         );
//       });
//     }
//   }
// );

///
//
//
//
//

const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://Abraham:OstG3VAsA1gkCKvs@cluster0.4crpaz1.mongodb.net/Reja";
mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) console.log("ERROR on connection mongoDB", err);
    else {
      console.log("mongoDB connetion succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);

// const http = require("http");
// const { MongoClient } = require("mongodb"); // ⬅️ SHU O‘ZGARDI

// let db;
// const connectionString =
//   "mongodb+srv://Abraham:zDNWZxdJg68Ps0y7@cluster0.4crpazl.mongodb.net/Reja"
// ; // ⬅️ appName olib tashlandi

// MongoClient.connect(
//   connectionString,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err, client) => {
//     if (err) {
//       console.log("ERROR on connection mongoDB");
//       console.log(err);
//     } else {
//       console.log("mongoDB connection succeed");

//       db = client.db("Reja"); // ⬅️ SHU QO‘SHILDI
//       module.exports.db = db;

//       const app = require("./app");
//       const server = http.createServer(app);
//       let PORT = 3000;

//       server.listen(PORT, function () {
//         console.log(
//           `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
//         );
//       });
//     }
//   }
// );
