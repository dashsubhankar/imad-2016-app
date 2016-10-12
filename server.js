var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
    'articleone': {
        title: 'Article One| SDASH',
        heading : 'Article 1',
        date: '15 Jan',
    content: `<p>
                    This is the content for atr 1. This is the content for atr 1.This is the content for atr 1.This is the content for atr 1.            This is the content for atr 1.            This is the content for atr 1.        This is the content for atr 1.            This is the content for atr 1.            This is the content for atr 1.
                </p>
                `, 
    },
    'articletwo': {
        title: 'Article Two| SDASH',
        heading : 'Article w',
        date: '15 Jan',
    content: `<p>
                   2
               
                </p>`, 
    },
     'articlethree': {
        title: 'Article Three| SDASH',
        heading : 'Article 3',
        date: '3123115 Jan',
    content: `<p>
                   2213231
               
                </p>`, 
    },
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `<html>
    <head>
        <title>
            ${title}
        </title>
         <link href="/ui/style.css" rel="stylesheet" />
    <meta name="viewport" content = "width=device-width, initial scale = 1" />
    </head>
    <body>
        <div class="edit">
        
                <div>
                    <a href='/'>Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
        </div>
            
    </body>
</html>
`;
return htmlTemplate;
}


app.get('/:articleName', function(req,res)
{
    var articleName = req.params.articleName; 
  res.send(createTemplate(articles[articleName]));
  //res.sendFile(path.join(_dirname,'ui','articleone.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var counter =0;
app.get('/counter',function(req,res)
{
   counter+=1;
   res.send(counter.toString());
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
