<template>
  <div class="col-lg-6 col-md-6 col-sm-6">
    <div class="advantages-item media">
      <div class="advantages-icon" v-html="advantage.icon"></div>
      <div class="advantages-body">
        <h5>{{advantage.title}}</h5>
        <p>
          {{advantage.desc}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['advantage'],
}
</script>

<style lang="scss" scoped>
.advantages-item h5,
.advantages-item p {
  color: #fff;
}
.advantages-icon {
  text-align: center;
  min-width: 60px;
  color: #ff5200;
  font-size: 50px;
  margin-right: 20px;
}
</style>
