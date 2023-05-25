var express = require("express");
var app = express();
require('dotenv').config()
const PORT = process.env.PORT ? process.env.PORT : 3004;
const URL = process.env.URL ? process.env.URL : 'https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/';
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const request = require('request-promise');
const options = {
    method: 'GET',
    uri: `${URL}`,
    json: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
}

app.get("/v1/api", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    request(options).then(function (response) {
        res.status(200).json(response);
    }).catch(function (err) { res.status(400).json({ error: err }) })
});