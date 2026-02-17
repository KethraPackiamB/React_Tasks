const fs = require("fs");

fs.readFile("hello.text","utf8", (err,data)=>{
    console.log(data);
})