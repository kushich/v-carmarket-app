<template>
  <div>
    <Banner />
    <SearchBox />
    <Block />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import SearchBox from '@/components/SearchBox'
import Block from '@/components/Block'

export default {
  name: 'Home',
  components: {
    Banner,
    SearchBox,
    Block
  },
}
</script>
