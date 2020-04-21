<template>
  <div class="row">
    <featured-list-item v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<script>
import FeaturedListItem from '@/components/featured-block/FeaturedListItem'
export default {
  components: {
    FeaturedListItem,
  },
  computed: {
    cars() {
      return this.$store.getters.cars
    },
  },
}
</script>
