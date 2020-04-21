<template>
  <div class="row">
    <car-list-item v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<script>
import CarListItem from '@/components/cars-block/CarListItem'
export default {
  components: {
    CarListItem,
  },
  computed: {
    cars() {
      return this.$store.getters.cars
    },
  },
}
</script>
