<template>
  	<div class="chooser-component">
        <ul class="chooser-list">
          <li
          v-for="(item, index) in versionList"
          @click="toggleSelection(index)"
          :title="item.label"
          :class="{active: checkActive(index)}"
          >{{ item.label }}</li>


          
        </ul>
      </div>
    </div>
</template>

<script>
import _ from "lodash";
export default {
    props:["versionList"],
    data(){
        return{
            newArr:[],
            arr:[]
        }
    },
    methods:{
        toggleSelection(index){
            this.arr=this.versionList
            console.log(this.arr);
            
           this.newArr=_.remove(this.arr,idx=>{
               return idx.value==index
            })
            console.log(this.newArr);
            
        },
        checkActive(index){
            // return this.newArr[index].value(index)!=-1
            // console.log(this.newArr);
            
        }
    }

}
</script>

<style scoped>

	.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
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
