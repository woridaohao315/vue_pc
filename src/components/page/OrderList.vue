<template>

  <div class="order-wrap">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <!-- selection组件的复用 -->
        <Selection :buyTypes="products" @on-change="getData('product',$event)" ></Selection>
      </div>

      <div class="order-list-option">
        开始日期：
        <v-date-picker @on-change="getData('startDate',$event)"></v-date-picker>
      </div>

      <div class="order-list-option">
        结束日期：
        <v-date-picker @on-change="getData('endDate',$event)"></v-date-picker>
      </div>

      <div class="order-list-option">
        关键词：
        <input type="text" v-model="query" class="order-query">
      </div>
      <div class="order-list-option check" @click="getList">查询</div>
    </div>
    <div class="order-list-table">

    </div>
  </div>
</template>

<script>
import Selection from "./detail/analysis/Selection";
import vDatePicker from ".././base/DatePicker";
export default {
    components:{
        Selection,vDatePicker
    },
    data(){
        return{
            query:"",
            products:"",
            //接收selection选择的内容
            product:"",
            startDate:"",
            endDate:""
        }
    },
    methods:{
        show(){
            console.log(this.$data);
            
        },
        getList(){
            console.log(this.$data);
            
        },
        
        getData(type,val){
            this[type]=val
        },
        getOrderProducts(){
            this.$axios.get(this.$apiUrl.orderlist.orderProducts)
            .then(res=>{
                this.products=res.data.data

                //初始化赋值
                this.product=res.data.data[0].label
                
                
            })
            .catch(err => {
            if (err) throw err
            })
        }
    },
    mounted(){
        this.getOrderProducts()
    }
}
</script>

<style>


	.order-wrap {
  width: 1200px;
  min-height: 800px;
  margin: 20px auto;
  overflow: hidden;
}
.order-wrap h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.order-query {
  height: 25px;
  line-height: 25px;
  border: 1px solid #e3e3e3;
  outline: none;
  text-indent: 10px;
}
.order-list-option {
  display: inline-block;
  padding-left: 15px;
}
.order-list-option:first-child {
  padding-left: 0;
}
.check{
	border: 1px solid #4fc08d;
	padding: 5px 20px;
	background: #fff;
	margin-left: 20px;
}
.check:hover{
	cursor: pointer;
}
.order-list-table {
  margin-top: 20px;
}
.order-list-table table {
  width: 100%;
  background: #fff;
}
.order-list-table td,
.order-list-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
}
.order-list-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
  cursor: pointer;
}
.order-list-table th.active {
  background: #35495e;
}

</style>
