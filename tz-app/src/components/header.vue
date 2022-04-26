<template>
    <div :style="{height:'500px'}">
    Header Template  --- <b>{{data.name}}</b><br/>
    <button :click="dataChanged">ClickMe</button>
    </div>
  
</template>
<script>
export default{
    props:["data"],
    
    data(){
        return {
            items:[1,2,3,4,5,6,7]
        }
    },
    
    mounted(){
          console.log("header called");
    //     // console.log(this)
    //   console.log("updated")
    //     this.$nextTick(function () {
    //     console.log(this.$parent)
    //   console.log("tick called")
    // })

    },
    updated(){

      
         console.log("updated")
   
    },
    unmounted(){
        // console.log("header unmounted called");
    },
    activated() {
    //   console.log("header activated called");
  },
  deactivated() {
    // console.log("header deactivated called");
  },
  methods:{
      dataChanged(){
            this.$emit("onClick")
    },
  }
}
</script>
