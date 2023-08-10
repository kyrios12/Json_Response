const jsexpress = require("express");
const port = process.env.port || 8000;

const application = jsexpress();









app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });