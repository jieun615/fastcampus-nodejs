const { send } = require('./request');
const { read }= require('./response');
function makeRequest(url, data) {
    // 요청 보내기
    send(url, data);
    // 데이터 return 하기
    return read();
}

const responseDate = makeRequest('https://naver.com', 'any data');
console.log(responseDate);