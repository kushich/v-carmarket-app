<template>
  <div>
    <sub-banner />
    <app-block :empty="true">
      <template v-slot:content>
        <car-list />
      </template>
    </app-block>
  </div>
</template>

<script>
import SubBanner from '@/components/SubBanner'
import CarList from '@/components/cars-block/CarList'
import AppBlock from '@/components/Block'
export default {
  components: {
    SubBanner,
    CarList,
    AppBlock,
  },
}
</script>
