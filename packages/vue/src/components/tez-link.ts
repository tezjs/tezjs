import { defineComponent ,h} from "vue"
const TAG:string = "a";
function isPush(event){
    if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
    return;
  if (event.defaultPrevented)
    return;
  if (event.button !== void 0 && event.button !== 0)
    return;
  if (event.currentTarget && event.currentTarget.getAttribute) {
    const target = event.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (event.preventDefault)
    event.preventDefault();
  return true;
}
export default defineComponent({
    props: ["to","class"],
    render() {
        let children = this.$slots.default ? this.$slots.default():undefined;
            return h(TAG,{
                onClick:(e)=>{if(isPush(e)) this.$tezRouter.push(this.to)},
                href:this.to,
                class:this.class
            },children)
    }
  })