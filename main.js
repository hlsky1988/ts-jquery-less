var fs = require("fs");
var glob = require("glob");
var cowsay = require('cowsay');
// var removeFile = require("./removeFile.js");

glob("./src/js/*.map", function(er, files) {
  if (er) {
    if (err) throw err;
  } else {
    console.log(files);
    for (const item of files) {
      fs.unlink(item, function(err) {
        if (err) throw err;
        // console.log(`删除 ${item} 成功`);
        console.log(cowsay.say({
          text : `删除 ${item} 成功`,
          e : "oo",
          T : "U "
        }));
      });
    }
  }
});
