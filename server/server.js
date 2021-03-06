const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/pdf', (req, res) => {
  res.download(__dirname + '/resume.pdf');
})

app.listen(port, () => console.log(`Listening on port ${port}`));