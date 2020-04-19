<template>
  <div class="block">
    <div class="container">
      <div class="block-title">
        <h1><slot name="title"></slot></h1>
        <p>
          <slot name="description"></slot>
        </p>
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
}
</script>

<style lang="scss" scoped>
.block {
  padding: 100px 0 85px;
}
.block-title {
  margin-bottom: 50px;
  text-align: center;
}
.block-title h1 {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 15px;
}
.block-title p {
  font-size: 18px;
  margin-bottom: 0;
  font-weight: 400;
}

@media (max-width: 768px) {
  .block {
    padding: 60px 0 30px;
  }
}
</style>
