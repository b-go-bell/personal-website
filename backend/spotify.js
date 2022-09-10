/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

 const path = require('path');
 const express = require('express');
 const app = express();

 var request = require('request'); // "Request" library
 var cors = require('cors');

 var client_id = '398de0596e4846a9a8c00c073ab5b532'; // Your client id
 var client_secret = 'e2de734545aa4807a134beb734a8d009'; // Your secret

 // your application requests authorization
 var authOptions = {
   url: 'https://accounts.spotify.com/api/token',
   headers: {
     'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
   },
   form: {
     grant_type: 'client_credentials'
   },
   json: true
 };



 app.use(express.static(path.resolve(__dirname, '../../../app'))).use(cors());

 app.listen(process.env.PORT || 3000);

 app.get("/spotify-api", (req, res) => {

   request.post(authOptions, function(error, response, body) {
     if (!error && response.statusCode === 200) {

       // use the access token to access the Spotify Web API
       var options = {
         url: 'https://api.spotify.com/v1/users/d21cs4pdm4xlyug5c9aypcsz1',
         headers: {
           'Authorization': 'Bearer ' + body.access_token,
         },
         json: true
       };
       res.json({token: body.access_token});
     }
   });
 });


