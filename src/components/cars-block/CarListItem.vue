<template>
  <div class="col-lg-10 offset-lg-1">
    <div class="car-box">
      <div class="row">
        <div class="col-lg-5 col-md-6">
          <car-thubnail :car="car" tag="second"/>
        </div>
        <div class="col-lg-7 col-md-6 align-self-center">
          <car-details :car="car" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarThubnail from '@/components/CarThubnail'
import CarDetails from '@/components/CarDetails'
export default {
  components: {
    CarThubnail,
    CarDetails,
  },
  props: ['car'],
}
</script>

<style lang="scss" scoped>
.car-box {
  background: #fff;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 30px;
 
}
.car-box .car-thumbnail {
  height: 100%;
}
.car-box .car-thumbnail img {
  width: 100%;
  height: 100%;
}
</style>
