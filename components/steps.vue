<template>
	<view>
		<view class='cu-tag bg-blue'>步骤{{step_index}}</view>
	<view class="cu-form-group align-start">
		<view class="title">步骤描述</view>
		<textarea maxlength="-1"  @input="textareaBInput" placeholder="用户未报名之前将对二维码进行模糊处理" :name='"step" +step_index+ "[desc]"'></textarea>
	</view>
	<view class="cu-form-group" v-for="(item,index) in step_input" v-if="step_input">
		<view class="title">输入框要求</view>
		<input placeholder="例:  输入注册手机号" :name='"step"+step_index+"[input_title]["+index+"]"'></input>
	</view>
	<view class="cu-form-group">
		<view class="grid col-4 grid-square flex-sub">
			 <view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
			 <image :src="imgList[index]" mode="aspectFill"></image>
				<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
					<text class='cuIcon-close'></text>
				</view>
			</view>
			
			
			
			<input :name='"step"+step_index+"[imgs]"' type="hidden" :value="JSON.stringify(step_img_url)" style="display: none;" ></input>
			<view class="solids egImg" @tap="ChooseImage(1,step_index)" >
				<text class='cuIcon-upload' style="font-size: 12px;">添加示例图</text>
			</view>
			<view class="solids qrCode" @tap="ChooseImage(2,step_index)" >
				<text class='cuIcon-upload' style="font-size: 12px;">添加二维码</text>	
			</view>
			<view class="solids egInput" @tap="addInput(step_index)" >
				<text class='cuIcon-upload' style="font-size: 12px;">添加输入框</text>	
			</view>
			<view class="solids egUrl" @tap="addUrl(step_index)" >
				<text class='cuIcon-upload' style="font-size: 12px;">添加下载链接</text>	
			</view>
			
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		 name:'step',
		 props:{
			 
			 step_desc:{
				 type:String,
				 default:'',
				 
			 },
			 step_index:{
				 type:Number,
				 default:1
			 }
		 },
		data(){
			return {
				//img_temp:'',
				desc:'',
				imgList:[],
				step_img_url:[],
				step_input:0,
				step_input_title:[]
			}
		},
		methods:{
			addInput(step){
				this.step_input = this.step_input+1;
				
			},
			ChooseImage(type,step) {
				
					uni.chooseImage({
						count: 1, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album'], //从相册选择
						success: (res) => {
							if (this.imgList.length != 0) {
								this.imgList = this.imgList.concat(res.tempFilePaths)
							} else {
								this.imgList = res.tempFilePaths
							}
							console.log(res.tempFilePaths)
							uni.uploadFile({
							            url: 'http://help.ouyang.wiki/api/uploads', //仅为示例，非真实的接口地址
							            filePath: res.tempFilePaths[0],
										header: {
											'Access-Control-Allow-Origin':'*',
											'Access-Control-Allow-Credentials':'true',
										},  
							            name: 'file',
							            formData: {
							                'user': 'test'
							            },
							            success: (uploadFileRes) => {
											var res = JSON.parse(uploadFileRes.data)
											const step_imgs = JSON.stringify({step:step,step_img:res.path}) 
											//res.
											if (this.step_img_url.length != 0) {
												this.step_img_url = this.step_img_url.concat(res.path)
											} else {
												this.step_img_url.push(res.path)
											}
							                console.log(this.step_img_url);
							            }
							        });
						}
					});
				
				
			},
			ViewImage(e) {	
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				this.imgList.splice(e.currentTarget.dataset.index, 1)
				/* uni.showModal({
					title: '',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							
						}
					}
				}) */
			},
			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			}
		}
	}
</script>

<style>
</style>
