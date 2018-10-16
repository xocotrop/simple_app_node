var http = require("http");

var server = http.createServer((req, res) => {
    var cat = req.url;
    console.log(cat);
    switch(cat){
        case '/tecnologia':
            res.end("<html><body>Portal de tecnologia</body></html>");
        break;
        default:
            res.end("<html><body>Portal de notícias</body></html>");
    }
    
});

server.listen(3000);