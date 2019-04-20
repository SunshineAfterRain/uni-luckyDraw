<template>
  <div class="login">
   <div class='content'>
        <div>申请获取以下权限</div>
        <p>获得你的公开信息(昵称，头像等)</p>
    </div>
    <button type="primary" size="large" open-type='getUserInfo' shape="circle" @getuserinfo="getUserInfo">点击授权</button>
  </div>
</template>

<script>
import model from '@/utils/model'
export default {
  data () {
    return {
    }
  },

  components: {
  },

  methods: {
    getUserInfo (userInfo) {
      console.log(userInfo)
      if (userInfo.target.errMsg.indexOf('ok')) {
        uni.setStorage({
          key: 'userInfo',
          data: userInfo.target.userInfo
        })

        uni.login({
          provider: 'weixin',
          success: (res) => {
            console.log(res)
            let dataSend = {
              code: res.code,
              encryptedData: userInfo.target.encryptedData,
              iv: userInfo.target.iv
            }
            model.login(dataSend).then((res) => {
              if (res.code === 200) {
                console.log(res)

                wx.setStorage({
                  key: 'userInfo',
                  data: res.data
                })
                uni.navigateBack()
              } else {
                wx.showToast({
                  title: res.msg,
                  icon: 'none'
                })
              }
            })
          }
        })
      } else {

      }
    }
  },

  created () {

  }

}
</script>

<style scoped>
.login {
    text-align: center;

}
.content {
  margin-top: 200rpx;
  margin-bottom: 50rpx
}

.content text {
    display: block;
    color: #9d9d9d;
    margin-top: 40rpx;
}

.bottom {
    border-radius: 80rpx;
    margin: 70rpx 50rpx;
    font-size: 35rpx;
}
</style>
