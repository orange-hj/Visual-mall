<!--
 * @Description: 空格组件
-->
<template>
  <div :style="$getWrapStyle(styles)">
    <div
      class="flex-center w-100"
      :style="{ height: this.styles.height + 'px' }"
    >
      <hr v-if="styles.model == 'line'" class="w-100" :style="getLineStyle()" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'McEmpty',

  props: {
    styles: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    getLineStyle () {
      return {
        borderTop: `${this.styles.type} 1px ${this.styles.lineColor}`
      }
    }
  }
}
</script>
