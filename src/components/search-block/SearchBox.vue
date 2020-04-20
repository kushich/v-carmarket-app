<template>
  <div class="search-box">
    <div class="container">
      <div class="search-box-inner">
        <form method="GET">
          <div class="row">
            <search-box-item />
            <search-box-item />
            <search-box-item />
            <search-box-item />
          </div>

          <div class="row">
            <search-box-item />
            <search-box-item />
            <search-box-item />

            <div class="col-lg-3 col-md-6 col-sm-6 col-6">
              <div class="form-group">
                <app-button url="/" options="block inline">Find</app-button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBoxItem from '@/components/search-block/SearchBoxItem'
import AppButton from '@/components/Button'

export default {
  components: {
    SearchBoxItem, AppButton
  },
}
</script>

<style lang="scss" scoped>
.search-box {
  padding: 30px 0 10px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}
</style>
