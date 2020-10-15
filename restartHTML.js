const fs =require('fs');
const index=fs.readFileSync(__dirname + '/functions/index.html','utf8');
var finalHtml=index.replace('<script src="./static/js/bundle.main.js"></script>','');
//finalHtml=finalHtml.replace('<link href="./static/css/main.css" rel="stylesheet">','');

fs.writeFile(__dirname + "/functions/index.html", finalHtml, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 