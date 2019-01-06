const express = require('express'),
    path = require('path'),
    favicon = require('express-favicon');

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(favicon(__dirname + '/client/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
});

app.listen(port, () => {
  console.log(`Hey human, static server is now running at port ${port} 😏`)
})