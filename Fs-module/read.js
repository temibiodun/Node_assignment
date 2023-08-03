const fs = require('fs')
const path = require('path')



//create a directory named "Students"
// fs.mkdir('Students', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Directory created successfully");
//     }
// })



//In the Students directory, create  file named user.js
// fs.writeFile(path.join(__dirname, 'Students', 'user.js'), 'console.log("Hello World")', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File created successfully");
//     }
// })


//Update the Students directory to “Names”
// fs.rename('Students', 'Names', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Directory renamed successfully");
//     }
// })



//Add your name as content to the file user.js
// fs.appendFile(path.join(__dirname, 'Names', 'user.js'), 'console.log("my name is Abiodun Ogunleye")', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File updated successfully");
//     }
// })


// update the file and add my name, gender, email, phone number
// fs.appendFile(path.join(__dirname, 'Names', 'user.js'), 'console.log("i am a male i am 25 years old and my nationality is Nigerian ")', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File updated successfully");
//     }
// }
// )

//update the file user.js to abiodun_ogunleye
// fs.rename(path.join(__dirname, 'Names', 'user.js'), path.join(__dirname, 'Names', 'abiodun_ogunleye.js'), (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File renamed successfully");
//     }
// }
// )

//read the content from abiodun_ogunleye.js
// fs.readFile(path.join(__dirname, 'Names', 'abiodun_ogunleye.js'), 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// }
// )


//delete the file abiodun_ogunleye.js
// fs.unlink(path.join(__dirname, 'Names', 'abiodun_ogunleye.js'), (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File deleted successfully");
//     }
// }
// )




//delete the directory "Names"
// fs.rmdir(path.join(__dirname, 'Names'), (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Directory deleted successfully");
//     }
// }
// )




