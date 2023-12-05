const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Port: ${PORT}`);
})