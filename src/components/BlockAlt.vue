<template>
  <div class="block" :class="variant">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 align-self-center">
          <div class="block-title">
            <h1>
              <slot name="title"></slot>
            </h1>
            <p>
              <slot name="description"></slot>
            </p>
            <slot name="button"></slot>
          </div>
        </div>
        <div class="col-lg-7">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['variant'],
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
  margin-bottom: 20px;
  font-weight: 400;
}
/* Advantages */
.advantages {
  position: relative;
  background: url('../assets/bg-1.jpg') no-repeat center;
  background-size: cover;
  background-position: bottom;
}
.advantages .block-title h1,
.advantages .block-title p {
  color: #fff;
}
.advantages:before {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
@media (max-width: 768px) {
  .block {
    padding: 60px 0 30px;
  }
}
</style>
