<template>
  <a :href="url" class="btn" :class="options"><slot></slot></a>
</template>
<script>
export default {
  props: ['url', 'options'],
}
</script>

<style lang="scss" scoped>
.btn {
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 3px;

  padding: 9px 35px 8px 35px;
  letter-spacing: 1px;
}
.block {
  display: block;
  width: 100%;
}
.round {
  border-radius: 30px;
}
.semi-round {
  border-radius: 15px;
}

//
.inline {
  color: #fff;
  background: #ff5200;
  transition: all 0.2s linear;
}
.inline:hover {
  color: #212529;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(255, 132, 0, 1);
  -moz-box-shadow: 0px 0px 10px 0px rgba(255, 132, 0, 1);
  box-shadow: 0px 0px 10px 0px rgba(255, 132, 0, 1);
}
.outline {
  background-color: transparent;
  color: #ff5200;
  border: solid 2px #ff5200;
  transition: all 0.2s linear;
}
.outline:hover {
  color: #fff;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(255, 132, 0, 1);
  -moz-box-shadow: 0px 0px 10px 0px rgba(255, 132, 0, 1);
  box-shadow: 0px 0px 10px 0px rgba(255, 132, 0, 1);
}
.outline.white {
  background-color: transparent;
  color: #fff;
  border: solid 2px #fff;
}
.outline.white:hover {
  color: #212529;
  border-color: #212529;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.41);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.41);
}
</style>
