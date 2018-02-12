const express = require('express');
const bodyParser = require('body-parser');
const sc = require('../server/controllers/show_controller');

const app = express();

const port = 3001;


app.use(bodyParser.json());
// app.use(express.static(_dirname + '/..public/build'));


const showBaseUrl = "/api/shows";
app.post(showBaseUrl, sc.create);
app.get(showBaseUrl, sc.read);
app.put(`${showBaseUrl}/:id`, sc.update);
app.delete(`${showBaseUrl}/:id`, sc.delete);

app.listen( port, () => { console.log(`Server listening on port ${port}`);});
 