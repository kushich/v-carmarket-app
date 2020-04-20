<template>
  <div class="col-lg-4 col-md-6 col-12">
    <div class="car-box">
      <car-thubnail :car="car" tag="primary" period="month"/>
      <car-details :car="car" />
    </div>
  </div>
</template>

<script>
import CarDetails from '@/components/CarDetails'
import CarThubnail from '@/components/CarThubnail'

export default {
  components: {
    CarDetails,
    CarThubnail,
  },
  props: ['car'],
}
</script>

<style lang="scss" scoped>
.car-box {
  position: relative;
  margin-bottom: 30px;
  background: #fff;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}


</style>
