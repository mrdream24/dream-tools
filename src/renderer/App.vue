<template>
  <div id="app">
    <h2>Dream Tools</h2>
    <div class="menu">
      <router-link class="menu-item" to='/erweima'>生成二维码</router-link>
      <router-link class="menu-item" to='/erweima'>生成二维码</router-link>
      <router-link class="menu-item" to='/erweima'>生成二维码</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'dream-tools'
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #app {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 30px;
    width: 100vw;
  }
  .menu {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    .menu-item {
      width: 160px;
      height: 160px;
      background-color: #333;
      color: #fff;
      line-height: 160px;
      text-align: center;
      border-radius: 3px;
      cursor: pointer;
      &:hover {
        background-color: rgba(#333, 0.6);
      }
    }
  }
</style>
