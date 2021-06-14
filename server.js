const express = require("express");
const serveStatic = require("serve-static");
const history = require("connect-history-api-fallback");
const enforce = require("express-sslify");

const app = express();
app.use(enforce.HTTPS({trustProtoHeader: true}));
app.use(serveStatic(__dirName + "/dist"));
app.use(history());
app.listen(process.env.port || 5000);