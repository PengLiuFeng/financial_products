var request=require('../../../../util/requestHandle.js');
var baseConfig=require('../../../../config/baseConfig.json');
var handleRes=require('../../../../util/temp/v1/handleResUtil.js');
var tool=require('./../../../../util/temp/baoli/tool.js');
var fs = require('fs');
var uri=baseConfig.aggregator;

var multer = require('multer');//引入multer
var upload = multer({dest: 'uploads/'});//设置上传文件存储地址
var url_baoli=baseConfig.baoli;

module.exports = function attachHandlers(router) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

    /**
    *  上传文件
    */
    router.post('/fina/uploadFile', upload.single('file'), (req, res, next) => {
        let ret = {};
        ret['code'] = 20000;
        var file = req.file;
        var fileInfo = req.query.fileInfo;
        if (file) {
                var fileNameArr = file.originalname.split('.');
                var suffix = fileNameArr[fileNameArr.length - 1];
                //文件重命名
                fs.renameSync('./uploads/' + file.filename, `./uploads/${file.filename}.${suffix}`);
                file['newfilename'] = `${file.filename}.${suffix}`;
            }else{
                ret['error']="请选择文件";
            }
            ret['file'] = file;
            ret['fileInfo'] = fileInfo;
            res.send(handleRes.handleRes(false, {statusCode:200}, ret));
        })
    router.get('/fina/custom/list',
        function (req, res) {
            let par = tool.jsonget(1, req.query);//json转get参数
            var options =
            {
                url: url_baoli + '/custom/list?' + par,
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
        function (req, res) {
            let par = tool.jsonget(1, req.query);//json转get参数
            var options =
            {
                url: url_baoli + '/custom/detail?' + par,
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
    /**
     * 新增用户接口
     */
    router.post('/fina/custom/cardInsert',
        function (req, res) {
            let options =
            {
                url: url_baoli + '/custom/cardInsert',
                method: 'POST',
                json: true,
                body: req.body
            };
            function callback(error, response, data) {
                res.send(handleRes.handleRes(error, response, data));
            }
            request(options, callback);
        });
    /**
     * 添加用户信息
     */
    router.post('/fina/custom/corpInsert',
        function (req, res) {
            let options =
            {
                url: url_baoli + '/custom/corpInsert',
                method: 'POST',
                json: true,
                body: req.body
            };
            function callback(error, response, data) {
                res.send(handleRes.handleRes(error, response, data));
            }
            request(options, callback);
        });
    /*客户概括信息添加 */
    router.post('/fina/custom/generalInsert',
        function (req, res) {
            let options =
            {
                url: url_baoli + '/custom/generalInsert',
                method: 'POST',
                json: true,
                body: req.body
            };
            function callback(error, response, data) {
                res.send(handleRes.handleRes(error, response, data));
            }
            request(options, callback);
        });
    //下拉框列表
    router.post('/fina/dict/dictList',
        function (req, res) {
            // console.log(req.body)//请求参数
            var options =
            {
                url: url_baoli + '/dict/dictList',
                method: 'POST',
                json: true,
                body: req.body
            };
            function callback(error, response, data) {
                res.send(handleRes.handleRes(error, response, data));
            }

            request(options, callback);
        });
    ////下拉框列表
    router.get('/fina/dict/dictList',
        function (req, res) {
            // console.log(req.body)//请求参数
            var options =
            {
                url: url_baoli + '/dict/dictList',
                method: 'POST',
                json: true,
                body: req.query
            };
            function callback(error, response, data) {
                res.send(handleRes.handleRes(error, response, data));
            }

            request(options, callback);
        });
    /*概况信息查询接口 */
    router.get('/fina/custom/generalDetail',
        function (req, res) {
            let par = tool.jsonget(1, req.query);//json转get参数
            let options =
            {
                url: url_baoli + '/custom/generalDetail?' + par,
                method: 'GET'
            };
            function callback(error, response, data) {
                res.send(handleRes.handleRes(error, response, data));
            }

            request(options, callback);
        });
    
    /*---------------------------------------------- */
    ////下拉框列表
    function xlk(back, arr, arr2, responses, errors) {
        let id = arr.shift();
        if (id) {
            let options =
            {
                url: url_baoli + '/dict/dictList',
                method: 'POST',
                json: true,
                body: { "fieldName": "" + id }
            };
            request(options, function (error, response, data) {
                data['myid'] = id;
                let it = null;
                for (let i = 0; i < data.data.length; i++) {
                    it = data.data[i];
                    data.data[i]['label'] = it.keyName;
                    data.data[i]['value'] = it.keyValue;
                }
                arr2.push(data);
                responses = response;
                xlk(back, arr, arr2, responses, error);
            });
        } else {
            back(arr2, responses, errors);
        }
    }
    router.get('/fina/dict/dictListList',
        function (req, res) {//请求方法
            let ids = req.query.ids;//根据uri得到参数(字符串)
            ids = ids.split(',');//把字符串转为数组
            xlk(function (data, responses, errors) {//调用xlk方法,给匿名函数传入数据,响应参数和错误参数
                res.send(handleRes.handleRes(errors, responses, data));
            }, ids, [])
        });

    /*---------------------------------------------------------------- */
    //评级授信分页接口
    router.get('/fina/grade/list',
        function (req, res) {
            let par = tool.jsonget(1, req.query);//json转get参数
            var options =
            {
                url: url_baoli + '/grade/list?' + par,
                method: 'GET'
            };
            function callback(error, response, data) {
                console.log(data)
                data = data.replace('cifName', 'cuName');
                data = data.replace('cifNo', 'cuNo');
                res.send(handleRes.handleRes(error, response, data));
            }

            request(options, callback);
        });
    //授信详情
    router.get('/fina/grade/detail',
        function (req, res) {
            let par = tool.jsonget(1, req.query);//json转get参数
            let options =
            {
                url: url_baoli + '/grade/detail?' + par,
                method: 'GET'
            };
            function callback(error, response, data) {
                res.send(handleRes.handleRes(error, response, data));
            }

            request(options, callback);
        });
    //保存授信详情
    router.post('/fina/grade/detailInsert',
        function (req, res) {
            let options =
            {
                url: url_baoli + '/grade/detailInsert',
                method: 'POST',
                json: true,
                body: req.body
            };
            function callback(error, response, data) {
                res.send(handleRes.handleRes(error, response, data));
            }
            request(options, callback);
        });
    //新增授信
    router.post('/fina/grade/idvalidate',
        function (req, res) {
            let options =
            {
                url: url_baoli + '/grade/idvalidate',
                method: 'POST',
                json: true,
                body: req.body
            }
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
     //拦截所有POST请求
     router.post(/^\/(fina)\/(.+)/,
        function(req, res) {
            let options =
                {
                    url: url_baoli+req.url.slice(5,255),
                    method: 'POST',
                    json:true,
                    body: req.body
                };
                function callback(error, response, data) {
                    res.send(handleRes.handleRes(error, response, data));
                }
                request(options, callback);
        });
     //拦截所有get请求
        router.get(/^\/(fina)\/(.+)/,
        function(req, res) {
            let options =
            {
                url: url_baoli+req.url.slice(5,1255),
                method: 'GET'
            };
            function callback(error, response, data) {
                res.send(handleRes.handleRes(error, response, data));
            }
    
            request(options, callback);
        });
    //获取所有aggregators
    router.get('/v1/aggregators',
        function (req, res) {
            var options =
            {
                url: uri + '/aggregators',
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
        function (req, res) {

            var id = encodeURI(req.params.id);
            var options =
            {
                url: uri + '/aggregators/' + id,
                method: 'DELETE'
            };
            function callback(error, response, data) {
                res.send(handleRes.handleRes(error, response, data));
            }

            request(options, callback);

        });
    //新增aggregators
    router.post('/v1/aggregators',
        function (req, res) {
            //数据改装成接口需要的格式
            // req.body.mapping.map(funvtion(item){
            //     return
            // });
            var mapping = {};
            if (req.body.event.mappingType == '1') {

            } else {
                req.body.event.scriptEngine = "";
                req.body.event.mappingScript = "";
                req.body.event.mapping.forEach(function (item) {
                    mapping[item.param_key] = item.param_value;
                });
            }
            req.body.event.mapping = mapping;
            var options =
            {
                url: uri + '/aggregators',
                method: 'POST',
                json: true,
                body: req.body
            };
            function callback(error, response, data) {
                res.send(handleRes.handleRes(error, response, data));
            }

            request(options, callback);
        });
    //获取aggregators详情
    router.get('/v1/aggregators/:id',
        function (req, res) {
            var id = encodeURI(req.params.id);
            var options =
            {
                url: uri + '/aggregators/' + id,
                method: 'GET'
            };
            function callback(error, response, data) {
                res.send(handleRes.handleRes(error, response, data));
            }

            request(options, callback);
        });
    //修改aggregators
    router.put('/v1/aggregators/:id',
        function (req, res) {
            var id = encodeURI(req.params.id);
            //数据改装成接口需要的格式
            var mapping = {};
            if (req.body.event.mappingType == '1') {

            } else {
                req.body.event.scriptEngine = "";
                req.body.event.mappingScript = "";
                req.body.event.mapping.forEach(function (item) {
                    mapping[item.param_key] = item.param_value;
                });
            }
            req.body.event.mapping = mapping;
            var options =
            {
                url: uri + '/aggregators/' + id,
                method: 'PUT',
                json: true,
                body: req.body
            };
            function callback(error, response, data) {
                res.send(handleRes.handleRes(error, response, data));
            }
            request(options, callback);
        });
};
