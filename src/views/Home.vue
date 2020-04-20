<template>
  <div>
    <app-banner />
    <search-box />
    <block>
      <template v-slot:title>
        Featured Cars
      </template>
      <template v-slot:description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      </template>
      <template v-slot:content>
        <featured-list />
      </template>
    </block>
    <block-alt variant="advantages">
      <template v-slot:title>
        Our Advantages
      </template>
      <template v-slot:description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      </template>
      <template v-slot:button>
        <app-button url="/" options="outline round">Open</app-button>
      </template>
      <template v-slot:content>
        <advantages-list />
      </template>
    </block-alt>
    <app-questions />
  </div>
</template>

<script>
import FeaturedList from '@/components/featured-block/FeaturedList'
import AdvantagesList from '@/components/advantages-block/AdvantagesList'
import AppBanner from '@/components/Banner'
import SearchBox from '@/components/search-block/SearchBox'
import Block from '@/components/Block'
import BlockAlt from '@/components/BlockAlt'
import AppQuestions from '@/components/Questions'
import AppButton from '@/components/Button'

export default {
  name: 'Home',
  components: {
    AppBanner,
    SearchBox,
    Block,
    BlockAlt,
    FeaturedList,
    AdvantagesList,
    AppQuestions,
    AppButton
  },
}
</script>
