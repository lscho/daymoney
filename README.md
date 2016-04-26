##使用

```javascript
            var daydata = '[{"day":"2016-04-10|228"},{"day":"2016-04-11|228"},{"day":"2016-04-12|228"},{"day":"2016-04-13|228"},{"day":"2016-04-14|258"},{"day":"2016-04-15|228"},{"day":"2016-04-16|228"},{"day":"2016-04-17|308"},{"day":"2016-04-19|228"},{"day":"2016-04-20|228"},{"day":"2016-04-22|228"},{"day":"2016-04-23|228"},{"day":"2016-04-24|228"},{"day":"2016-04-25|228"},{"day":"2016-04-26|228"},{"day":"2016-04-27|228"},{"day":"2016-04-28|558"},{"day":"2016-04-29|228"},{"day":"2016-04-30|228"},{"day":"2016-04-31|228"}]';
            var daymoney=$("#calendar").daymoney({
                daydata:daydata,    //日期价格数据
                events:'click',     //监听事件，默认为click
                'prev':'btnPre',    //上一月
                'next':'btnNext',   //下一月
                'style':{
                    disabled:"am-disabled",     //禁用日期样式
                    active:"am-active",         //激活日期样式
                    today:"am-primary",         //当天日期样式
                },
                'load':function(obj){               //加载完毕时触发
                    console.log('价格日历组件加载完毕');
                },
                'click':function(obj){          //点击日期触发
                    var html=obj.data('date')+"的价格是:"+obj.data('money');
                    $('#alert').html(html);
                    $('#my-alert').modal('toggle');
                }
            }
            ).init();
```

##静态结构

```html
 <table class="am-table am-table-bordered">
    <caption><i class="am-daymoney-prev">&lt;&lt;</i><span id="yearNum">2016</span>年<span id="monthNum">4</span>月<i class="am-daymoney-next">&gt;&gt;</i></caption>
    <thead>
        <tr>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th class="red">六</th>
            <th class="red">日</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-date="2016-03-28" class=""><span>28</span></td>
            <td data-date="2016-03-29" class=""><span>29</span></td>
            <td data-date="2016-03-30" class=""><span>30</span></td>
            <td data-date="2016-03-31" class=""><span>31</span></td>
            <td data-date="2016-04-01" class="">1</td>
            <td data-date="2016-04-02" class="">2</td>
            <td data-date="2016-04-03" class="">3</td>
        </tr>
        <tr>
            <td data-date="2016-04-04" class="">4</td>
            <td data-date="2016-04-05" class="">5</td>
            <td data-date="2016-04-06" class="">6</td>
            <td data-date="2016-04-07" class="">7</td>
            <td data-date="2016-04-08" class="">8</td>
            <td data-date="2016-04-09" class="">9</td>
            <td data-money="228" data-date="2016-04-10" class=""><span id="dhx_month_head">10</span>
                <br><span id="dhx_month_body">￥228</span></td>
        </tr>
        <tr>
            <td data-money="228" data-date="2016-04-11" class=""><span id="dhx_month_head">11</span>
                <br><span id="dhx_month_body">￥228</span></td>
            <td data-money="228" data-date="2016-04-12" class=""><span id="dhx_month_head">12</span>
                <br><span id="dhx_month_body">￥228</span></td>
            <td data-money="228" data-date="2016-04-13" class=""><span id="dhx_month_head">13</span>
                <br><span id="dhx_month_body">￥228</span></td>
            <td data-money="258" data-date="2016-04-14" class=""><span id="dhx_month_head">14</span>
                <br><span id="dhx_month_body">￥258</span></td>
            <td data-money="228" data-date="2016-04-15" class=""><span id="dhx_month_head">15</span>
                <br><span id="dhx_month_body">￥228</span></td>
            <td data-money="228" data-date="2016-04-16" class=""><span id="dhx_month_head">16</span>
                <br><span id="dhx_month_body">￥228</span></td>
            <td data-money="308" data-date="2016-04-17" class=""><span id="dhx_month_head">17</span>
                <br><span id="dhx_month_body">￥308</span></td>
        </tr>
        <tr>
            <td data-date="2016-04-18" class="">18</td>
            <td data-money="228" data-date="2016-04-19" class=""><span id="dhx_month_head">19</span>
                <br><span id="dhx_month_body">￥228</span></td>
            <td data-money="228" data-date="2016-04-20" class=""><span id="dhx_month_head">20</span>
                <br><span id="dhx_month_body">￥228</span></td>
            <td data-date="2016-04-21" class="">21</td>
            <td data-money="228" data-date="2016-04-22" class=""><span id="dhx_month_head">22</span>
                <br><span id="dhx_month_body">￥228</span></td>
            <td data-money="228" data-date="2016-04-23" class=""><span id="dhx_month_head">23</span>
                <br><span id="dhx_month_body">￥228</span></td>
            <td data-money="228" data-date="2016-04-24" class=""><span id="dhx_month_head">24</span>
                <br><span id="dhx_month_body">￥228</span></td>
        </tr>
        <tr>
            <td data-money="228" data-date="2016-04-25" class=""><span id="dhx_month_head">25</span>
                <br><span id="dhx_month_body">￥228</span></td>
            <td data-money="228" data-date="2016-04-26" class=""><span id="dhx_month_head">26</span>
                <br><span id="dhx_month_body">￥228</span></td>
            <td data-money="228" data-date="2016-04-27" class=""><span id="dhx_month_head">27</span>
                <br><span id="dhx_month_body">￥228</span></td>
            <td data-money="558" data-date="2016-04-28" class=""><span id="dhx_month_head">28</span>
                <br><span id="dhx_month_body">￥558</span></td>
            <td data-money="228" data-date="2016-04-29" class=""><span id="dhx_month_head">29</span>
                <br><span id="dhx_month_body">￥228</span></td>
            <td data-money="228" data-date="2016-04-30" class=""><span id="dhx_month_head">30</span>
                <br><span id="dhx_month_body">￥228</span></td>
            <td data-date="2016-05-01" class=""><span>1</span></td>
        </tr>
        <tr>
            <td data-date="2016-05-02" class=""><span>2</span></td>
            <td data-date="2016-05-03" class=""><span>3</span></td>
            <td data-date="2016-05-04" class=""><span>4</span></td>
            <td data-date="2016-05-05" class=""><span>5</span></td>
            <td data-date="2016-05-06" class=""><span>6</span></td>
            <td data-date="2016-05-07" class=""><span>7</span></td>
            <td data-date="2016-05-08" class=""><span>8</span></td>
        </tr>
    </tbody>
</table>

```
