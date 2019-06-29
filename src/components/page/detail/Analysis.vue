<template>

  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>流量分析</h2>
      <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
    </div>

    <div class="sales-board-form">


           <div class="sales-board-line">
              	<div class="sales-board-line-left">
                  购买数量：
              	</div>
              	<div class="sales-board-line-right">
                	<Counter @onChange="getData('Numbers',$event)"></Counter>
              	</div>
          	</div>


            <div class="sales-board-line">
              	<div class="sales-board-line-left">
                  产品类型：
              	</div>
              	<div class="sales-board-line-right">
                      <!-- 将请求的数据传给组件 -->
                  	<Selection :buyTypes="buyTypes"></Selection>
              	</div>
          	</div>

            <div class="sales-board-line">
              	<div class="sales-board-line-left">
                  有效时间：
              	</div>
              	<div class="sales-board-line-right">
                  <Chooser :periodList="periodList"></Chooser>
              	</div>
          	</div>


            <div class="sales-board-line">
              	<div class="sales-board-line-left">
                  产品版本：
              	</div>
              	<div class="sales-board-line-right">
                  <Product :versionList="versionList"></Product>
              	</div>
          	</div>












    </div>
















  </div>

</template>

<script>
import Counter from "./analysis/Counter";
import Selection from "./analysis/Selection";
import Chooser from "./analysis/Chooser";
import Product from "./analysis/Product";
export default {
    data(){
        return{
            Numbers:"",
            buyTypes:"",
            periodList:"",
            versionList:""
        }
    },
    components:{
        Counter,Selection,Chooser,Product
    },
    methods:{
        getData(attr,val){
            this[attr]=val;
            
        } ,
    getBuytypes(){
        this.$axios.get(this.$apiUrl.detail.buyTypes)
        .then(res=>{
            this.buyTypes=res.data
            
        })
        .catch(err=>{
            if(err) throw err
        })
    },
    getPeriodList(){
        this.$axios.get(this.$apiUrl.detail.periodList)
        .then(res=>{
            this.periodList=res.data
            console.log(this.periodList);
            
            
        })
        .catch(err=>{
            if(err) throw err
        })
    },
    getVersionList(){
        this.$axios.get(this.$apiUrl.detail.versionList)
        .then(res=>{
            this.versionList=res.data
            
            
        })
        .catch(err=>{
            if(err) throw err
        })
    }

    },
    mounted(){
    this.getBuytypes();
    this.getPeriodList();
    this.getVersionList();

    }
    
}

</script>

<style>
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}
</style>
