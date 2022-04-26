<template>
  <main>
<tez-slot></tez-slot>
 <tem></tem>   
  </main>
</template>

<script  >
export default {
  components:{
  tem:tem.default
  },
mounted(){
  console.log("mounted")
}
};
</script>
