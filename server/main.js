const express = require("express");
const http = require('http'); // 서버를 만드는 모듈 불러옴
const app = express();
const cors=require('cors');
var detailRouter = require('./routes/detail'); //라우터js 경로
var mapRouter=  require('./routes/map');
var indexRouter=  require('./routes/index');
var bodyParser = require('body-parser');               
app.set('port', process.env.PORT || 3002);

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());
// app.use(bodyParser.json());

// 미들웨어 함수 등록 (클라이언트 요청이 들어 왔을 때, 호출 됨)
app.use(function(req, res, next){
    console.log('첫 번째 미들웨어 호출됨');
    
    res.writeHead(200, {"Content-Type" : "text/html;charset=utf8"});
    res.end('<h1>서버에서 응답한 결과입니다. </h1>');
});

// 서버 생성 
var server = http.createServer(app).listen(app.get('port') , function(){
    console.log('익스프레스로 웹 서버 실행 : ' + app.get('port'));
}); 


app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/api/', indexRouter);
app.use('/api/map', mapRouter);  //상위경로 지정, 라우터 사용
app.use('/api/detail', detailRouter);

// const port=3002;
// app.listen(port, function () {
//     console.log(`Example app listening at http://localhost:${port}`);
// })