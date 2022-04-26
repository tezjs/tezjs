<template>
<div :style="{height:'500px'}">
    Banner Component --- <b>{{data.name}}</b><br/>
</div>
</template>
<script>

export default{
    props:["data"],
        
    mounted(){
        // console.log("banner called");
        //          this.$nextTick(()=> {
        //      this.$emit("tzInit") 
        //  })
     if(this.$el){
        var observer = new IntersectionObserver(async ([{ isIntersecting }]) => {
           // console.log("lazy  called",isIntersecting);
            //this.toView = isIntersecting;
                   // this.onTick()     
             });
        observer.observe(this.$el, { rootMargin: "0px" });
    }
    },
    unmounted(){
        //console.log("banner unmounted called");
    },
    activated() {
      //console.log("banner activated called");
  },
  deactivated() {
    //console.log("banner deactivated called");
  }
}
</script>
