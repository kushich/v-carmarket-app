<template>
  <div class="car-detail">
    <h1 class="title">
      <a href="">{{ car.title }}</a>
    </h1>
    <div class="location">
      <a href="">
        <i class="fas fa-map-marker-alt"></i>
        {{ car.location }}
      </a>
    </div>
    <ul class="facilities-list">
      <li><i class="fas fa-road"></i> {{ car.details.mileage }}</li>
      <li><i class="fas fa-cogs"></i> {{ car.details.transmission }}</li>
      <li><i class="fas fa-industry"></i> {{ car.details.year }}</li>
      <li><i class="fas fa-gas-pump"></i> {{ car.details.fuel }}</li>
      <li><i class="fas fa-car"></i> {{ car.details.body }}</li>
      <li><i class="fas fa-tint"></i> {{ car.details.color }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['car']
}
</script>

<style lang="scss" scoped>
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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.car-detail .facilities-list i {
  color: #ff5200;
}

@media (max-width: 320px) {
  .car-detail .facilities-list li {
    width: 50%;
  }
}
</style>
