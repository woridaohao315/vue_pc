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
          <!-- <BankChooser :banks="banks" @on-change="getChange('bank',$event)"></BankChooser> -->
          <div class="button buy-dialog-btn" @click="confirmBuy">
            确认购买
          </div>
        </div>

      </BaseDialog>

    </div>

  </div>

</template>

<script>
import Counter from "./analysis/Counter";
import Selection from "./analysis/Selection";
import Chooser from "./analysis/Chooser";
import Product from "./analysis/Product";
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
    Counter, Selection, Chooser, Product, BaseDialog
  },
  methods: {
    confirmBuy() {

    },
    getChange(attr,val) {
        this[attr]=val
    },
    showPayDialog() {
      this.Show.show = true
      console.log("购买数量:"+this.buyNum,"购买类型:"+this.buyType,"时间:"+this.endTime,"版本选择:"+this.versions);
      // console.log(this.$data);
      //TODO 1.获取总价 2.渲染出来银行组件
      this.$axios.get(this.$apiUrl.detail.getprice)
      .then(res=>{
        this.price=res.data.amount
      })
      .catch(err => {
      if (err) throw err
      })
      
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
    }

  },
  mounted() {
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
