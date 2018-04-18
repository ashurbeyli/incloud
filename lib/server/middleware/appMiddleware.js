import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

export default function (app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static('public'));
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../views'));
}