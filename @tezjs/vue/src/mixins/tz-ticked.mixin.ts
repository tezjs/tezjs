export default{
    mounted:function(){
        const _this:any = this;
        _this.$nextTick(function () {
             if(_this.$parent?.$parent?.$parent?.tzTicked)
              setTimeout(()=>{   _this.$parent.$parent.$parent.tzTicked()},10)
        })
    }
}