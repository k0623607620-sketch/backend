const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('CLASSY CLEAN Backend ทำงานแล้ว');
});

app.listen(PORT, () => {
    console.log(`CLASSY CLEAN Backend running at http://localhost:${PORT}`);
});