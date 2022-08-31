<template>
  <div id="Business" class="business">
    <Side type="darken" />
    <div class="business-container">
      <div class="wechat-code">
        <img src="../../assets/img/code_wechat.png">
        <span>关注云茶堂</span>
      </div>
      <div class="flex-content">
        <div class="content">
          <i>Business</i>
          <h1>招商加盟</h1>
          <h2>+86 13888293923</h2>
        </div>
        <div class="cover">
          <div class="type">
            <span>直营店</span>
            <span>加盟店</span>
            <span>老字号</span>
          </div>
        </div>
      </div>
      <div class="features">
        <div class="item">
          <img src="../../assets/img/icon_business_feature.svg">
          <h3>门店设计</h3>
          <i>Store Design</i>
          <p>加盟店、连锁店、直营店品牌独立设计，简而不单更具品牌特色。</p>
        </div>
        <div class="item">
          <img src="../../assets/img/icon_business_feature.svg">
          <h3>运营支持</h3>
          <i>Operation support</i>
          <p>活动策划、开业宣传、加盟店铺运营等多方面拥有强大的后期运营团队，为你业绩助力。</p>
        </div>
        <div class="item">
          <img src="../../assets/img/icon_business_feature.svg">
          <h3>品牌支持</h3>
          <i>Brand Support</i>
          <p>全方位一站式服务体系，确保每一饼茶口感的独特性以及统一性。自有仓库，稳定供应。</p>
        </div>
        <div class="item">
          <img src="../../assets/img/icon_business_feature.svg">
          <h3>科技赋能</h3>
          <i>Technology Empowerment</i>
          <p>以数据为导向，提供新零售系统，实现仓储、物流、订单的多方打通，用科技为业务赋能。</p>
        </div>
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
@import './business_mobile.scss';
@import './business.scss';
</style>
