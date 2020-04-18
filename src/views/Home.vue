<template>
  <div>
    <banner />
    <search-box />
    <block />
  </div>
</template>

<script>
import CarList from '@/components/CarList'
import Banner from '@/components/Banner'
import SearchBox from '@/components/SearchBox'
import Block from '@/components/Block'

export default {
  name: 'Home',
  components: {
    Banner,
    SearchBox,
    Block,
    CarList
  },
}
</script>
