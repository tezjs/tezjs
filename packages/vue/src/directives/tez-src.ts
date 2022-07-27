import { isBot } from "@tezjs/js";
import { Directive, DirectiveBinding, VNode } from "vue";
import { componentState } from "../const/component-state";
import { imageLoader } from "../const/image-loader";

export const TEZ_SRC_DIRECTIVE: Directive<any, any> =  {
    beforeMount: function (el:any, binding:DirectiveBinding<any>, vnode:VNode<any, any, { [key: string]: any; }>, prevVnode:any) {
      if (!isBot()) {
        if(componentState.tezAppOptions.loaderImagePath)
          el.src = componentState.tezAppOptions.loaderImagePath;
      let observer = new IntersectionObserver(function (entries) {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                if(window.location.hostname.indexOf("localhost") === -1)
                  imageLoader.resolve(binding.value).then(image=>el.src = image);
                else
                  el.src = binding.value
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