<template>
  <div class="car-thumbnail">
    <app-tag :variant="tag" :tagActive="car.tagActive" :tagText="car.tag" />
    <car-price :period="period">{{ car.price }}</car-price>

    <img :src="car.image" class="d-block w-100" alt="car" />
    <app-overlap :url="car.id" />
  </div>
</template>
<script>
import CarPrice from '@/components/Price'
import AppOverlap from '@/components/Overlap'
import AppTag from '@/components/Tag'
export default {
  props: ['car', 'tag', 'period'],
  components: {
    CarPrice,
    AppOverlap,
    AppTag,
  },
}
</script>
<style lang="scss" scoped>
.car-thumbnail {
  position: relative;
  user-select: none;
  overflow: hidden;
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
.car-thumbnail img {
  height: 100%;
}
</style>
