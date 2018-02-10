const express = require('express'),
    bodyParser = require('body-parser'),
    ctrl = require('../server/controllers/controller'),
    app = express(),
    port = 3000


   app.use(bodyParser.json());
//    app.use( express.static ());


// app.post('api', .create)
// app.get( 'api', .read)
// app.put('api', .update)
// app.delete('api', .delete)


app.listen(port,()=> console.log(`Listening on port ${port}.`))