<template>
<div :style="{height:'500px'}">
    Footer Component --- <b>{{data.name}}</b><br/>
</div>
</template>
<script>

export default{
    props:["data"],
        
    mounted(){
         console.log("footer called");
        //          this.$nextTick(()=> {
        //      this.$emit("tzInit") 
        //  })
    },
    unmounted(){
        //console.log("footer unmounted called");
    },
    activated() {
      //console.log("footer activated called");
  },
  deactivated() {
    //console.log("footer deactivated called");
  }
}
</script>
