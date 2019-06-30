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
          <Counter @on-change="getChange('buyNum',$event)"></Counter>
        </div>
      </div>

      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型：
        </div>
        <div class="sales-board-line-right">
          <!-- 将请求的数据传给组件 -->
          <Selection :buyTypes="buyTypes" @on-change="getChange('buyType',$event)"></Selection>
        </div>
      </div>

      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          <Chooser @on-change="getChange('endTime',$event)" :periodList="periodList"></Chooser>
        </div>
      </div>

      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品版本：
        </div>
        <div class="sales-board-line-right">
          <Product @on-change="getChange('versions',$event)" :versionList="versionList"></Product>
        </div>
      </div>

      <div class="sales-board-line">
        <div class="sales-board-line-left">&nbsp;</div>
        <div class="sales-board-line-right">
          <div class="button" @click="showPayDialog">
            立即购买
          </div>
        </div>
      </div>

      <BaseDialog :Show="Show" v-show="Show.show">
        <div>
          <table class="buy-dialog-table">
            <tr>
              <th>购买数量</th>
              <th>产品类型</th>
              <th>有效时间</th>
              <th>产品版本</th>
              <th>总价</th>
            </tr>
            <tr>
              <td>{{ buyNum }}</td>
              <td>{{ buyType }}</td>
              <td>{{ endTime }}</td>
              <td>
                <span v-for="item in versions">{{ item.label}},</span>
              </td>
              <td>{{ price }}</td>
            </tr>
          </table>
          <h3 class="buy-dialog-title">请选择银行</h3>
          <BankChooser :banks="banks" @on-change="getChange('bank',$event)"></BankChooser>
          <div class="button buy-dialog-btn" @click="confirmBuy">
            确认购买
          </div>
        </div>

      </BaseDialog>

    </div>

    <div class="sales-board-des">
	        <h2>产品说明</h2>
	        <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>
	
	        <h3>用户行为指标</h3>
	        <ul>
	          <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
	          <li>用户在网站的停留时间；</li>
	          <li>用户来源网站（也叫“引导网站”）；</li>
	          <li>用户所使用的搜索引擎及其关键词；</li>
	          <li>在不同时段的用户访问量情况等。</li>
	        </ul>
	        <h3>浏览网站方式</h3>
	        <ul>
	          <li>用户上网设备类型</li>
	          <li>用户浏览器的名称和版本</li>
	          <li>访问者电脑分辨率显示模式</li>
	          <li>用户所使用的操作系统名称和版本</li>
	          <li>用户所在地理区域分布状况等</li>
	        </ul>
    	</div>

  </div>

</template>

<script>
import Counter from "./analysis/Counter";
import Selection from "./analysis/Selection";
import Chooser from "./analysis/Chooser";
import Product from "./analysis/Product";
import BankChooser from "./analysis/BankChooser";
import BaseDialog from "../../base/Dialog";



export default {
  data() {
    return {
 //页面加载时为当前组件对象 绑定四个小组件的属性
      buyNum: 1,
      buyType: "",
      endTime: "",
      versions: [],

      Show: {
        show: false
      },
      buyTypes:"",

      Numbers: "",
      periodList: "",
      versionList: "",
      bank: "",
      // 银行订单信息的接口变量(传给子组件的)
      banks: "",
      price: "",
    }
  },
  components: {
    Counter, Selection, Chooser, Product, BaseDialog,BankChooser
  },
  methods: {
    confirmBuy() {
      this.Show.show=false;
      console.log(this.$data);
      this.$router.push({
        name:"OrderList",
        params:{
          "buyNum":this.buyNum,
          "buyType":this.buyType,
          "endTime":this.endTime,
          "versions":this.versions
        }
      })
      
    },
    getChange(attr,val) {
        this[attr]=val
    },
    showPayDialog() {
      this.Show.show = true
      // console.log("购买数量:"+this.buyNum,"购买类型:"+this.buyType,"时间:"+this.endTime,"版本选择:"+this.versions);
      // console.log(this.$data);
      //1.获取总价 2.渲染出来银行组件 3.给服务器传客户选择的参数
      this.$axios.get(this.$apiUrl.detail.getprice)
      .then(res=>{
        this.price=res.data.amount
      })
      .catch(err => {
      if (err) throw err
      })

      //给服务器传参
      let params=new URLSearchParams()
      params.append("buyNum",this.buyNum);
      params.append("buyType",this.buyType);
      params.append("endTime",this.endTime);
      params.append("versions",this.versions);
      //然后用post方法传就行 这里没有接口就先不传了






      
    },
    getBuytypes() {
      this.$axios.get(this.$apiUrl.detail.buyTypes)
        .then(res => {
          this.buyTypes = res.data
          //从接口获取数据的同时  直接给一个默认值
          this.buyType=res.data[0].label

        })
        .catch(err => {
          if (err) throw err
        })
    },
    getPeriodList() {
      this.$axios.get(this.$apiUrl.detail.periodList)
        .then(res => {
          this.periodList = res.data
          this.endTime=res.data[0].label



        })
        .catch(err => {
          if (err) throw err
        })
    },
    getVersionList() {
      this.$axios.get(this.$apiUrl.detail.versionList)
        .then(res => {
          this.versionList = res.data

          this.versions.push(res.data[0])

        })
        .catch(err => {
          if (err) throw err
        })
    },
    getBanks(){
      this.$axios.get(this.$apiUrl.detail.banks)
      .then(res=>{
        this.banks=res.data

        this.bank=res.data[0].label
      })
      .catch(err => {
      if (err) throw err
      })
    }

  },
  mounted() {
    this.getBuytypes();
    this.getPeriodList();
    this.getVersionList();
    this.getBanks();

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
