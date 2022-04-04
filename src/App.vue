
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(process.env.VUE_APP_BASE_API);
    // 隐藏加载Loading
    document.getElementById('appLoading').style.display = 'none'
  }
}
</script>

<style lang="scss"></style>
