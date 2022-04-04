<!--
 * @Description: 商品组件
-->
<template>
<div :style="$getWrapStyle(styles)">
  <goods-tabs :config="config">
    <template v-slot="{ list }">
      <goods-list :list="list"></goods-list>
    </template>
  </goods-tabs>
</div>
</template>

<script>
export default {
  name: 'McGoods',

  props: {
    styles: {
      type: Object,
      default: () => {}
    },
    attrs: {
      type: Object,
      default: () => {}
    },
    goodsData: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    config () {
      console.log()
      return {
        styles: this.styles,
        attrs: this.attrs,
        goodsData: this.goodsData
      }
    }
  }
}
</script>
