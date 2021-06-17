const express = require("express");
var router = express.Router();
const con = require("../lib/mysql.js");
var http = require('http');

// var region="";      //이 방법이 되는지 테스트 필요  -> api맞추기
// var region_id=1;
// var disaster="화재";
// var disaster_id=0;


// var month1="10";
// var date1="5";
// var month2="10";
// var date2="7";
// var period_list=[[month1,date1],[month2,date2]];    //배열 ->임의로 입력하기 (삭제)


//front로부터 해당 지역 받기
router.post('/post', function(req,res){
    var region=req.body.region_name;
    var region_id=req.body.region_id;
    console.log("region :", region);                                                                    
});

//재난 종류 받기
router.post('/post/:region_id', function(req,res){
    var disaster=req.body.disaster_small;
    var disaster_id=req.body.disaster_id;
    console.log("disaster :", disaster);                                                                    
});

//날짜,시간 설정하기
router.post('/post/:region_id/period', function(req,res){
    var period_list=req.body.period_list;
    console.log(date2-date1);                                    
});

//

//재난 문자 내용
router.get('/message', function (req, res) {
    var startDate=req.body.startDate;
    var endDate=req.body.endDate;
    var month1=startDate.getMonth()+1;
    var date1=startDate.getDate();
    var month2=endDate.getMonth()+1;
    var date2=endDate.getDate();
    var disaster=req.body.disaster;
    var region=req.body.region_name;
    var sql = 'SELECT * FROM project2 WHERE (mo>=? and da>=?) and (mo<=? and da<=?) and (me LIKE "%"?"%") and (re=?)';    //
    var params=[month1,date1,month2,date2,disaster,region];
    con.query(sql, params, function (err, results, fields) {
        if(err)
            console.log(err);
        res.json(results);
        console.log(results);
    })
});


//지역의 재난 종류의 행동요령
router.get('/tip', function (req, res) {
    var sql = 'SELECT * FROM tips WHERE disaster_small=?';    
    var params=req.body.disaster;
    con.query(sql, params,function (err, results, fields) {
        if(err)
            console.log(err);
        res.json(results);
        console.log(results);
    })
});


//자치구 사이트 주소
router.get('/site', function (req, res) {
    var sql = 'SELECT region_call, region_add FROM region_info WHERE region_name=?';   
    var params=req.body.region_name;
    con.query(sql, params,function (err, results, fields) {
        if(err)
            console.log(err);
        res.json(results);
        console.log(results);
    })
});


//재난 대분류 
router.get('/disaster_big', function (req, res) {
    var sql = 'SELECT * FROM disaster_info WHERE disaster_small=?';     
    var params=req.body.disaster;
    con.query(sql, params,function (err, results, fields) {
        if(err)
            console.log(err);
        res.json(results);
        console.log(results);
    })
});

module.exports = router;

//get 파일명이 저렇게 쓰는형식이 맞는지 확인!!