<template>
  <div class="price-box"><span>{{currency || '€'}}</span><slot>0</slot><sub v-if="period">/{{period}}</sub></div>
</template>
<script>
export default {
  props: ['currency','period']
}
</script>
<style lang="scss" scoped>
.price-box {
  font-size: 36px;
  font-weight: 700;
  position: absolute;
  bottom: 10px;
  right: 20px;
  z-index: 999;
  color: #ff5200;
}
.price-box sub {
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  opacity: 0.9;
}
.price-box span {
  color: #fff;
  font-weight: 500;
  opacity: 0.9;
}
</style>
