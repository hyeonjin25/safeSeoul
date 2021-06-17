const express = require("express");
var router = express.Router();
const con = require("../lib/mysql.js");


//최근 2주간 가장 많이 발생한 재난종류 (map.page)
router.post('/disaster', function (req, res) {
    var startDate=req.body.startDate;
    var endDate=startDate.setDate(tDate.getDate()+14);
    var month1=startDate.getMonth()+1;
    var date1=startDate.getDate();
    var month2=endDate.getMonth()+1;
    var date2=endDate.getDate();
    var disaster;
    var region=req.body.region_name;
    var arr=['지진','한파','강풍','미세먼지','태풍','폭우','폭설','폭염','화재','폭발','코로나19'];
    var max=0;
    var tmp;
    var result;
    for(var i=0;i<11;i++){
        disaster=arr[i];
        var sql = 'SELECT count(me) as mycount FROM project2 join disaster_info WHERE (mo>=? and da>=?) and (mo<=? and da<=?) and (me like "%"?"%") and (disaster_small like "%"?"%") and (re=?)';    //
        var params=[month1,date1,month2,date2,disaster,disaster,region];
        con.query(sql, params, function (err, results, fields) {
            tmp=results[0].mycount;
            if(max<tmp&&i!=10){
                max=tmp;
                result=disaster;
            }else if(max>=tmp&&i==10){
                res.json(result);
            }
            else if(max<=tmp&&i==10){
                max=tmp;
                result=disaster;
                res.json(result);
            }
            console.log(result);
        }) 
    }
});

module.exports = router;