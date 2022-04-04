
<template>
  <div class="wrap">
    <div class="wrap-label">{{mValue?trueLabel:falseLabel}}</div>
    <el-checkbox v-model="mValue"></el-checkbox>
  </div>
</template>

<script>
export default {
  name: "ModeSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    trueLabel: {
      type: String,
      default: "显示",
    },
    falseLabel: {
      type: String,
      default: "不显示",
    },
  },
  data() {
    return {
      mValue: false,
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        this.mValue = newValue;
      },
    },
    mValue: {
      immediate: true,
      handler(newValue, oldValue) {
        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 25px; /*no*/

  .wrap-label {
    font-size: 14px; /*no*/
    line-height: 32px; /*no*/
  }
}
</style>