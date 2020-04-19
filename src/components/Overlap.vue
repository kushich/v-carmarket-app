<template>
  <div class="overlap">
    <div class="overlap-box">
      <a :href="url" class="btn btn-overlap btn-round btn-lg">Open</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['url']  
}

</script>
<style lang="scss" scoped>
.overlap {
  opacity: 0;
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  z-index: 999;
  position: absolute;
  text-align: center;
  color: #fff;
  left: 0;
  top: 0;
  transition: opacity 0.2s linear;
}
.overlap:hover {
  opacity: 1;
}
.overlap-box {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
