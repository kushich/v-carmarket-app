<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  components: {
    Navbar, Footer
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

// Buttons
.btn-lg {
  padding: 9px 35px 8px 35px;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
}
.btn-md {
  cursor: pointer;
  padding: 13px 30px 11px 30px;
  letter-spacing: 1.5px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 3px;
}
.btn-round {
  border-radius: 30px;
}
.btn-theme {
  color: #fff;
  background: #ff5200;
  border: solid 1px #ff5200;
}
.btn-overlap {
  background-color: transparent;
  color: #ff5200;
  border: solid 2px #ff5200;
}
.btn-overlap:hover {
  color: #fff;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(255,132,0,1);
-moz-box-shadow: 0px 0px 10px 0px rgba(255,132,0,1);
box-shadow: 0px 0px 10px 0px rgba(255,132,0,1);
}
.btn-ask {
  background-color: transparent;
  color: #fff;
  border: solid 2px #fff;
  text-align: center;
  border-radius: 15px;
}
.btn-ask:hover {
  border-color: #212529;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.41);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.41);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.41);
}

</style>
