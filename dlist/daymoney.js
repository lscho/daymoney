(function($) {
    var daymoney = function(data) {
            this.daydata = data.daydata;
            this.aMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            this.oDate = data.date?new Date(data.date):new Date();
            this.iYear = this.oDate.getFullYear();
            this.iMonth = this.oDate.getMonth();
            this.iDay = this.oDate.getDate();
            this.oCalendar = $('#'+data.id)[0];
            this.aTd = $('#'+data.id+' td');
            this.oBtnPre = $('#'+data.id+' .am-daymoney-prev')[0];
            this.oBtnNext = $('#'+data.id+' .am-daymoney-next')[0];
            this.oTime = document.getElementById('time');
            this.events = data.events;
            this.style = data.style;
            this.load = data.load;
            this.click = data.click;
        }
        //上一月
    daymoney.prototype.prev = function() {
            if (this.iMonth == 0) {
                this.iMonth = 11
                this.iYear--;
            } else {
                this.iMonth--;
            }
            this._loadDate();
        }
        //下一月
    daymoney.prototype.next = function() {
        if (this.iMonth == 11) {
            this.iMonth = 0;
            this.iYear++;
        } else {
            this.iMonth++;
        }
        this._loadDate();
    }
    daymoney.prototype.setmoney=function(day,money,callback){
        var data=this.daydata;
        var is=false;
        for(var o in data){
            if(data[o].day.indexOf(day)>-1){
                data[o].day=day+'|'+money;
                is=true;
            }
        }
        if(!is){
            data.push({day:day+'|'+money});
        }
        this._loadDate();
        callback({day:day,money:money});
    }
    //初始化
    daymoney.prototype.init = function() {
            var oBtnPre = this.oBtnPre;
            var oBtnNext = this.oBtnNext;
            var events = this.events;
            var load = this.load;
            var click = this.click;
            var td = this.aTd;
            var self = this;
            this._loadDate();
            //注册事件
            if (oBtnPre) {
                oBtnPre.addEventListener(events, function() {
                    self.prev()
                });
            }
            if (oBtnNext) {
                oBtnNext.addEventListener(events, function() {
                    self.next();
                });
            }
            if(click){
                $(td).on(events, function() {
                    click($(this));
                });
            }
            if(load){
                load(this);
            }
            self.oCalendar.style.display='block';
            return this;
        }
        //加载日历
    daymoney.prototype._loadDate = function() {
        var daydatas = this.daydata;
        var aMonthDays = this.aMonthDays;
        var oDate = this.oDate;
        var iYear = this.iYear;
        var iMonth = this.iMonth;
        var iDay = this.iDay;
        var oCalendar = this.oCalendar;
        var aTd = this.aTd;
        var oBtnPre = this.oBtnPre;
        var oBtnNext = this.oBtnNext;
        var oTime = this.oTime;
        var events = this.events;
        //清除类名
        var clearClass = function() {
                for (var i = 0; i < aTd.length; i++) {
                    aTd[i].className = '';
                }
            }
            //获取日期
        var getMonthDays = function(y, m) {
            if (m < 0) {
                m = 11;
            }
            if (m > 11) {
                m = 0;
            }
            if (m == 1) {
                return ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) ? 29 : 28;
            } else {
                return aMonthDays[m];
            }
        }
        var iWeek = new Date(iYear, iMonth, 1).getDay(); //获得本月第一天是星期几
        var iCurDays = getMonthDays(iYear, iMonth); //获得本月天数
        var iPreDays = getMonthDays(iYear, iMonth - 1); //获得上月天数
        $('.am-daymoney-year').html(iYear);
        $('.am-daymoney-month').html(iMonth + 1);
        var data = [],
            y_list = [],
            m_list = [],
            d_list = [],
            y = iYear,
            m = iMonth + 1;
        clearClass();
        if (iWeek == 0) {
            iWeek = 7;
        }
        //上月数据
        for (var i = iWeek - 2; i >= 0; i--) {
            y_list.push((m == 1) ? y - 1 : y);
            m_list.push((m == 1) ? 12 : m - 1);
            d_list.push(iPreDays - i);
            data.push('<span>' + (iPreDays - i) + '</span>')
        }
        //本月数据
        for (var i = 1; i <= iCurDays; i++) {
            y_list.push(y);
            m_list.push(m);
            d_list.push(i);
            data.push(i);

        }
        //下月数据
        var iLackNum = aTd.length - data.length;
        for (var i = 1; i <= iLackNum; i++) {
            y_list.push((m == 12) ? y + 1 : y);
            m_list.push((m == 12) ? 1 : m + 1);
            d_list.push(i);
            data.push('<span>' + i + '</span>');
        }
        for (var i = 0; i < data.length; i++) {
            var this_y = y_list[i];
            var this_m = (m_list[i] > 9) ? m_list[i] : '0' + m_list[i];
            var this_d = (d_list[i] > 9) ? d_list[i] : '0' + d_list[i];
            aTd[i].setAttribute('data-date', this_y + '-' + this_m + '-' + this_d);
            if (new Date(this_y + '-' + this_m + '-' + this_d) > new Date()) {
                aTd[i].className = this.style.active;
            } else if (new Date(this_y + '-' + this_m + '-' + this_d) < new Date()) {
                aTd[i].className = parseInt(Math.abs(new Date(this_y + '-' + this_m + '-' + this_d) - new Date()) / 1000 / 60 / 60 / 24) != 0 ? this.style.disabled : this.style.today;
            }
            aTd[i].innerHTML = data[i];
            aTd[i].index = i;
            if (daydatas) {
                for (var j = 0; j < daydatas.length; j++) {
                    oneday = daydatas[j].day.split("|")[0];
                    money = daydatas[j].day.split("|")[1];
                    ye = oneday.split("-")[0];
                    mo = oneday.split("-")[1];
                    da = oneday.split("-")[2];

                    if (mo.split('')[0] == 0) {
                        mo = mo.split('')[1];
                    }
                    if (da.split('')[0] == 0) {
                        var da = da.split('')[1];
                    }
                    if (y == ye && m == mo && data[i] == da) {
                        if (mo.length < 2) {
                            mo = 0 + mo;
                        }
                        aTd[i].setAttribute('data-money', money);
                        aTd[i].innerHTML = '<span class="am-daymoney-month-head">' + da + '</span><br/><span class="daymoney-month-body">￥' + money + '</span>';
                    }
                }
            }
        }
    }
    $.fn.daymoney = function(data) {
        var html = '<table class="am-table am-table-bordered"><caption><i class="am-daymoney-prev"><<</i><span class="am-daymoney-year"></span>年<span class="am-daymoney-month"></span>月<i class="am-daymoney-next">>></i></caption><thead><tr><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th class="red">六</th><th class="red">日</th></tr></thead><tbody>';
        for (var i = 0; i < 6; i++) {
            html += '<tr>';
            for (var t = 0; t < 7; t++) {
                html += '<td></td>';
            }
            html += '</tr>';
        }
        html += '</tbody></table>';
        this.html(html);
        if (!data) data = {};
        data.id = this.attr('id');
        if(data.daydata){
            data.daydata = (typeof data.daydata == 'object') ? data.daydata : JSON.parse(data.daydata);
        }else{
            data.daydata={};
        }
        data.events = data.events ? data.events : 'click';
        if (!data.style) data.style = {};
        data.style.disabled = data.style.disabled ? data.style.disabled : "am-disabled";
        data.style.active = data.style.active ? data.style.active : "am-active";
        data.style.today = data.style.today ? data.style.today : "am-primary";
        return new daymoney(data);
    }
})(jQuery);
