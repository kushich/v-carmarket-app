<template>
  <div class="search-box">
    <div class="container">
      <div class="search-box-inner">
        <form method="GET">
          <div class="row">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>

          <div class="row">
            <SearchItem />
            <SearchItem />
            <SearchItem />

            <div class="col-lg-3 col-md-6 col-sm-6 col-6">
              <div class="form-group">
                <button class="btn btn-block btn-theme btn-lg">Find</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SearchItem from '@/components/SearchItem'
export default {
  components: {
    SearchItem,
  },
}
</script>

<style lang="scss" scoped>
.search-box {
  padding: 30px 0 10px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}

</style>
