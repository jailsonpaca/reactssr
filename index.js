import * as functions from "firebase-functions";
import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './src/App';
import getData from './src/components/getData';
import express from 'express';
import fs from 'fs';

const indexAdmin=fs.readFileSync(__dirname + '/admin/index.html','utf8');
const index=fs.readFileSync(__dirname + '/index.html','utf8');
const app=express();

app.get('/admin',(req,res)=>{

    res.set('Cache-Control','public, max-age=31536000, s-maxage=31536000');
    res.send(indexAdmin);
});

app.get('**',(req,res)=>{
    const context = {};
    console.log("TESTE 1");
    getData().then(data=>{
      const html=  renderToString(<StaticRouter location={req.url} context={context}>
        <App props={data} />
      </StaticRouter>);
      console.log("TESTE 1");
      const finalHtml=index.replace('<!-- ::APP:: -->',html);
      res.set('Cache-Control','public, max-age=31536000, s-maxage=31536000');
      res.send(finalHtml);
    })
});





export const ssrappfabianocorrea = functions.https.onRequest(app);

