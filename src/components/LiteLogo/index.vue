<template>
  <div class="logo">
    <router-link to="/"><img :src="type == 'lighten' ? lighten : red"></router-link>
  </div>
</template>

<script>
export default {
  props: ['type'],
  data () {
    return {
      lighten: require('../../assets/img/logo_lite_white.svg'),
      red: require('../../assets/img/logo_lite_red.svg')
    }
  }
}
</script>

<style>

</style>
