<template>
  <div class="draw-box" v-if="login">
    <uni-grid :options="options" @click="goTo()" ></uni-grid>
  </div>
</template>

<script>
import uniGrid from '@dcloudio/uni-ui/lib/uni-grid/uni-grid.vue'
export default {
  data () {
    return {
      login:false,
      options: [{
        icon: 'icon-draw',
        color: '#e54d42',
        text: '发起抽奖',
        url:'/pages/actionForm/actionForm'
      }]
    }
  },

  components: {
    uniGrid
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
      goTo({index}){

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
