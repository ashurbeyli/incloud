import express from 'express';

import db from './config/db';
import api from './api';
import serverRender from '../../public/serverApp';
import appMiddleware from './middleware/appMiddleware';
import errorHandler from './middleware/errorHandler';

const app = express();

// connecting to DB
db.connect();

appMiddleware(app);
app.use('/api', api);


app.get('*', (req, res) => {
  serverRender(req, res).then((initialData) => {
    res.render('index', { ...initialData });
  });
});

app.use(errorHandler);

export default app;