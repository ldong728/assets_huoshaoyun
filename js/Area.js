var Area={
    getAreaInf:function(data,defaultData){
        if(data){
            this.province=data.data.provinces;
            this.city=data.data.city;
            this.area=data.data.area;
        }
        if(defaultData){
            this.default_province=defaultData.province;
            this.default_city=defaultData.city;
            this.default_area=defaultData.area;
        }
        console.log(this);

        var province_container = $('.select-province');
        province_container.empty();
        province_container.append('<option value="">省/市/自治区</option>');
        var have_default_province = false;

        for(var pro in this.province){
            var content="<option value="+this.province[pro]+">"+this.province[pro]+"</option>";

            if($(content).val() == this.default_province){
                have_default_province = true;
            }
            province_container.append(content);
        }

        if(have_default_province){
            province_container.val(this.default_province);
        }

        province_container.attr('onchange','Area.setCity(this)');
        province_container.trigger('change');
    },
    setCity:function(element){
        var province=$(element).val();

        var cityContainer = $('.select-city');
        cityContainer.empty();
        cityContainer.append('<option value="">市</option>');
        var have_default_city = false;

        if(this.city[province] && cityContainer.length>0){
            var citylist=this.city[province];
            for(var city in citylist){
                var content="<option value="+citylist[city]+">"+citylist[city]+"</option>";
                if($(content).val() == this.default_city){
                    have_default_city = true;
                }
                cityContainer.append(content);
            }
        }

        if(have_default_city){
            cityContainer.val(this.default_city);
        }
        cityContainer.attr('onchange','Area.setArea(this)');
        cityContainer.trigger('change');
    },

    setArea:function(element){
        var city=$('.select-province').val()+$('.select-city').val();
        var area_container = $('.select-area');

        area_container.empty();
        area_container.append('<option value="">地区</option>');
        var have_default_area = false;

        if(this.area[city]&&area_container.length>0){
            var areaList=this.area[city];
            for(var area in areaList){
                var content="<option value="+areaList[area]+">"+areaList[area]+"</option>";
                if($(content).val() == this.default_area){
                    have_default_area = true;
                }
                area_container.append(content);
            }
        }
        if(have_default_area){
            area_container.val(this.default_area);
        }
    }
};
