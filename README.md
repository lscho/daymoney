## 使用场景

主要用于酒店预定、机票车票预定、旅游线路等等价格浮动较大的展示

## 使用方式

### 默认方式

[demo](http://lscho.github.io/am-daymoney/docs/demo.html)

```javascript
            var daydata = '[{"day":"2016-04-10|228"},{"day":"2016-04-11|228"},{"day":"2016-04-12|228"},{"day":"2016-04-13|228"},{"day":"2016-04-14|258"},{"day":"2016-04-15|228"},{"day":"2016-04-16|228"},{"day":"2016-04-17|308"},{"day":"2016-04-19|228"},{"day":"2016-04-20|228"},{"day":"2016-04-22|228"},{"day":"2016-04-23|228"},{"day":"2016-04-24|228"},{"day":"2016-04-25|228"},{"day":"2016-04-26|228"},{"day":"2016-04-27|228"},{"day":"2016-04-28|558"},{"day":"2016-04-29|228"},{"day":"2016-04-30|228"},{"day":"2016-04-31|228"}]';
            var daymoney=$("#calendar").daymoney({
                date:'2016-04',     //加载时默认显示的月份，不填则显示当前月份
                daydata:daydata,    //日期价格数据
                events:'click',     //监听事件，默认为click
                style:{
                    disabled:"am-disabled",     //禁用日期样式
                    active:"am-active",         //激活日期样式
                    today:"am-primary",         //当天日期样式
                },
                load:function(obj){               //加载完毕时触发
                    console.log('价格日历组件加载完毕');
                },
                click:function(obj){          //点击日期触发
                    var html=obj.data('date')+"的价格是:"+obj.data('money');
                    $('#alert').html(html);
                    $('#my-alert').modal('toggle');
                }
            }
            ).init();
```

### 输入框模式

[demo](http://lscho.github.io/am-daymoney/docs/demo1.html)

```javascript
            $('input').click(function(){
                $("#calendar").daymoney({
                    'click':function(obj){
                        $("#input").val(obj.data('date'));
                        $("#calendar").hide();
                    }
                }).init();
            });
```