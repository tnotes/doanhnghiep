<template>
	<el-row>
		<el-col :span="17">
			<el-image src="https://asset.dolenglish.vn/resize=w:1867,h:917,fit:crop/quality=value:100/output=format:webp/compress/3TykYf2pT3aUVZy5nXn2" fit="cover">
				
			</el-image>
		</el-col>
		<el-col style="margin-top:-40px" :span="6" :offset="1">
			<h3 class="brand">Đăng kí dùng thử miễn phí</h3>


			<el-form ref="register" :rules="register_form" :model="formData"  status-icon label-width="auto" label-position="top" :inline="false" :disabled="false" :inline-message="false" show-message validate-on-rule-change size="medium">

				<el-form-item class="field" label="Họ và Tên" prop="fullname" align="left">
					<el-input placeholder="Nhập tên đầy đủ thông tin Họ và Tên" v-model="formData.fullname" size="medium" clearable :autosize="false" :disabled="false" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item class="field" label="Email" prop="email" align="left">
					<el-input placeholder="Nhập Email" v-model="formData.email" size="medium" clearable type="text" :autosize="false" :disabled="false" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item class="field" label="Mật khẩu" prop="password" align="left">
					<el-input placeholder="Nhập mật khẩu" v-model="formData.password" size="medium"  show-password :disabled="false" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item class="field" label="Nhập lại mật khẩu" prop="repassword" align="left">
					<el-input placeholder="Nhập lại mật khẩu" v-model="formData.repassword" size="medium" show-password :disabled="false" autocomplete="off"></el-input>
				</el-form-item>

				<el-form-item prop="agree" align="left">
					<el-checkbox v-model="formData.agree" label="Tôi đã đọc và đồng ý điều khoản sử dụng dịch vụ." :border="false" :disabled="false"></el-checkbox>
				</el-form-item>
				
				
				<el-form-item align="center">
					<el-button type="primary" @click="register" :loading="loading" size="medium">Đăng Kí</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
	
</template>
<script>
	export default {
		data(){
			var validate_password = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('Quý khách được yêu cầu nhập mật khẩu.'));
				} else {
					if (this.formData.repassword !== '') {
						this.$refs.register.validateField('repassword');
				    }
					callback();
				}
			};
			var validate_repassword = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('Quý khách được yêu cầu nhập lại mật khẩu.')); 
				} else if (value !== this.formData.password) {
				    callback(new Error('Mật khẩu nhập lại không trùng khớp.'));
				} else {
					callback();
				}
			};
			var validate_agree = (rule, value, callback) => {
				if (!value) {
					callback(new Error('Quý khách vui lòng xác nhận đã đọc điều khoản sử dụng dịch vụ.')); 
				} else{
					callback();
				
				}
			};
			return {
				formData:{
					fullname:'',
					email:'',
					password:'',
					repassword:'',
					agree:false
				},
				loading:false,
				register_form:{
					fullname:[{type:'string',required:true,message:'Quý khách được yêu cầu nhập Tên đăng nhập.'}],
					email:[{type:'string',required:true,message:'Quý khách được yêu cầu nhập Email.'}],
					password:[{validator:validate_password,type:'string',required:true}],
					repassword:[{validator:validate_repassword,type:'string',required:true}],
					agree:[{validator:validate_agree,type:'boolean',required:true}]

				}


			}
		},
		methods:{
			register(){
				let _ = this;
				this.$refs['register'].validate(async (valid)=>{
					if(valid){
						let {data} = await _.$axios.post('/api/account/register',_.formData);
						if(data === 'OK') {
							_.$message({type:'success',message:'Đăng kí thành công !'});
							window.location.href = "/";
						}else{
							_.$message({type:'error',message:data.error});
						}
					}else{
						return false;
					}
				})
			}
		}
	}
</script>
<style scoped>
.brand{
	color:#3c4f65;
	text-align: left;
	margin-bottom: 20px;
	margin-top:35px;
}
.field{
	margin-bottom: 16px
}
</style>