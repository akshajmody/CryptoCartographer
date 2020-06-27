const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
const PORT = 3015;
app.listen(PORT, () => {
  console.log(`CRYPTO APP - listening on port ${PORT}`)
});
app.use(express.static('public'));

