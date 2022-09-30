const fs = require("fs");

// fs.writeFile(
//   "demo.txt",
//   "This is sample text , My Name is Sumon hoassin",
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Succesful");
//     }
//   }
// );

// fs.appendFile("demo.txt", " & age 25 ", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesful");
//   }
// });

// fs.readFile("demo.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.rename("demo.txt", "demo2.text", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("succesfull");
//   }
// });

// fs.unlink("demo2.text", (err) => {
//   //for delete
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("succesfull");
//   }
// });

// fs.exists("demo2.text", (result) => {
//   //for delete
//   if (result) {
//     console.log("Found");
//   } else {
//     console.log("not found");
//   }
// });

fs.existsSync("demo2.text");
