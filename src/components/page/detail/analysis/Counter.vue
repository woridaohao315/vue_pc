<template>
  <div class="counter-component">
    <div class="counter-btn" @click="jian"> - </div>
    <div class="counter-show">
      <input type="tel" v-model="counter.number" readonly>
    </div>
    <div class="counter-btn" @click="plus"> + </div>
    <span>(最少订购1套，最多订购10套)</span>
  </div>

</template>

<script>
export default {
  data() {
    return {
      counter: {
        number: 1
      }
    }

  },
  methods: {
    jian() {
        this.counter.number--
        if(this.counter.number<1){
            this.counter.number=1
        }
        this.$emit("on-change",this.counter.number)
    },
    plus() {
        this.counter.number++
        if(this.counter.number>10){
            this.counter.number=10
        }
        this.$emit("on-change",this.counter.number)
        
    }
  }
}
</script>

<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  line-height: 25px;
}

.counter-show {
  float: left;
}

.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  /* text-indent: 4px; */
  text-align: center;
}

.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}

.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
