import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
const port = 3000; // TODO: Change port

// TODO: import express-session

// import auth helpers
import handleAuthBasic, { authFilter } from './handlers/authBasic';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TODO: Use session and maxAge of 60000*60 (1 hr)

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



// TODO: Handle basic auth routes
// TODO: Use the authFilter middleware



app.use(require('./routeClient'));




app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Server listening on port %s', port);
  }
});
