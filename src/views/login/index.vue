<template>
	<div class="page login">
		<el-container>
			<el-header>登录</el-header>
			<el-main>
				<div class="login-box">
					<el-form ref="form" :model="form" label-width="80px" :rules="rules">
						<el-form-item label="账号：" prop="checkname">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="密码：" prop="checkpwd">
							<el-input v-model="form.pwd" type="password"></el-input>
						</el-form-item>
					</el-form>
				</div>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	
	import api from '@/api';
	
	export default {
		name: 'login',
		data() {
			let nameVal = (rule, value, callback) => {
				console.log(rule, value, callback);
				console.log(value);
			};
			let pwdVal = (rule, value, callback) => {
				console.log(rule, value, callback);
			};
			return {
				form: {
					name: '',
					pwd: ''
				},
				rules: {
					checkname: [{
						validator: nameVal,
						trigger: 'blur'
					}],
					checkpwd: [{
						validator: pwdVal,
						trigger: 'blur'
					}]
				}
			};
		},
		mounted(){
			console.log(123)
		}
	};
</script>
<style lang="scss">
	@import '@/styles/layout.scss';
	.login {
		.el-header {
			background: #169aff;
			@include flex;
			color: #fff;
			font-size: 18px;
		}
		.el-main {
			position: relative;
			background: rgba(33, 23, 45, 0.5);
		}
	}
</style>
<style lang="scss" scoped="scoped">
	@import '@/styles/layout.scss';
	.login-box {
		width: 400px;
		min-height: 500px;
		position: absolute;
		right: 100px;
		top: 150px;
		background: #fff;
		border-radius: 10px;
		padding: 20px 20px 20px 10px;
	}
</style>