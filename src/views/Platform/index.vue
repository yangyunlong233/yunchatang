<template>
  <div id="Platform" class="platform">
    <Side type="darken" />
    <div class="platform-container">
      <div class="content">
        <div class="left-column">
          <i>Commercial sales platform</i>
          <h1>商销平台</h1>
        </div>
        <div class="right-column title-cover"><img src="../../assets/img/platform_cover_case.png"></div>
        <div class="left-column"><img src="../../assets/img/platform_title_01.png"></div>
        <div class="right-column">
          <h2>科技赋能</h2>
          <p class="tt">提供专业的电商ERP管理系统，WMS仓储管理系统，实现链路闭环全打通。更提供淘茶志作为电商平台，线上、线下双重加持，扩增销售渠道。</p>
          <h3>- 电商ERP管理系统</h3>
          <p class="tx">
            企业通过销售管理系统与ERP系统一体化，可以进行了线上线下销售信息的合并与统一管理。不仅能够实时把握整体销售情况，为业务发展与企业战略决策提供依据，还在很大程度上提高了各部门的工作效率和协同工作能力，降低了企业运行成本。
          </p>
          <h3>- WMS仓储管理系统</h3>
          <p class="tx">
            WMS作为整个物流中心的中枢系统，一方面与企业的ERP系统充分集成，及时接收订单指令并将订单执行结果反馈到ERP系统;另一方面通过各种预先设定的作业规则和优化算法，动态调度RF手持终端、电子标签协同完成整箱或者拆零拣货作业，实现货物的准确分流。
          </p>
          <h3>- 淘茶志电商平台</h3>
          <p class="tx">
            淘茶志秉承『让喝茶成为一种健康的生活方式』的理念，通过提供品质保证的商品、集成化的服务、数字赋能的工具，从而打造集合大供货商服务于渠道商及终端消费者的全新商业模式。
          </p>
        </div>
        <div class="left-column"></div>
        <div class="right-column"><img class="spaces" src="../../assets/img/platform_spaces.svg"></div>
        <div class="left-column">
          <img src="../../assets/img/platform_title_02.png">
          <h2>产品体系</h2>
          <p>在产品生产和存储上严格推行原料表转化、生产标准化和仓储表转化流程，并依托云茶研究院独创的拼配技术，实现了云茶生产的专业化和多样化。</p>
        </div>
        <div class="right-column">
          <div class="platform-slider">
            <ul>
              <transition-group name="fade">
                <li v-for="item, index in products" :key="index" v-show="count == index">
                  <img :src="item.img">
                  <div class="tt">
                    <p>{{item.name}}</p>
                    <span v-for="k, i in item.features" :key="i">#{{k}}#</span>
                  </div>
                </li>
              </transition-group>
            </ul>
            <div class="pagenation">
              <img class="prev" @click="prev_handle()" src="../../assets/img/platform_slider/prev.svg">
              <img class="next" @click="next_handle()" src="../../assets/img/platform_slider/next.svg">
            </div>
          </div>
        </div>
        <div class="left-column"></div>
        <div class="right-column"><img class="spaces" src="../../assets/img/platform_spaces.svg"></div>
        <div class="left-column"><img src="../../assets/img/platform_title_03.png"></div>
        <div class="right-column">
          <h2>区域保护</h2>
          <img style="width: 65%; margin-bottom: 3rem" src="../../assets/img/platform_container_case.png">
          <h2>加盟商可获得有效经营区域的专属保障</h2>
          <p>设置区域保护政策，划分经营范围，可以更好地避免市场恶意竞争，维护加盟者权益，确保每一个加盟店的市场空间和快速发展。</p>
        </div>
        <div class="left-column"><img src="../../assets/img/platform_title_04.png"></div>
        <div class="right-column">
          <h2>除加盟店外，更提供云茶网作为进货渠道，成为云茶代理商，享受代理商分润，满足不同场景需求。</h2>
        </div>
        <div class="left-column"></div>
        <div class="right-column"><img class="spaces" src="../../assets/img/platform_spaces.svg"></div>
      </div>
    </div>
    <div class="platform-buttons">
      <span><a href="">全国布局</a></span>
      <span><a href="">招商加盟</a></span>
      <span><a href="">线下门店</a></span>
    </div>
  </div>
</template>

<script>
import Side from '@/components/Side'
export default {
  data () {
    return {
      timer: null,
      count: 0,
      products: [
        {
          name: '雲珀普洱红茶罐装',
          img: require('../../assets/img/platform_slider/case_01.jpg'),
          features: ['韧性十足', '醇厚饱满']
        },
        {
          name: '乌金梗普洱熟茶',
          img: require('../../assets/img/platform_slider/case_02.jpg'),
          features: ['条索粗壮显金条']
        },
        {
          name: '四九金瓜普洱生茶',
          img: require('../../assets/img/platform_slider/case_03.jpg'),
          features: ['乌润紧实', '瓜型圆润']
        }
      ]
    }
  },
  mounted () {
    this.slider_timer()
  },
  methods: {
    slider_timer () {
      this.timer = setInterval(() => {
        this.count < (this.products.length - 1) ? this.count++ : this.count = 0
      }, 3000)
    },
    prev_handle () {
      clearInterval(this.timer)
      this.timer = null
      this.count === 0 ? this.count = (this.products.length - 1) : this.count--
      setTimeout(() => this.slider_timer(), 3000)
    },
    next_handle () {
      clearInterval(this.timer)
      this.timer = null
      this.count === (this.products.length - 1) ? this.count = 0 : this.count++
      setTimeout(() => this.slider_timer(), 3000)
    }
  },
  components: {
    Side
  }
}
</script>

<style lang="scss">
@import './platform_mobile.scss';
@import './platform.scss';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
