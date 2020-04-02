<template>
	<el-col :span="20" :offset="2">
		{{data}}
	</el-col>
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		methods:{
			
		},
		async asyncData({req,res,$axios}){
			try{
				let cookie = req.headers['set-cookie'].reduce(((previous,current)=>previous+current.split(';')[0]+';'),'');
				console.log(cookie);
				let {data} = await $axios.$get('http://localhost:8080/api/profile/get',{headers:{cookie}});
				return {data,cookie};
			}catch(e){
				res.redirect('/dang-ki')
			}
		}
	}
</script>
<style scoped>

</style>