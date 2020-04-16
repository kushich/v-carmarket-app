<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <!-- ...content... -->
        <div class="col-12">
          <p class="sub-footer">© 2020</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  /*padding-top: 80px;*/
  position: relative;
  background: url('../assets/bg-2.jpg') no-repeat center;
  background-size: cover;
  background-position: bottom;
}
.footer h4 {
  font-size: 18px;
  margin-bottom: 25px;
  font-weight: 600;
  color: #c5c5c5;
  text-transform: uppercase;
}
.footer:before {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
}
.sub-footer {
  padding: 20px 0;
  color: #212121;
  /*  border-top: solid 1px #212121;*/
  text-align: center;
  margin-bottom: 0;
}
</style>
