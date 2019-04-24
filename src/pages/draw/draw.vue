<template>
  <div class="draw-box" v-if="login">
    <div class="draw-list"   >
      <div class="draw-item radius text-center shadow-blur" v-for="(item,index) in options" :key="index" @click="goTo(index)" :class="item.class">
        <div class="icon iconfont" :class="item.icon" ></div>
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
        class: 'bg-gradual-red',
        text: '发起抽奖',
        url:'/pages/draw/actionForm'
      },{
        icon: 'icon-draw',
        class: 'bg-gradual-orange',
        text: '我的发起',
        url:'/pages/draw/actionForm'
      },
      {
        icon: 'icon-draw',
        class: '#e54d42',
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
.draw-list {
    display: flex;
  }
  .draw-item{
    width: 220upx;
    height: 220upx;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 30upx;
  }
   .draw-item .icon {
     font-size: 50upx;
     margin-bottom: 30upx;
   }
  .draw-item:not(:nth-of-type(3n)) {
    margin-right: 30upx;
  }
</style>
