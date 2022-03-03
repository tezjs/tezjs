<template>
  <div>
        <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
    <router-view  ></router-view>
  </div>
</template>
<script >
export default{
  mounted(){
    console.log("mounted")
  }
}
</script>
 <style lang="scss">

</style>
