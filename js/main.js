document.write("<script src='../js/app.js'></script>");

function handleBack(data){
    if(data instanceof Object){
        return data;
    }else{
        // console.log(data);
        var dataObject=eval('('+data+')');
        // if(101==dataObject.error_code){
        //     header('login');
        //     return {};
        // }
        return dataObject;
    }
}
function copyObj(data) {
    return handleBack(JSON.stringify(data));
}

var currentPage; //<==在template中赋值
function header(page,parameter){
    // var par=parameter? "?"+parameter:"?";
    var par = '?';
    var fromPageString = currentPage;
    if(parameter instanceof String){
        par += parameter;
    }else if(parameter instanceof Object){
        for(var item in parameter){
            if(item == 'fromPage'){
                fromPageString = parameter[item];
            }
            else{
                par += '&'+item+'='+parameter[item];
            }
        }
    }
    var fromPage = '&fromPage='+fromPageString;
    window.location.href=page+".html"+par+fromPage;
}

function disPlayPrice(price){
    return new Number(price/100).toFixed(2)
}





var loadingTimeLimit = 10;
var loadingTimeWatcher;
function showLoadingLayer(zindexString,timeOutDest) {
    var zIndexFigure = zindexString;

    if(document.getElementById('LoadingLayer')){
        document.getElementById('LoadingLayer').style.zIndex = zIndexFigure;
        document.getElementById('LoadingLayer').style.display = "block";
    }else{
        var allWidth=document.body.scrollWidth;
        var allHeight=document.body.scrollHeight;
        var LoadingLayer=document.createElement("div");
        LoadingLayer.id="LoadingLayer";
        LoadingLayer.style.width=allWidth+"px";
        LoadingLayer.style.height=allHeight+"px";

        LoadingLayer.style.backgroundColor='rgba(255,255,255,1)';
        // LoadingLayer.style.opacity='.3';
        LoadingLayer.style.position='absolute';
        LoadingLayer.style.left='0';
        LoadingLayer.style.top='0';
        LoadingLayer.style.zIndex= zIndexFigure;
        LoadingLayer.style.display='block';

        var box = document.createElement("div");
        box.style.textAlign = "center";
        box.style.paddingTop = '40vh';

        var loadingIMG = document.createElement("img");
        loadingIMG.src = "../images/loading.gif";
        loadingIMG.style.height = '15vh';
        loadingIMG.style.width = 'auto';
        box.appendChild(loadingIMG);
        LoadingLayer.appendChild(box);

        document.body.appendChild(LoadingLayer);
    }
    loadingTimeWatcher = setTimeout(function () {
        if(timeOutDest){
            header(timeOutDest);
        }else{
            hideLoadingLayer(true);
        }

    },loadingTimeLimit*1000);
}
function hideLoadingLayer() {
    clearTimeout(loadingTimeWatcher);
    var LoadingLayer = document.getElementById('LoadingLayer');
    if(LoadingLayer){
        $("#LoadingLayer").fadeOut(100);
    }
}


function slideUpBox(element,slideBox){
    $(slideBox).css('bottom', '-30vh');
    $(slideBox).css('opacity', '0');
    $(element).fadeIn('fast');
    $(slideBox).animate({bottom: '10vh',opacity: 1},300);
}
function slideDownBox(element,slideBox){
    $(slideBox).animate({bottom: '-30vh',opacity: '0'},300, function () {
        $(element).fadeOut('fast');
    });
}
function showInputLayer(input){
    var InputLayer;
    if(document.getElementById('InputLayer')){
        InputLayer=document.getElementById('InputLayer');
        var box=$(InputLayer).find('div');
        box.html(input);
        $(InputLayer).fadeIn('fast');
    }else{
        var allWidth=document.body.scrollWidth;
        var allHeight=document.body.scrollHeight;
        InputLayer=document.createElement("div");
        InputLayer.id="InputLayer";
        InputLayer.style.width=allWidth+"px";
        InputLayer.style.height=allHeight+"px";

        InputLayer.style.backgroundColor='rgba(0,0,0,0.8)';
        //InputLayer.style.opacity='.3';
        InputLayer.style.position='fixed';
        InputLayer.style.left='0';
        InputLayer.style.top='0';
        InputLayer.style.zIndex='100';
        InputLayer.style.display='block';
        InputLayer.style.zIndex='9999';

        var box = document.createElement("div");
        box.style.textAlign = "center";
        box.style.paddingTop = '100px';

        //var loadingIMG = document.createElement("");
        //loadingIMG.src = "../images/loading.gif";
        $(box).html(input);
        $(InputLayer).html($(box));
        document.body.appendChild(InputLayer);
    }
    $('.input-in-layer').focus();
}
function hideInputLayer(){
    var originInput=$('.input-origin');
    var layerInput=$('.input-in-layer');
    originInput.removeClass('input-origin');
    originInput.val(layerInput.val());
    layerInput.remove();
    $('#InputLayer').fadeOut('fast');

    originInput.change();
    return originInput;
}

