<template lang="pug">
  .container
    header
      .header(@click='goBack')
        i.el-icon-arrow-left
        span 返回
    slot
</template>

<script>
  export default {
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss">
  .container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
  }
  header {
    height: 40px;
    font-size: 16px;
    color: #333;
    padding: 10px 20px;
    cursor: pointer;
    border-bottom: 1px solid rgba(#333, 0.1)
  }
</style>
