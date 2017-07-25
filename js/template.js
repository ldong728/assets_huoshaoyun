var Templates={

    PageStyleList : {
        index: {
            header: 'index',
            footer: 'default'
        },
        allAddress: {
            header: 'default',
            footer: 'noFooter'
        },
        allOrder: {
            header: 'default',
            footer: 'noFooter'
        },
        classify: {
            header: 'classify',
            footer: 'default'
        },
        dealer: {
            header: 'default',
            footer: 'noFooter'
        },
        goodsDetail: {
            header: 'noHeader',
            footer: 'noFooter'
        },
        goodsList: {
            header: 'classify',
            footer: 'default'
        },
        mobieLogin: {
            header: 'default',
            footer: 'noFooter'
        },
        newAddress: {
            header: 'default',
            footer: 'noFooter'
        },
        orderBy: {
            header: 'default',
            footer: 'noFooter'
        },
        orderDetail: {
            header: 'default',
            footer: 'noFooter'
        },
        pageCur: {
            header: 'noHeader',
            footer: 'default'
        },
        pwdChange: {
            header: 'default',
            footer: 'noFooter'
        },
        register: {
            header: 'default',
            footer: 'noFooter'
        },
        reviseAddress: {
            header: 'reviseAddress',
            footer: 'noFooter'
        },
        setSystem: {
            header: 'setSystem',
            footer: 'noFooter'
        },
        shopAddress: {
            header: 'default',
            footer: 'noFooter'
        },
        shopCart: {
            header: 'default',
            footer: 'shopCart'
        },
        shopList: {
            header: 'shopList',
            footer: 'default'
        },
        smrz: {
            header: 'default',
            footer: 'noFooter'
        },
        tx: {
            header: 'default',
            footer: 'noFooter'
        },
        userMessage_xiugai: {
            header: 'userMessage_xiugai',
            footer: 'noFooter'
        },
        userMessage: {
            header: 'userMessage',
            footer: 'noFooter'
        },
        yj: {
            header: 'default',
            footer: 'noFooter'
        }
    },

    headerList : {
        index:
        '<div class="flex flexHeader">' +
        '<div class="flex flexHeaderLogo_index">' +
        '<div>' +
        '<img src="../images/logo66.png" alt="logo">' +
        '</div>' +
        '</div>' +
        '<div class="flex flexHeaderSearch_index">' +
        '<div class="flex search-form">' +
        '<form action="" class="flex">' +
        '<button class="clearBtn"><i class="icon icon-search"></i></button>' +
        '<input type="search" name="search" placeholder="输入关键字搜索物品">' +
        '</form>' +
        '</div>' +
        '</div>' +
        '<div class="flex flexHeaderButtons_index">' +
        '<div class="flex">' +
        '<button class="clearBtn"><i class="icon icon-comment-o"></i></button>' +
        '<button class="clearBtn cart_btn"><i class="icon icon-shopping-cart"></i></button>' +
        '</div>' +
        '</div>' +
        '</div>',
        classify:
        '<header class="header bg-white border-bottom">' +
        '<div class="container">' +
        '<div class="row">' +
        '<button class="btn-white header-back h2"><i class="icon icon-angle-left"></i></button>' +
        '<div class="text-center h-middle set-place">' +
        '<button class="btn-white btn1"><i class="icon icon-search"></i></button>' +
        '<input type="text" name="search" placeholder="输入关键字搜索物品" class="header-search h4">' +
        '</div>' +
        '<button class="btn-white h3 right btn2"><i class="icon icon-cog color6"></i></button>' +
        '</div>' +
        '</div>' +
        '</header>',
        goodsDetail:
        '<header class="g-detail">' +
        '<div class="h-button">' +
        '<a class="left"><i class="icon icon-angle-left"></i></a>' +
        '<a class="right"><i class="icon icon-shopping-cart"></i></a>' +
        '</div>' +
        '</header>',
        reviseAddress:
        '<header class="header bg-white border-bottom">' +
        '<div class="container">' +
        '<div class="row">' +
        '<button class="btn-white header-back h2"><i class="icon icon-angle-left"></i></button>' +
        '<div class="text-center h-middle"><p class="h3">修改收货地址</p></div>' +
        '<button class="btn-white head-r confirmChange_btn">保存</button>' +
        '</div>' +
        '</div>' +
        '</header>',
        setSystem:
        '<header class="header bg-white border-bottom">' +
        '<div class="container">' +
        '<div class="row">' +
        '<button class="btn-white header-back h2"><i class="icon icon-angle-left"></i></button>' +
        '<div class="text-center h-middle"><p class="h3">系统设置</p></div>' +
        '<button class="btn-white h3 right serve"><i class="icon icon-ellipsis-h"></i></button>' +
        '</div>' +
        '</div>' +
        '</header>',
        shopList:
        '<header class="header bg-white border-bottom">' +
        '<div class="container">' +
        '<div class="row">' +
        '<button class="btn-white header-back h2"><i class="icon icon-angle-left"></i></button>' +
        '<div class="text-center h-middle set-place">' +
        '<label class="he-search"><i class="icon icon-search"></i></label>' +
        '<input type="text" name="search" placeholder="输入关键字搜索物品" class="header-search h4"></div>' +
        '<button class="btn-white h2 header-right"><i class="icon icon-shopping-cart"></i></button>' +
        '</div>' +
        '</div>' +
        '</header>',
        userMessage:
        '<header class="header bg-white border-bottom">' +
        '<div class="container">' +
        '<div class="row">' +
        '<button class="btn-white header-back h2"><i class="icon icon-angle-left"></i></button>' +
        '<div class="text-center h-middle"><p class="h3">个人资料</p></div>' +
        '<button class="btn-white head-r btn-xiu">修改</button>' +
        '</div>' +
        '</div>' +
        '</header>',
        default:
        '<header class="header bg-white border-bottom">' +
        '<div class="container">' +
        '<div class="row">' +
        '<button class="btn-white header-back h2"><i class="icon icon-angle-left"></i></button>' +
        '<div class="text-center h-middle"><p class="h3">{{{pageTitle}}}</p></div>' +
        '</div>' +
        '</div>' +
        '</header>',
        noHeader: '<div></div>'
    },

    footerList : {
        default:
        '<footer class="footer">' +
            '<nav>' +
                '<ul class="clearfix">' +
                    '<li class="footer_index">' +
                        '<a href="#">' +
                            '<p class="home-pic f-pic"><i class="icon icon-home"></i></p>' +
                            '<p class="f-text text-center">首页</p>' +
                        '</a>' +
                    '</li>' +
                    '<li class="footer_category">' +
                        '<a href="#">' +
                            '<p class="pro-pic f-pic"><i class="icon icon-list"></i></p>' +
                            '<p class="f-text text-center">产品分类</p>' +
                        '</a>' +
                    '</li>' +
                    '<li class="footer_orders">' +
                        '<a href="#">' +
                            '<p class="shop-pic f-pic"><i class="icon icon-file-text-o"></i></p>' +
                            '<p class="f-text text-center">订单</p>' +
                        '</a>' +
                    '</li>' +
                    '<li class="footer_mine">' +
                        '<a href="#">' +
                            '<p class="user-pic f-pic"><i class="icon icon-user"></i></p>' +
                            '<p class="f-text text-center">我的</p>' +
                        '</a>' +
                    '</li>' +
                '</ul>' +
            '</nav>' +
        '</footer>',
        shopCart:
        '<footer class="footer fixed">' +
            '<div class="container">' +
                '<button class="f-s-l left">' +
                    '<div class="left h2">' +
                        '<input type="checkbox" id="footer_selectAll" class="custom_checkbox" />' +
                        '<label for="footer_selectAll" class="icon"></label>' +
                    '</div>' +
                '</button>' +
                '<p class="f-l-txt">全选</p>' +

                '<button class="bg-red f-s-r">结  算</button>' +
                '<p class="f-r-txt">总计：<em class="red">￥<i id="footer_sum">0.00</i></em></p>' +
            '</div>' +
        '</footer>',
        noFooter: '<div></div>'
    },

    printHeader:function(page, title) {
        currentPage = page;
        var header = $('#template_header');
        var titleString = '本页面标题';
        if(title){
            titleString = title;
        }

        var headerStyleIndex = this.PageStyleList[page].header;
        var headerString = this.headerList[headerStyleIndex];
        headerString = headerString.replace('{{{pageTitle}}}',titleString);
        header.html(headerString);
        // console.log(headerString);
        header.css('top','0');
        return header.height();
    },
    printFooter:function(page) {
        var footer = $('#template_footer');
        var footerStyleIndex = this.PageStyleList[page].footer;
        footer.html(this.footerList[footerStyleIndex]);
        footer.css('bottom','0');
        return footer.height();
    },
    resizeBody:function (headerHeight, footerHeight) {
        var body = $('#template_body');
        var totalHeight = body.height();
        body.height(totalHeight-footerHeight);
        var heightDiv = $('<div></div>');
        heightDiv.height(headerHeight);
        body.prepend(heightDiv);
    },
    loadTemplates:function (page, title) {
        var headerHeight = Templates.printHeader(page, title);
        var footerHeight = Templates.printFooter(page);
        Templates.resizeBody(headerHeight,footerHeight);
    }
};