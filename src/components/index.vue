<template>
    <div id="index">
        <div class="left">
            <div class="all_goods">
                <div class="pc_goods">
                    <h3>PC类产品</h3>
                    <ul>
                        <li><a href="#">数据统计</a></li>
                        <li><a href="#">数据预测</a></li>
                        <li><a href="#">流量分析</a><span class="hot">HOT</span></li>
                        <li><a href="#">广告发布</a></li>
                    </ul>
                </div>
                <div class="mobile_goods">
                    <h3>手机类应用</h3>
                    <ul>
                        <li><a href="#">91助手</a></li>
                        <li><a href="#">产品助手</a></li>
                        <li><a href="#">智能地图</a><span class="hot">HOT</span></li>
                        <li><a href="#">团队语音</a></li>

                    </ul>
                </div>
            </div>
            <div class="news">

            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.left{
    float: left;
}
.left li{
    border:none;
}
.all_goods li a{
    color:#000;
}
.all_goods li>.hot{
    background-color: #f00;
    color: #fff;
}
</style>
