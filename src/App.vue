<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
@import url('./common/css/icon.css');
@import url('./common/css/main.css');
	/*每个页面公共css */
	@font-face {
  font-family: 'iconfont';  /* project id 1031287 */
  src: url('//at.alicdn.com/t/font_1031287_29ji8t45uvq.eot');
  src: url('//at.alicdn.com/t/font_1031287_29ji8t45uvq.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1031287_29ji8t45uvq.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1031287_29ji8t45uvq.woff') format('woff'),
  url('//at.alicdn.com/t/font_1031287_29ji8t45uvq.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1031287_29ji8t45uvq.svg#iconfont') format('svg');
}
	.iconfont {
	font-family:"iconfont" !important;
	font-size:16px;
	font-style:normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	}
	.icon-draw::before {
		content: '\e667'
	}
</style>
