<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">发布任务</block>
		</cu-custom>
		<form @submit="formSubmit" @reset="formReset">
			<view class="cu-form-group">
				<view class="title">任务标题</view>
				<input placeholder="任务标题" name="title"></input>
				<!-- <button class='cu-btn bg-green shadow'>验证码</button> -->
			</view>
			<view class="cu-form-group">
				<view class="title">任务赏金</view>
				<input placeholder="任务赏金" name="reward_amount"></input>
			
			</view>
			<view class="cu-form-group">
				<view class="title">任务名额</view>
				<input placeholder="任务名额" name="nums"></input>
			
			</view>
			<view class="cu-form-group">
				<view class="title">任务时间</view>
				<input placeholder="多长时间内完成/h" name="time"></input>
			
			</view>
			<view class="cu-form-group">
				<view class="title">审核时间</view>
				<input placeholder="多少小时内审核/h" name="verify_time"></input>
			
			</view>
			<view class="cu-form-group">
				<view class="title">报名条件/限制</view>
				<input placeholder="报名条件/限制" name="condition"></input>
			
			</view>
			<view class="cu-form-group align-start solid-bottom">
				<view class="title">任务描述</view>
				<textarea maxlength="-1"  @input="textareaBInput" placeholder="多行文本输入框" name="desc"></textarea>
			</view>
			
			<!-- <view class="cu-form-group">
				<view class="title">日期选择</view>
				<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view> -->
			
		
			<view class="cu-bar bg-white margin-top">
				<view class="title">
					步骤详情
				</view>
				<view class="cuIcon-roundadd" @tap="step(1)">
				</view>
				<view class="cuIcon-delete" @tap="step(-1)">
					
				</view>
			</view>
				
			<step   :step_index="index+1"  v-for="(item,index) in steps"></step>	
		
			<view class="uni-btn-v">
			                    <button form-type="submit">Submit</button>
			                    <button type="default" form-type="reset">Reset</button>
			</view>
			
		</form>
	</view>
</template>

<script>
	import step from "../../components/steps.vue"
	export default {
		components:{step},
		data() {
			return {
				index: -1,
				picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
				multiArray: [
					['无脊柱动物', '脊柱动物'],
					['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
					['猪肉绦虫', '吸血虫']
				],
			
				multiIndex: [0, 0, 0],
				time: '12:01',
				date: '2018-12-25',
				steps: 1,
			};
		},
		methods: {
			step(type){
				this.steps = this.steps+type
			},
			
			formSubmit: function(e) {
			                console.log(e.detail.value)
			                var formdata = e.detail.value
			                uni.showModal({
			                    content: '表单数据内容：' + JSON.stringify(formdata),
			                    showCancel: false
			                });
			            },
			MultiColumnChange(e) {
				let data = {
					multiArray: this.multiArray,
					multiIndex: this.multiIndex
				};
				data.multiIndex[e.detail.column] = e.detail.value;
				switch (e.detail.column) {
					case 0:
						switch (data.multiIndex[0]) {
							case 0:
								data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
								data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
								break;
							case 1:
								data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
								data.multiArray[2] = ['鲫鱼', '带鱼'];
								break;
						}
						data.multiIndex[1] = 0;
						data.multiIndex[2] = 0;
						break;
					case 1:
						switch (data.multiIndex[0]) {
							case 0:
								switch (data.multiIndex[1]) {
									case 0:
										data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
										break;
									case 1:
										data.multiArray[2] = ['蛔虫'];
										break;
									case 2:
										data.multiArray[2] = ['蚂蚁', '蚂蟥'];
										break;
									case 3:
										data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
										break;
									case 4:
										data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
										break;
								}
								break;
							case 1:
								switch (data.multiIndex[1]) {
									case 0:
										data.multiArray[2] = ['鲫鱼', '带鱼'];
										break;
									case 1:
										data.multiArray[2] = ['青蛙', '娃娃鱼'];
										break;
									case 2:
										data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
										break;
								}
								break;
						}
						data.multiIndex[2] = 0;
						break;
				}
				this.multiArray = data.multiArray;
				this.multiIndex = data.multiIndex;
			},
			
			CheckboxChange(e) {
				var items = this.checkbox,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					items[i].checked = false;
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].value == values[j]) {
							items[i].checked = true;
							break
						}
					}
				}
			},
			
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
