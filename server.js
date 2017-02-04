var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleone={
    title:'article-one about johnson',
    heading:'Article One',
    date:'4th feb,2016=7',
    content:`  <p>
            this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.
        </p>
        
         
        <p>
            this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.
        </p>
        
         
        <p>
            this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.this is my html page.
        </p>`
}
var htmlTemplate=`<html>
    
    <head>
        <title>
            article-one about johnson
            </title>
            <meta name="viewport" content="width-device-width,intial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
     <div class="container">
                <div>
               
                    <a href="/">home</a>
                    </div>
                    <hr/>
                    <h3>
                        article-one
                        </h3>
                        <div>
                            date:feb 4th 2017
                        </div>
          <div>
     ${content}
        </div>
    </div>
      </body>
      
</html>
`;
`




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});


app.get('/articletwo',function(req,res){
    res.send("article two is responding")
});


app.get('/articlethree',function(req,res){
    res.send("article three is responding")
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
