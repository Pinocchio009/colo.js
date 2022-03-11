var fs = require('fs');

fs.writeFile('co.js','console.log("undone")', function(err){
    console.log("kolo")
})