import { isBot } from "@tezjs/js";
import { Directive, DirectiveBinding, VNode } from "vue";

export const TEZ_SRC_DIRECTIVE: Directive<any, any> =  {
    beforeMount: function (el:any, binding:DirectiveBinding<any>, vnode:VNode<any, any, { [key: string]: any; }>, prevVnode:any) {
      if (!isBot()) {
      let observer = new IntersectionObserver(function (entries) {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                setTimeout(function () {
                    el.src = binding.value;
                  }, 50);
                observer.unobserve(el);
              }
          }); 
      }, { threshold: [0.25] });
      observer.observe(el);
      el.observer = observer;
    }else
        el.src= binding.value
  }
}