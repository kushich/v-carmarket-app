<template>
  <div class="questions">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-8 col-sm-12">
          <h3 class="questions-text">Do You Have Questions?</h3>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12">
          <a href="#" class="btn btn-md btn-ask">Get in Touch</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.questions {
  padding: 30px 0 25px;
  background: #ff5200;
}
.questions-text {
  font-size: 27px;
  margin: 0;
  line-height: 1.8;
  color: #fff;
  font-weight: 400;
}
@media (max-width: 768px) {
  .questions {
    text-align: center;
  }
  .questions-text {
    font-size: 22px;
    margin-bottom: 15px;
  }
}
</style>
