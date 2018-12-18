tool={
    jsonget:function(type,par){
        var sstr = par;
        if(type==1){//json转get参数
            sstr=JSON.stringify(sstr)
            //{"a":"11","b":"12",}
            sstr = sstr.replace(/\t/g,"");
            sstr = sstr.replace(/\"/g,"").replace("{","").replace("}","").replace(",","&").replace(":","=");
            sstr = sstr.replace(/\"/g,"").replace(/{/g,"").replace(/}/g,"").replace(/,/g,"&").replace(/:/g,"=");
        }else{//get参数转json
            sstr = sstr.replace(/&/g,'","').replace(/=/g,'":"');
            sstr= '{"'+sstr+'"}';
        }
        return sstr;
    }
}
module.exports.jsonget=function(type,par){
    return tool.jsonget(type,par);
};