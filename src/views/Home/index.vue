<template>
  <div id="home" class="home red-wall">
    <div class="home-darken-mask" :style="{ opacity: maskOp }"></div>
    <div class="home-container" :style="{ opacity: mainOp }">
      <div class="logo"><img src="../../assets/img/logo_full.svg"></div>
      <div class="main-content">
        <div class="slogen">
          云茶堂是天则控股集团旗下，以互联网数据和物联网技术驱动，对茶产品的生产、流通与销售过程进行升级改造，重塑业态结构与生态圈的新零售商业模式。云茶堂旨在为消费者打造茶叶的一站式体验中心，带给消费者实惠好喝的茶和美学生活内涵。
        </div>
        <ul class="sub-nav">
          <li>
            <router-link to="/map">
              <img src="../../assets/img/icon_sub_nav_1.svg">
              <span>全国布局</span>
            </router-link>
          </li>
          <li>
            <router-link to="/business">
              <img src="../../assets/img/icon_sub_nav_2.svg">
              <span>招商加盟</span>
            </router-link>
          </li>
          <li>
            <router-link to="/store">
              <img src="../../assets/img/icon_sub_nav_3.svg">
              <span>线下门店</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <Cartoon class="cmpt-cartoon" :style="{ opacity: cartoonOp }" />
    <div class="red-wall-pattern" :style="{ opacity: patternOp }"></div>
    <div class="nav-type-noline">
      <div class="scroll-guide" :style="{ opacity: guideOp }">
        <img src="../../assets/img/icon_nav_scroll.svg">
        <span>向下滚动展示空间</span>
      </div>
      <div class="entry-wrap">
        <router-link to="/business" class="entry-icon"><img src="../../assets/img/icon_nav_wechat_lighten.svg">
        </router-link>
        <router-link to="/menu" class="entry-icon"><img src="../../assets/img/icon_nav_menu_lighten.svg"></router-link>
      </div>
    </div>
    <div class="tansition-line-horizontal" :style="{ height: tlH }"></div>
    <div class="tansition-line-vertical" :style="{ width: tlV }"></div>
    <!--activity-->
    <div id="activity" class="activity-container">
      <ul class="covers">
        <li><img src="../../assets/img/activity_covers/activity_covers_case_01.jpg"></li>
        <li><img src="../../assets/img/activity_covers/activity_covers_case_01.jpg"></li>
        <li><img src="../../assets/img/activity_covers/activity_covers_case_01.jpg"></li>
      </ul>
      <div class="activity-lines">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
      </div>
      <div class="content">
        <h1>云茶的复兴与崛起，邀您参与这场盛宴</h1>
        <div class="feature">
          <div class="item">
            <img src="../../assets/img/icon_feature_arrow.svg">
            <h2>门店设计</h2>
            <h3>Store Design</h3>
            <p>加盟店、连锁店、直营店品牌独立设计，简而不单更具品牌特色。</p>
          </div>
          <div class="item">
            <img src="../../assets/img/icon_feature_arrow.svg">
            <h2>品牌支持</h2>
            <h3>Brand Support</h3>
            <p>全方位一站式服务体系，确保每一饼茶口感的独特性以及统一性。自有仓库，稳定供应。</p>
          </div>
          <div class="item">
            <img src="../../assets/img/icon_feature_arrow.svg">
            <h2>运营支持</h2>
            <h3>Brand Support</h3>
            <p>活动策划、开业宣传、加盟店铺运营等多方面拥有强大的后期运营团队，为你业绩助力。</p>
          </div>
          <div class="item">
            <img src="../../assets/img/icon_feature_arrow.svg">
            <h2>科技赋能</h2>
            <h3>Technology Empowerment</h3>
            <p>以数据为导向，提供新零售系统，实现仓储、物流、订单的多方打通，用科技为业务赋能。</p>
          </div>
        </div>
      </div>
      <div class="activity-buttons">
        <span><a href="/map">全国布局</a></span>
        <span><a href="/business">招商加盟</a></span>
        <span><a href="/store">线下门店</a></span>
      </div>
    </div>
    <!-- copyright -->
    <div class="red-wall-copy" :style="{ opacity: copyOp }">
      <p class="add">中国·云南·昆明市盘龙区穿金路721号昆明煤矿机械总厂内6号地后端</p>
      <p class="icp">©云茶堂新零售(云南)有限公司 滇ICP备16009188号 <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=53010302001077" style="color: #fff;"
          target="_blank">滇公网安备53010302001077号</a></p>
      <div class="contax">
        <p>合作招商：yunchatang_join@tianze.com</p>
        <p>市场团队（9:00~20:00）：+86 13888293923</p>
        <p>企业合作：+86 18988883181</p>
        <p>投诉举报（9:00~22:00）：400-118-9837</p>
      </div>
      <img src="../../assets/img/2code.png">
    </div>
  </div>
</template>

<script>
// import NavSide from '@/components/NavSide'
import Cartoon from '@/components/Cartoon'

export default {
  name: 'Home',
  data () {
    return {
      copyOp: 1,
      patternOp: 1,
      cartoonOp: 1,
      mainOp: 1,
      guideOp: 1,
      maskOp: 0,
      tlH: 0,
      tlV: 0
    }
  },
  components: {
    Cartoon
  },
  mounted () {
    document.querySelector('html').scrollTop = 0
    // 判断是否手机端，PC 段才执行该效果
    const flag = window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    if (!flag) {
      window.addEventListener('scroll', this.handle_scroll, true)
    }
  },
  methods: {
    handle_scroll () {
      const scrollTop = document.querySelector('html').scrollTop
      console.log(scrollTop)
      if (scrollTop === 0) {
        this.copyOp = 1
        this.patternOp = 1
        this.cartoonOp = 1
        this.mainOp = 1
        this.tlH = '0vh'
        this.tlV = '0rem'
      }
      if (scrollTop > 0) {
        this.copyOp = 1 - scrollTop / 100
        this.tlH = scrollTop + 'vh'
        this.tlV = (scrollTop * 4.5 / 100) + 'rem'
      }
      if (scrollTop > 100) {
        this.maskOp = (scrollTop - 100) / 1500
        this.cartoonOp = 1 - (scrollTop - 100) / 500
        this.patternOp = 1 - (scrollTop - 200) / 100
        this.mainOp = this.guideOp = 1 - (scrollTop - 300) / 100
        this.tlH = '100vh'
        this.tlV = '4.5rem'
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/standard.scss';
@import './home_mobile.scss';
@import './home.scss';
</style>
