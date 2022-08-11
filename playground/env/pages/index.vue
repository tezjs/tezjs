<script setup lang="ts">
 import { env } from '/@/env/client'
</script>
<template>
- Must print 'API_URL' value - <b>{{env.API_URL}}</b><br/>
- Must print 'APP_COUNT' numeric value - <b>{{env.APP_COUNT}}</b><br/>
- Must print 'IS_PRODUCTION' boolean value - <b>{{env.IS_PRODUCTION}}</b><br/>
- Should be undefined 'APP_SECRET', as 'CLIENT_' prefix is not available - <b>{{env.APP_SECRET}}</b><br/>
</template>
