<template>
  <div class="cmpt-side nav-type-normal">
    <div class="entry-wrap">
      <router-link to="/business" class="entry-icon"><img :src="type === 'lighten' ? icon_wechat.lighten : icon_wechat.darken">
      </router-link>
      <router-link to="/menu" class="entry-icon"><img :src="type === 'lighten' ? icon_menu.lighten : icon_menu.darken">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type'],
  data () {
    return {
      icon_wechat: {
        lighten: require('../../assets/img/icon_nav_wechat_lighten.svg'),
        darken: require('../../assets/img/icon_nav_wechat_darken.svg')
      },
      icon_menu: {
        lighten: require('../../assets/img/icon_nav_menu_lighten.svg'),
        darken: require('../../assets/img/icon_nav_menu_darken.svg')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-type-normal {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4.5rem;
  z-index: 99;

  border-right: 1px solid #D9D9D9;

  .entry-wrap {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 4.5rem;
    padding: 1rem 0;

    border-top: 1px solid #D9D9D9;

    .entry-icon {
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      margin: 1.5rem 0;
      padding: 0 1.5rem;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .scroll-guide {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 1.5rem;
    bottom: 12rem;

    img {
      width: 100%;
    }

    span {
      display: block;
      width: 100%;
      text-align: center;
      color: #fff;
    }
  }
}
</style>
