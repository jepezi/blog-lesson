import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use((req, res, next) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end(/* icon content here */);
    } else {
        next();
    }
})




app.use(require('./routeClient'));




app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Server listening on port %s', port);
  }
});
