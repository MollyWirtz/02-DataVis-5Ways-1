const express = require('express')
const app = express();
const port = 8000;

app.use(express.static('./d3/d3.html'))
app.use(express.static('./'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

