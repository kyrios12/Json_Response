const jsexpress = require("express");
const port = process.env.port || 8000;

const application = jsexpress();

application.set('view engine','ejs');


application.get('/', (req, res) => {
    res.render('view');
  });




application.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });