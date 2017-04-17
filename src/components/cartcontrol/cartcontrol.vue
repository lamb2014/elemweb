<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">
      {{food.count}}

    </div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart">

    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  export default{
    props: {
      food: {
        type: Object
      }
    },
    created(){

    },
    methods: {
      addCart(event){
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);//如果没有选择商品第一次点击时fcount为1
        } else {
          this.food.count++;
        }
        this.$emit('increment', event.target);// 子组件通过 $emit触发父组件的方法
      },
      decreaseCart(event){
        if (!event._constructed) {
          return;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
        transition: all .4s linear;
      &.move-enter, &.move-leave-active
        transform: translate3D(24px, 0, 0)
        opacity: 0
        .inner
          transform: rotate(180deg)
      &.move-enter-active, &.move-leave-active
        transition: all .4s linear;

    .cart-count
      display: inline-block
      vertical-align: top
      padding-top: 6px
      line-height: 24px
      text-align: center
      width: 12px
      color: rgb(147, 153, 159)
      font-size: 10px
    .cart-add
      display: inline-block
      font-size: 24px
      color: rgb(0, 160, 220)
      padding: 6px
      line-height: 24px


</style>
