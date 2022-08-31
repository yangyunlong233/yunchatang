<template>
  <div id="Map" class="map">
    <Side type="darken" />
    <div class="map-container">
      <i>Yunchatang in China</i>
      <h1>全国布局</h1>
      <img class="cover" src="../../assets/img/map.jpg">
      <div class="content">
        <p>- 云茶文化传播与体验新地标</p>
        <p>- 企业级商务活动平台与文化交流空间</p>
        <p>- 茶道馆+商业平台+空间运营商</p>
      </div>
      <LiteLogo type="red" />
    </div>
  </div>
</template>

<script>
import Side from '@/components/Side'
import LiteLogo from '@/components/LiteLogo'
export default {
  components: {
    Side,
    LiteLogo
  }
}
</script>

<style lang="scss">
@import './map_mobile.scss';
@import './map.scss';
</style>