var prePosition = 0;
function scrollWatcher(scrollCallBack, touchButtomCallBack) {
    var scrollElement = $('#template_body');
    var nav = $('#template_header');
    if(scrollElement){
        scrollElement.scroll(function () {
            var currentPosition = $(this).scrollTop();
            var scrollHeight = this.scrollHeight;
            var clientHeight = this.clientHeight;
            var bottomPositon = scrollHeight-clientHeight;
            var moveDirection;
            if(currentPosition > prePosition){moveDirection = 'down';}
            else{moveDirection = 'up';}
            //console.log("currentPosition: "+currentPosition+" moveDirection: "+moveDirection);
            prePosition = currentPosition;

            if(nav){
                var displayValue = nav.css('display');
                var navHeight = nav.height();
                if(moveDirection == 'down'){
                    if(currentPosition > navHeight && displayValue == 'block'){
                        nav.hide();
                        if($('.cloneNav')[0] == undefined){
                            var cloneNav = nav.clone();
                            cloneNav.addClass('cloneNav');
                            $('body').append(cloneNav);
                        }
                        $('.cloneNav').show();
                        $('.cloneNav').fadeOut();
                    }
                }
                if(moveDirection == 'up'){
                    if(currentPosition < bottomPositon && displayValue == 'none'){
                        nav.show();
                    }
                }
            }


            if(scrollCallBack){
                scrollCallBack();
            }
            if (currentPosition >= bottomPositon) {
                // 滚动到底部了
                // console.log('滚动到底部了');
                if(touchButtomCallBack){
                    touchButtomCallBack();
                }
            }
        });
    }
}
function getElementOffset(element){
    var top=element.offsetTop;
    var left=element.offsetLeft;
    var current=element.offsetParent;
    console.log(current);
    while(null!=current){
        top+=current.offsetTop;
        left+=current.offsetLeft;
        current=current.offsetParent;
    }
    return top;
}
function goBack(){
    console.log('goBack');
    var currentLocation=location.href;
    console.log(currentLocation);
    var indexMark=/index/;
    if(currentLocation.match(indexMark)||currentLocation.match(/login/)){
        app.exitApp();
        return;
    }
    if(currentLocation.match(/registration/)){
        header('login');
        return;
    }
        header('index');

}


$(document).on('click','.footer_index',function(){
    // alert('了解云');
    header('index');
});
$(document).on('click','.footer_category',function(){
    // console.log('产品分类');
    header('classify');
});
$(document).on('click','.footer_orders',function(){
    // console.log('订单');
    header('allOrder');
});
$(document).on('click','.footer_mine',function(){
    // console.log('我的');
    header('pageCur');
});


$(document).on('keypress','.input-in-layer',function(event){
    if(13==event.keyCode){
        //var input=hideInputLayer();
        //input.change();
        $(this).blur();
    }
    console.log(event.keyCode);
});
var bodyHeight=0;
$(window).resize(function(){
    //return;//临时禁用
    var newHeight=document.body.clientHeight;
    if(0==bodyHeight||newHeight<bodyHeight){
        var element=$(document.activeElement);
        var inputElement=element.clone();
        element.addClass('input-origin');
        inputElement.removeAttr('class');
        inputElement.addClass('input-in-layer');

        showInputLayer(inputElement);
    }else{
        hideInputLayer();
    }
    console.log(document.body.clientHeight);


    bodyHeight=newHeight;

});


function checkImgLoad(selector, defaultImgSrc) {
    $(selector).find('img').each(function (key, value) {
        $(value).error(function(){
            $(this).attr('src', defaultImgSrc);
        })
    });
}
function prepareElement(){
    var returnData={};
    var classList=[];
    $.each(arguments,function(k,v){
        if($(v.toString()).length>0){
            returnData[v]=$(v).clone();
        }
        classList.push(v);
    });

    $.each(classList,function(k,v){
       $(v).remove();
    });
    return returnData;
}
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURI(r[2]); return null; //返回参数值
}
