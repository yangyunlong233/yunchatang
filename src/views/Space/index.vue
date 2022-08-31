<template>
  <div id="Space" class="space">
    <Side type="darken" />
    <div class="space-bg"><img src="../../assets/img/space_bg.png"></div>
    <div class="space-container">
      <div class="covers">
        <img v-for="item, index in covers" :src="item" :key="index"
            :style="{ top: index == 1 ? top2 : top1, opacity: index == count ? 1 : 0}">
      </div>
      <div class="content">
        <i>Space operations</i>
        <h1>空间运营</h1>
        <div class="txs">
          <p>云茶堂以云茶为纽带，不仅开办茶道、花道、香道、琴艺、书法、瑜伽、太极、禅修等东方美学课程，同时提供现代艺术及管理课程服务，静心明智，修身养性，让生活变得鲜活又多姿。</p>
          <p>主题茶会体验，美学沙龙体验是高端体验与服务有机结合的云茶文化体验平台，更是为现代都市人打造的生活美学空间。以茶会友，跨越年龄、身份、性别、名族、地域的界限，从而打造资源共享的城市精英聚合平台。</p>
          <LiteLogo type="red" />
        </div>
      </div>
    </div>
    <div class="space-lines">
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="line line3"></div>
    </div>
  </div>
</template>

<script>
import Side from '@/components/Side'
import LiteLogo from '@/components/LiteLogo'
export default {
  data () {
    return {
      top1: 0,
      top2: 0,
      flag: true,
      count: 0,
      covers: [
        require('../../assets/img/space_case_01.jpg'),
        require('../../assets/img/space_case_02.jpg'),
        require('../../assets/img/space_case_03.jpg')
      ]
    }
  },
  components: {
    Side,
    LiteLogo
  },
  mounted () {
    // 判断是否手机端，PC 段才执行该效果
    const flag = window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    if (!flag) {
      this.count = -1
      setInterval(() => {
        if (this.flag) {
          this.top1 = '4rem'
          this.top2 = 0
          this.flag = !this.flag
        } else {
          this.top1 = 0
          this.top2 = '4rem'
          this.flag = !this.flag
        }
      }, 5000)
    } else {
      setInterval(() => {
        this.count < 2 ? this.count++ : this.count = 0
      }, 3000)
    }
  }
}
</script>

<style lang="scss">
@import './space_mobile.scss';
@import './space.scss';

</style>
