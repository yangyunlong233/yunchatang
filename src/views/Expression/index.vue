<template>
  <div id="Expression" class="expression">
    <Side type="lighten" />
    <div class="expression-container">
      <div class="slider">
        <ul>
          <transition-group name="fade">
            <li v-for="item, index in covers" :key="index" v-show="count == index">
              <div class="tt">
                <i>Feature</i>
                <h1>{{ item.title }}</h1>
                <p>云茶体验</p>
              </div>
              <img class="cover" :src="item.cover">
              <img class="bg" :src="item.bg">
              <div class="txs" v-html="item.detail"></div>
            </li>
          </transition-group>
        </ul>
        <div class="expression-lines">
          <div class="line line1"></div>
          <div class="line line2"></div>
          <div class="line line3"></div>
        </div>
      </div>
    </div>
    <LiteLogo type="lighten" />
  </div>
</template>

<script>
import Side from '@/components/Side'
import LiteLogo from '@/components/LiteLogo'
export default {
  data () {
    return {
      count: 0,
      timer: null,
      covers: [
        {
          cover: require('../../assets/img/expression_slider/case_01.jpg'),
          bg: require('../../assets/img/expression_slider/tt_01.png'),
          title: '宋代点茶',
          detail: '利用自然的审美方式去探索点茶的美学内涵和精神内涵<br>从单纯的点茶活动去感悟大自然馈赠的芬芳<br>将艺术美与自然美融为一体<br>形成一种美与天然相互依存的状态。'
        },
        {
          cover: require('../../assets/img/expression_slider/case_02.jpg'),
          bg: require('../../assets/img/expression_slider/tt_02.png'),
          title: '手工制茶',
          detail: '寻味传统古法制茶<br>在茶的故乡做个茶饼<br>亲触沐浴在云雾之中混然天成的鲜活树叶<br>亲手感知万古千秋时光沉淀下土地的温度。'
        },
        {
          cover: require('../../assets/img/expression_slider/case_03.jpg'),
          bg: require('../../assets/img/expression_slider/tt_03.png'),
          title: '云起九式冲泡',
          detail: '云起九式，云茶书院秉承“持本守真”的茶道宗旨和“静化持守”的茶修心法<br>专为普洱茶系列而自主研发创建的一套行茶技法。'
        }
      ]
    }
  },
  components: {
    Side,
    LiteLogo
  },
  mounted () {
    this.timer = setInterval(() => {
      if (this.count < this.covers.length - 1) {
        this.count++
      } else {
        this.count = 0
      }
    }, 4000)
  },
  methods: {
    handle_timer () {
    }
  }
}
</script>

<style lang="scss">
@import './expression_mobile.scss';
@import './expression.scss';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
