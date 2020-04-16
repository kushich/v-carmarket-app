<template>
  <div class="col-lg-4 col-md-6 col-12">
    <div class="car-box">
      <div class="car-thumbnail">
        <div class="tag" :class="{active: car.tagActive}">{{car.tag}}</div>
        <div class="price-box"><span>€</span>{{car.price}}<sub>/month</sub></div>
        <img :src="car.image" class="d-block w-100" alt="car" />
        <div class="carbox-overlap">
          <div class="overlap-box">
            <a href="#" class="btn btn-overlap btn-round btn-lg">Open</a>
          </div>
        </div>
      </div>

      <div class="car-detail">
        <h1 class="title">
          <a href="">{{car.title}}</a>
        </h1>
        <div class="location">
          <a href="">
            <i class="fas fa-map-marker-alt"></i>
            {{car.location}}
          </a>
        </div>
        <ul class="facilities-list">
          <li><i class="fas fa-road"></i> {{car.details.mileage}}</li>
          <li><i class="fas fa-cogs"></i> {{car.details.transmission}}</li>
          <li><i class="fas fa-industry"></i> {{car.details.year}}</li>
          <li><i class="fas fa-gas-pump"></i> {{car.details.fuel}}</li>
          <li><i class="fas fa-car"></i> {{car.details.body}}</li>
          <li><i class="fas fa-tint"></i> {{car.details.color}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.car-thumbnail:hover .carbox-overlap {
  opacity: 1;
}
.carbox-overlap {
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
.overlap-box {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
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

.tag {
  float: left;
  position: absolute;
  transform: rotate(-45deg);
  left: -60px;
  top: 30px;
  text-align: center;
  width: 200px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  font-weight: 500;
  line-height: 32px;
  background: #292929;
  text-transform: uppercase;
}
.tag.active {
  background: #ff5200;
}
.car-img {
  display: block;
}
.car-detail {
  padding: 25px 20px 15px;
}
.car-detail .title {
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: 600;
}
.car-detail .title a {
  color: #ff5200;
  text-decoration: none;
}
.car-detail .title a:hover {
  color: #4d4d4d;
}
.car-detail .location {
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: 400;
}
.car-detail .location a {
  color: #535353;
  text-decoration: none;
}
.car-detail .facilities-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
}
.car-detail .facilities-list li {
  list-style: none;
  width: 33.3333%;
  line-height: 35px;
  font-weight: 400;
  font-size: 14px;
}
.car-detail .facilities-list i {
  color: #ff5200;
}
</style>
