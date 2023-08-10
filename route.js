const jsexpress = require("express");
const port = process.env.port || 3000;
const parser = require("body-parser");
const api = require("./models/api");

const application = jsexpress();

application.set('view engine','ejs');
application.use(parser.urlencoded({extended: true}));
application.use(jsexpress.static('public'));
application.get('/', (req, res) => {
    res.render('view');
  });


  application.post('/api', (req, res) => {
    const inputData = req.body.input;
    const resp = api.processInput(inputData);
    res.json(resp);
  });

application.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });