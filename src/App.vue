<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
export default {
  components: {
    EmptyLayout,
    MainLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'Main') + '-layout'
    },
  },
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';


</style>
