<template>
  <div class="col-lg-4 col-md-6 col-12">
    <div class="car-box">
      <div class="car-thumbnail">
        <app-tag variant="primary" :tagActive="car.tagActive" :tagText="car.tag"/>
        <div class="price-box"><span>€</span>{{car.price}}<sub>/month</sub></div>
        <img :src="car.image" class="d-block w-100" alt="car" />
        <app-overlap :url="car.id"/>
      </div>
      <car-details :car="car"/>
    </div>
  </div>
</template>

<script>
import CarDetails from '@/components/featured-block/CarDetails'
import AppOverlap from '@/components/Overlap'
import AppTag from '@/components/Tag'

export default {
  components: {
    AppOverlap,
    CarDetails,
    AppTag
  },
  props: [
    'car'
  ]
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
.car-thumbnail {
  position: relative;
  user-select: none;
}
.car-thumbnail:before {
  content: '';
  top: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 8;
  background: linear-gradient(
    to top,
    rgba(47, 45, 45, 0.9) 0%,
    rgba(0, 0, 0, 0.45) 35%,
    rgba(2, 2, 2, 0) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 4px 4px 0 0;
  opacity: 1;
}
// .car-thumbnail:hover .carbox-overlap {
//   opacity: 1;
// }
// .carbox-overlap {
//   opacity: 0;
//   background: rgba(0, 0, 0, 0.6);
//   height: 100%;
//   width: 100%;
//   z-index: 999;
//   position: absolute;
//   text-align: center;
//   color: #fff;
//   left: 0;
//   top: 0;
//   transition: opacity 0.2s linear;
// }
// .overlap-box {
//   position: relative;
//   top: 50%;
//   transform: translateY(-50%);
// }
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


.car-img {
  display: block;
}

</style>
