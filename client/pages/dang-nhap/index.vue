<template>
	<el-row>
		<transition name="el-zoom-in-center">
			<div class="transition-box">
				<el-col :span="8" :offset="8">
					<center>
						Đăng Nhập
					</center>

					<el-form ref="login" :rules="login_input" :model="login_form"  status-icon label-width="auto" label-position="top" :inline="false" :disabled="false" :inline-message="false" show-message validate-on-rule-change size="medium">
						<el-form-item align="left" label="Tên đăng nhập" prop="username">
							<el-input placeholder="Username" size="small" v-model="login_form.username" clearable :autosize="false" :disabled="false" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item align="left" label="Mật khẩu" prop="password">
							<el-input placeholder="Password" v-model="login_form.password" size="small" show-password :disabled="false" autocomplete="off"></el-input>
						</el-form-item>

						<el-form-item align="center">
							<el-button type="primary" @click="login" :loading="login_status" size="medium">Đăng nhập</el-button>
						</el-form-item>
						<el-form-item align="right">
							Bạn chưa tài khoản ? <el-link href="/dang-ki" icon="" type="default" :underline="false" :disabled="false">Đăng kí</el-link>
						</el-form-item>
					</el-form>
				</el-col>
			</div>
		</transition>
	</el-row>
</template>
<script>
	export default {
		data(){
			return{
				login_status:false,
				login_form:{username:'',password:''},
				login_input:{
					username:[{type:'string',required:true,trigger:'blur',message:'Quý khách được yêu cầu nhập vào ô trống.'}],
					password:[{type:'string',required:true,trigger:'blur',message:'Quý khách được yêu cầu nhập vào ô trống.'}]

				}
			}
		},
		methods:{
			login:async function(){
				this.$refs['login'].validate((valid)=>{
					if(valid){
						alert(JSON.stringify(this.login_form))
					}else{
						return false
					}
				})
			}
		}
	}
</script>