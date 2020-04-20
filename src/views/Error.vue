<template>
  <div class="page">
    <div class="container">
      <div class="page-content">
        <h1>Oops. Page not found</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse non
          earum consectetur, ratione.
        </p>
        <app-button url="/" options="round inline">Back To Home</app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/Button'
export default {
  components: {
    AppButton
  }
}
</script>

<style lang="scss" scoped>
.page {
  top: 0;
  width: 100%;
  bottom: 0;
  opacity: 1;
  min-height: 100vh;
  padding: 30px 0;
  height: 100vh;
  display: flex;
  align-items: center;
}
.page-content {
  text-align: center;
  width: 100%;
  top: 50%;
}
.page-content h1 {
  font-size: 67px;
  margin-bottom: 30px;
  font-weight: 700;
}
</style>
