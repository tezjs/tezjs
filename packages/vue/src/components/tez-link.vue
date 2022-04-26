<template>
    <router-link v-bind="$props"><slot /></router-link>
</template>
<script type="text/javascript">
import  {getUrl} from "../funcs/get-url";
import {cancelIdleCallback } from '../funcs/cancel-idle-callback'
import {requestIdleCallback } from '../funcs/request-idle-callback'
import {RouterLink} from "vue-router"

export default  {
    name: 'TezLink',
    props:{ ...RouterLink.props },
    mounted () {
        this.handleId = requestIdleCallback(this.observe, { timeout: 2e3 })
    },
    beforeDestroy () {
      cancelIdleCallback(this.handleId)
      this.elementObserver.unobserve(this.$el);
    },
    methods: {
      observe () {
        this.elementObserver = new IntersectionObserver(
            async ([{ isIntersecting }]) => {
              if (isIntersecting) {
                this.elementObserver.unobserve(this.$el);
                cancelIdleCallback(this.handleId)
                console.log(this.to)
                //webWorker.postMessage({uri:getUrl(this.to),host:window.location.host,action:'load-payload'})
              }
            },
            {}
          );
          this.elementObserver.observe(this.$el);
      }
    }
  }
</script>
