<template>
  <div id="notFound" class="notFound">
    <div class="notFound-container">
      <img src="../../assets/img/404.jpg">
      <div class="content">
        <h1>您所访问的资源不存在或正在建设中</h1>
        <span @click="$router.back()">返回</span>
        <span>
          <router-link to="/">首页</router-link>
        </span>
      </div>
    </div>
    <Side typeof="darken" />
  </div>
</template>

<script>
import Side from '@/components/Side'
export default {
  components: {
    Side
  }
}
</script>

<style lang="scss">
@import './notfound_mobile.scss';
@import './notfound.scss';
</style>
