<template>
  <div class="draw-box" v-if="login">
    <div class="draw-list"   >
      <div class="draw-item" v-for="(item,index) in options" :key="index" @click="goTo(index)">
        <div class="icon" :icon="item.icon" ></div>
        <div class="title">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
// import uniGrid from '@dcloudio/uni-ui/lib/uni-grid/uni-grid.vue'
export default {
  data () {
    return {
      login:false,
      options: [{
        icon: 'icon-draw',
        color: '#e54d42',
        text: '发起抽奖',
        url:'/pages/draw/actionForm'
      },{
        icon: 'icon-draw',
        color: '#e54d42',
        text: '我的发起',
        url:'/pages/draw/actionForm'
      }]
    }
  },

  components: {
  },

  methods: {
    checkSession(){
				uni.checkSession({
					success: (res) => {
            this.login = true
					},
					fail: () =>{
            this.login = false
						uni.navigateTo({
              url: '/pages/login/login'
            })
					}
				})
      },
      goTo(index){
        uni.navigateTo({
          url: this.options[index].url
        })
      }
  },

  onLoad () {
  },
  onShow () {
   this.checkSession()
  }
}
</script>

<style scoped>
.draw-box {
  padding: 20upx;
}
</style>
