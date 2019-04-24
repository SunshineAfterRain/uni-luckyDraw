<template>
  <div class="actionForm uni-padding-wrap uni-common-mt" >
      <form >
            <view class="uni-form-item uni-column cu-form-group">
                <view class="title">活动名称</view>
                <input class="uni-input" v-model="actionForm.name" name="name" placeholder="请输入活动名称" />
            </view>
            <view class="uni-form-item uni-column cu-form-group">
                <view class="title">活动描述</view>
                <input class="uni-input" v-model="actionForm.gameDescription" name="gameDescription" placeholder="请输入活动简介" />
            </view>
            <view class="uni-form-item uni-column cu-form-group">
                <view class="title">参加人数</view>
                <input class="uni-input" type="number" v-model="actionForm.personQuota" name="personQuota" placeholder="请输入参加人数" />
            </view>
            <view class="uni-form-item uni-column cu-form-group">
                <view class="title">抽奖次数</view>
                <input class="uni-input" type="number" v-model="actionForm.totalExtraction" name="totalExtraction" placeholder="请输入抽奖次数" />
            </view>
            <view class="uni-form-item uni-column cu-form-group">
                <view class="title">开始时间</view>
               <picker mode="date" :value="actionForm.beginTime" :start="nowTime" end="2020-09-01" @change="bindTimeChange">
                <view class="picker">
                    {{actionForm.beginTime}}
                </view>
                </picker>
            </view>
            <view class=" cu-form-group">
                <view class="title">结束时间</view>
                <picker mode="date" :value="actionForm.endTime" :start="actionForm.beginTime" end="2020-09-01" @change="bindTimeChangeEnd">
                    <view class="picker">
                        {{actionForm.endTime}}
                    </view>
                </picker>
            </view>
            <view class="padding flex flex-direction">
                <button class="cu-btn bg-red lg" @click="submit">发起活动</button>
            </view>
      </form>
  </div>
</template>
<script>
import Util from '@/utils/index.js'
import Model from '@/utils/model.js'
export default {
  data () {
    return {
        actionForm: {
          name: '',
          personQuota: '',
          beginTime: '',
          endTime: '',
          totalExtraction: '',
          gameDescription: ''
        },
        nowTime: ''
    }
  },
  components: {
  },
  methods: {
    bindTimeChange(e){
         this.actionForm.beginTime = e.target.value
    },
    bindTimeChangeEnd(e){
        this.actionForm.endTime = e.target.value
    },
    async submit(){
        if(this.actionForm.name.length <= 0){
          uni.showToast({
            title: '请输入活动名称',
            icon: 'none',
            duration:2000,
          })
          return
        }else if(this.actionForm.gameDescription.length <= 0){
          uni.showToast({
            title: '请输入活动简介',
            icon: 'none',
            duration:2000,
          })
          return
        }else if(this.actionForm.personQuota.length <= 0){
          uni.showToast({
            title: '请输入参加人数',
            icon: 'none',
            duration:2000,
          })
          return
        }else if(this.actionForm.totalExtraction.length <= 0){
          uni.showToast({
            title: '请输入抽奖次数',
            icon: 'none',
            duration:2000,
          })
          return
        }
        let userInfoId = uni.getStorageSync('userInfo').id 
        let data = {...this.actionForm, userInfoId, sessionNum: 'a'}
        let header = {
          'Content-Type': 'application/json',
          'USER_TOKEN_KEY':  uni.getStorageSync('token')
        }
        let suc = await Model.actionForm(data, header)
        if(suc.code == 200){
          console.log(suc.data)
        }
    }
  },
  onLoad () {
      var date = new Date()
      this.nowTime = Util.formatTime(date)
      this.actionForm.beginTime = this.actionForm.endTime  = this.nowTime
  },
  onShow () {
  }
}
</script>

<style scoped>
.actionForm {
  padding: 20upx;
}
</style>
