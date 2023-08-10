const jsexpress = require("express");
const port = process.env.port || 8000;

const application = jsexpress();

application.set('view engine','ejs');


application.get('/', (req, res) => {
    res.render('view');
  });


  application.post('/api', (req, res) => {
    const inputData = req.body.jsonInput;
    const resp = api.processInput(inputData);
    res.json(resp);
  });

application.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });