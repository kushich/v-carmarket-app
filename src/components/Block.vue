<template>
  <div class="block">
    <div class="container">
      <div class="block-title">
        <h1>Featured Cars</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </p>
      </div>
      <CarList />
    </div>
  </div>
</template>
<script>
import CarList from '@/components/CarList'
export default {
  components: {
    CarList
  }
}
</script>

<style lang="scss" scoped>
.block {
  padding: 100px 0 85px;
}
.block-title {
  margin-bottom: 50px;
  text-align: center;
}
.block-title h1 {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 15px;
}
.block-title p {
  font-size: 18px;
  margin-bottom: 0;
  font-weight: 400;
}
</style>
