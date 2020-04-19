<template>
  <div class="row">
    <advantages-item v-for="advantage in advantages" :key="advantage.id" :advantage="advantage"/>
  </div>
</template>
<script>
import AdvantagesItem from '@/components/AdvantagesItem'
export default {
  components: {
    AdvantagesItem,
  },
  data: function() {
    return {
      advantages: [
        {id: 1, title: 'Highly Secured', icon: '<i class="fas fa-shield-alt"></i>', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam.'},
        {id: 2, title: 'Trusted Agents', icon: '<i class="fas fa-handshake"></i>', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam.'},
        {id: 3, title: 'Get an Offer', icon: '<i class="fas fa-euro-sign"></i>', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam.'},
        {id: 4, title: 'Free Support', icon: '<i class="fas fa-question-circle"></i>', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam.'},
      ]
    }
  }
}
</script>
