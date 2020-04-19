<template>
  <div>
    <banner />
    <search-box />
    <block>
      <template v-slot:title>
        Featured Cars
      </template>
      <template v-slot:description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      </template>
      <template v-slot:content>
        <car-list />
      </template>
    </block>
    <block-alt variant="advantages">
      <template v-slot:title>
        Our Advantages
      </template>
      <template v-slot:description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      </template>
      <template v-slot:content>
        <advantages-list />
      </template>
    </block-alt>
  </div>
</template>

<script>
import CarList from '@/components/CarList'
import AdvantagesList from '@/components/AdvantagesList'
import Banner from '@/components/Banner'
import SearchBox from '@/components/SearchBox'
import Block from '@/components/Block'
import BlockAlt from '@/components/BlockAlt'

export default {
  name: 'Home',
  components: {
    Banner,
    SearchBox,
    Block,
    BlockAlt,
    CarList,
    AdvantagesList,
  },
}
</script>
