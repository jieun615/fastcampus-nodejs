// const http = require('http');

// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hel10 W0rld!</h1>');
// });

// server.listen(port, () => {
//     console.log(`Server running at port ${port}`);
// });

const axios = require('axios');

axios.get('https://naver.com')
    .then((response) => {console.log(response)})
    .catch((error) => {console.log(error)});