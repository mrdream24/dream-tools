<template lang="pug">
  .erweima-page
    Container
      .erweima-container
        el-input(v-model='input', placeholder='可输入网址或文本')
        
</template>

<script>
  import Container from '@/components/Container.vue'

  export default {
    name: 'erweima',
    components: {
      Container
    }
  }
</script>

<style lang="scss">
  .erweima-container {
    width: 80%;
    margin: 30px auto;
  }
</style>
