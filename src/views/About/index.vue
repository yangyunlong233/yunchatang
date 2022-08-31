<template>
  <div id="About" class="about">
    <Side type="darken" />
    <div class="about-bg"><img src="../../assets/img/about_pattern.jpg"></div>
    <div class="about-container">
      <div class="flex-content">
        <div class="content">
          <i>AboutUs</i>
          <h1>关于云茶堂</h1>
          <p>云茶堂茶业有限公司，成立于2016年10月，注册资金5000万。为云茶产业投资集团旗下核心子公司之一，依托集团首创的【茶产业+互联网+金融】多维立体商业模式。</p>
        </div>
        <div class="cover"></div>
      </div>
      <p class="tx">
        利用云南地区的优质茶叶资源，践行集团“云茶柒则”标准，在产品生产和储存上严格推行原料标准化、生产标准化和仓储标准化的流程，依托集团强大的云茶大数据库和科学合理的拼配技术，已陆续推出“持本守真”高端拼配普洱茶系列、“云茶纪”云南名片普洱茶系列等标准化样版产品，精准地实现云茶生产的专业化和多样化。
      </p>
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
@import './about_mobile.scss';
@import './about.scss';
</style>
