<template>
  <div class="tag" :class="{ [variant]: variant, active: tagActive }">
    {{ tagText }}
  </div>
</template>
<script>
export default {
  props: ['variant', 'tagActive', 'tagText'],
}
</script>

<style lang="scss" scoped>
.tag {
  background: #292929;
  text-transform: uppercase;
  position: absolute;
  font-size: 12px;
    color: #fff;
}
.tag.primary {
  float: left;
  transform: rotate(-45deg);
  left: -60px;
  top: 30px;
  text-align: center;
  width: 200px;
  margin: 0;
  font-weight: 500;
  line-height: 32px;
}
.tag.active {
  background: #ff5200;
}

.tag.second {
  top: 15px;
  left: 15px;
  letter-spacing: 1px;
  padding: 7px 14px 5px;
  font-weight: 600;
  border-radius: 3px 3px 3px 0;
}
.tag.second:after {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border-top: 0;
  border-bottom: 7px solid transparent;
  bottom: -7px;
  left: 0;
  border-left: 10px solid #292929;
}
.tag.second.active:after {
  border-left: 10px solid #ff5200;
}
</style>
