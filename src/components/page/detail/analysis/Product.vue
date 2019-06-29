<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item, index) in versionList" @click="toggleSelection(index)" :title="item.label" :class="{active: checkActive(index)}">{{ item.label }}</li>
    </ul>
  </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  props: ["versionList"],
  data() {
    return {
      selectArr: [0],
    }
  },
  methods: {
    toggleSelection(index) {
      if (this.selectArr.indexOf(index) != -1) {
        this.selectArr = _.remove(this.selectArr, idx => {
          return idx != index;
        })
      } else {
        this.selectArr.push(index)
      }
      // this.$emit("on-change",this.selectArr)
            let versions=_.map(this.selectArr,idx=>{
                return this.versionList[idx];
            })
            //TODO 现在的问题是我不选就不会给父组件传参 ,默认就是空值  ?
            //这个问题是通过获取接口数据的时候 直接就给默认值
            this.$emit("on-change",versions)

      /*      
      我写的        
       this.arr=this.versionList
      console.log(this.arr);
      
      this.newArr=_.remove(this.arr,idx=>{
          return idx.value==index
      })
      console.log(this.newArr);
        */
    },
    checkActive(index) {
      // return this.newArr[index].value(index)!=-1
      // console.log(this.newArr);
      return this.selectArr.indexOf(index) !== -1
    }
  }

}
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li {
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
