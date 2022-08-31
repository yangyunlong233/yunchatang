<template>
  <div class="activity-mask red-wall">
    <ul class="menu-container">
      <li class="current" v-for="item, index in nav" :key="index">
        <a :href="item.link_to">
          <span>{{item.sn}}</span>
          <h1>{{item.name}}</h1>
          <h2>{{item.en_name}}</h2>
        </a>
      </li>
    </ul>
    <LiteLogo type="lighten" />
    <div class="copy-lite lighten">© 云茶堂新零售(云南)有限公司 滇ICP备16009188号-1</div>
    <div class="wall-top-shadow"></div>
    <Side type="lighten" />
    <Leaf class="leaf" />
  </div>
</template>

<script>
import Side from '@/components/Side'
import LiteLogo from '@/components/LiteLogo'
import Leaf from '@/components/Leaf'
export default {
  data () {
    return {
      nav: [
        {
          sn: '#01',
          name: '首页',
          en_name: 'Home',
          link_to: '/'
        },
        {
          sn: '#02',
          name: '关于我们',
          en_name: 'About',
          link_to: '/about'
        },
        {
          sn: '#03',
          name: '云茶体验',
          en_name: 'Expression',
          link_to: '/expression'
        },
        {
          sn: '#04',
          name: '商销平台',
          en_name: 'Platform',
          link_to: '/platform'
        },
        {
          sn: '#05',
          name: '空间运营',
          en_name: 'Space',
          link_to: '/space'
        },
        {
          sn: '#06',
          name: '招商加盟',
          en_name: 'Business',
          link_to: '/business'
        }
      ]
    }
  },
  components: {
    Side,
    LiteLogo,
    Leaf
  }
}
</script>

<style lang="scss">
@import './menu_mobile.scss';
@import './menu.scss';

</style>
