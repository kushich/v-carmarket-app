<template>
  <div class="col-lg-3 col-md-6 col-sm-6 col-6">
    <div class="form-group">
      <b-form-select v-model="selected" :options="options"></b-form-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Select an option' },
        { value: 'a', text: '1' },
        { value: 'b', text: '2' }
      ],
    }
  },
}
</script>
