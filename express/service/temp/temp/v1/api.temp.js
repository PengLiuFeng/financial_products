var request=require('../../../../util/requestHandle.js');
var baseConfig=require('../../../../config/baseConfig.json');
var handleRes=require('../../../../util/temp/v1/handleResUtil.js');
var tool=require('./../../../../util/temp/baoli/tool.js');
var uri=baseConfig.aggregator;
var url_baoli=baseConfig.baoli;

module.exports = function attachHandlers(router) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    router.get('/fina/custom/list',
    function(req, res) {
        let par=tool.jsonget(1,req.query);//json转get参数
        var options =
        {
            url: url_baoli+'/custom/list?'+par,
            method: 'GET'
        };
            function callback(error, response, data) {
                res.send(handleRes.handleRes(error, response, data));
            }

            request(options, callback);
    });
     /**
     * 综合信息接口
     */
    router.get('/fina/custom/detail',
        function(req, res){
            let par=tool.jsonget(1,req.query);//json转get参数
            var options =
            {
                url: url_baoli+'/custom/detail?'+par,
                method: 'GET'
            };
            function callback(error, response, data) {
                /* 
                    {
                        msg: "加载成功！",
                        apb: {…}, //基本信息
                        cpb: {…}, //联系信息
                        bpb:{…},  //概况信息
                        t: 1, 
                    }
                 */
                /* {
                    statusCode: 200, 
                    data: {
                            {
                                msg: "加载成功！",
                                apb: {…}, //基本信息
                                cpb: {…}, //联系信息
                                bpb:{…},  //概况信息
                                t: 1, 
                            }
                        }
                } */

                res.send(handleRes.handleRes(error, response, data));
            }
            request(options, callback);
        });
    //下拉框列表
    router.post('/fina/dict/dictList',
        function(req, res) {
            // console.log(req.body)//请求参数
            var options =
                {
                    url: url_baoli+'/dict/dictList',
                    method: 'POST',
                    json:true,
                    body: req.body
                };
                function callback(error, response, data) {
                    res.send(handleRes.handleRes(error, response, data));
                }

                request(options, callback);
        });
        ////下拉框列表
        router.get('/fina/dict/dictList',
        function(req, res) {
            // console.log(req.body)//请求参数
            var options =
                {
                    url: url_baoli+'/dict/dictList',
                    method: 'POST',
                    json:true,
                    body: req.query
                };
                function callback(error, response, data) {
                    res.send(handleRes.handleRes(error, response, data));
                }

                request(options, callback);
        });

/*---------------------------------------------- */
        ////下拉框列表
        function xlk(back,arr,arr2,responses,errors){
            let id=arr.shift();
            if(id){
                let options =
                {
                    url: url_baoli+'/dict/dictList',
                    method: 'POST',
                    json:true,
                    body: {"fieldName":""+id}
                };
                request(options, function(error, response, data){
                    arr2.push(data);
                    responses=response;
                    xlk(back,arr,arr2,responses,error);
                });
            }else{
                back(arr2,responses,errors);
            }
        }
        router.get('/fina/dict/dictListList',
        function(req, res) {//请求方法
                let ids=req.query.ids;//根据uri得到参数(字符串)
                ids=ids.split(',');//把字符串转为数组
                xlk(function(data,responses,errors){//调用xlk方法,给匿名函数传入数据,响应参数和错误参数
                    res.send(handleRes.handleRes(errors, responses, data));
                },ids,[])
        });

/*---------------------------------------------------------------- */
    //评级授信分页接口
    router.get('/fina/grade/list',
    function(req, res) {
        let par=tool.jsonget(1,req.query);//json转get参数
        var options =
        {
            url: url_baoli+'/grade/list?'+par,
            method: 'GET'
        };
            function callback(error, response, data) {
                console.log(data)
                data=data.replace('cifName','cuName');
                data=data.replace('cifNo','cuNo');
                res.send(handleRes.handleRes(error, response, data));
            }

            request(options, callback);
    });
    //授信详情
    router.get('/fina/grade/detail',
    function(req, res) {
        let par=tool.jsonget(1,req.query);//json转get参数
        let options =
        {
            url: url_baoli+'/grade/detail?'+par,
            method: 'GET'
        };
        function callback(error, response, data) {
            res.send(handleRes.handleRes(error, response, data));
        }

        request(options, callback);
    });
     //保存授信详情
     router.post('/fina/grade/detailInsert',
     function(req, res) {
         let options =
             {
                 url: url_baoli+'/grade/detailInsert',
                 method: 'POST',
                 json:true,
                 body: req.body
             };
             function callback(error, response, data) {
                 res.send(handleRes.handleRes(error, response, data));
             }
             request(options, callback);
     });
     //新增授信
     router.post('/fina/grade/idvalidate',
     function(req, res) {
         let options =
             {
                 url: url_baoli+'/grade/idvalidate',
                 method: 'POST',
                 json:true,
                 body: req.body
             };
             function callback(error, response, data) {
                 res.send(handleRes.handleRes(error, response, data));
             }
             request(options, callback);
     });
    //获取所有aggregators
    router.get('/v1/aggregators',
        function(req, res) {
                var options =
                {
                    url: uri+'/aggregators',
                    method: 'GET'
                };
                console.log(options)
                function callback(error, response, data) {
                            res.send(handleRes.handleRes(error, response, data));

                }

                request(options, callback);

        });
    //删除指定connectors
    router.delete('/v1/aggregators/:id',
        function(req, res) {

                var id=encodeURI(req.params.id);
                var options =
                {
                    url: uri+'/aggregators/'+id,
                    method: 'DELETE'
                };
                function callback(error, response, data) {
                    res.send(handleRes.handleRes(error, response, data));
                }

                request(options, callback);

        });
    //新增aggregators
    router.post('/v1/aggregators',
        function(req, res) {
                //数据改装成接口需要的格式
            // req.body.mapping.map(funvtion(item){
            //     return
            // });
            var mapping={};
            if(req.body.event.mappingType=='1'){

            }else{
                req.body.event.scriptEngine="";
                req.body.event.mappingScript="";
                req.body.event.mapping.forEach(function(item){
                    mapping[item.param_key]=item.param_value;
                });
            }
            req.body.event.mapping=mapping;
            var options =
                {
                    url: uri+'/aggregators',
                    method: 'POST',
                    json:true,
                    body: req.body
                };
                function callback(error, response, data) {
                    res.send(handleRes.handleRes(error, response, data));
                }

                request(options, callback);
        });
    //获取aggregators详情
    router.get('/v1/aggregators/:id',
        function(req, res) {
                var id=encodeURI(req.params.id);
                var options =
                {
                    url: uri+'/aggregators/'+id,
                    method: 'GET'
                };
                function callback(error, response, data) {
                    res.send(handleRes.handleRes(error, response, data));
                }

                request(options, callback);
        });
    //修改aggregators
    router.put('/v1/aggregators/:id',
        function(req, res) {
            var id=encodeURI(req.params.id);
            //数据改装成接口需要的格式
            var mapping={};
            if(req.body.event.mappingType=='1'){

            }else{
                req.body.event.scriptEngine="";
                req.body.event.mappingScript="";
                req.body.event.mapping.forEach(function(item){
                    mapping[item.param_key]=item.param_value;
                });
            }
            req.body.event.mapping=mapping;
            var options =
                {
                    url: uri+'/aggregators/'+id,
                    method: 'PUT',
                    json:true,
                    body:req.body
                };
                function callback(error, response, data) {
                    res.send(handleRes.handleRes(error, response, data));
                }
                request(options, callback);
        });
};
