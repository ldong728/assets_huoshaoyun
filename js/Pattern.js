var Pattern={
    regs : {
        address: /^[\u4e00-\u9fa5\w\d#\-_.]*$/,
        tel:/^\d{11}$/,
        user_tel:/^\d{11}$/,
        entity_tel:/^\d{11}$/,
        code:/^\d{4}$/,
        user_password:/^.{6,20}$/,
        password_new:/^.{6,20}$/,
        company_name: /^[\u4e00-\u9fa5\w\d#\-_.]*$/,
        contacts: /^[\u4e00-\u9fa5\w\d#\-_.]*$/,
        phone: /^\d{8,11}$/,
        location: /^[\u4e00-\u9fa5\w\d#\- _.]*$/,
        bank_name: /^[\u4e00-\u9fa5\w\d#\-_.]*$/,
        bank_account: /^\d{10,30}$/,
        company_industry: /^[\u4e00-\u9fa5\w\d#\- _.]*$/

    },
    data_name : {
        name:"姓名",
        address: "地址",
        province: "省份",
        city: "城市",
        area: "地区",
        tel:"手机号",
        entity_name:"联系人",
        user_tel:"手机号",
        entity_title:"单位名称",
        entity_license:"营业执照",
        user_password:"密码",
        password_old:"登录密码",
        password_new:"新密码",
        code:"验证码",
        entity_tel:"联系电话",
        company_name: '单位名称',
        contacts: '联系人',
        phone: '联系电话',
        location: '详细地址',
        bank_name: '开户行',
        bank_account: '开户行账号',
        company_industry: '所属行业'
    },
    maxLength : {
        name: 5,
        address: 255,
        tel:11,
        entity_name:8,
        user_tel:11,
        entity_title:20,
        entity_license:18,
        company_name: 50,
        contacts: 5,
        phone: 11,
        location: 50,
        bank_name: 50,
        bank_account: 30,
        company_industry: 50
    },
    checkErr:function(data_field, data){
        var reg = this.regs[data_field];

        var result = {};
        if(data.length<1){
            return this.data_name[data_field]+"不能为空";
        }
        if(data.length>this.maxLength[data_field]){
            return this.data_name[data_field]+"过长";
        }
        if(!reg)return false;
        if(!reg.test(data)){
            return this.data_name[data_field]+"格式错误";
        }
        return false;
    }
};