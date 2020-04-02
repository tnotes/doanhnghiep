<template>
  <el-container>
    <el-header>
      <img src="/logo.png">
      
      <el-button type="info" href="/dang-ki" class="register" icon="el-icon-user" :loading="false" :plain="true" :round="false" :circle="false" :autofocus="false" size="medium" :disabled="false">Thành viên mới</el-button>
      <el-link type="primary" href="/gioi-thieu" class="link"  :loading="false" :plain="true" :round="false" :circle="false" :autofocus="false" size="medium" :disabled="false">Điều khoản & chính sách</el-link>

      <el-link type="primary" href="/gioi-thieu" class="link"  :loading="false" :plain="true" :round="false" :circle="false" :autofocus="false" size="medium" :disabled="false">Giới thiệu</el-link>
      <el-link type="primary" href="/" class="link"  :loading="false" :plain="true" :round="false" :circle="false" :autofocus="false" size="medium" :disabled="false">Trang chủ</el-link>

    </el-header>
    <el-divider direction="horizontal"></el-divider>
    <el-main>
      <nuxt/>
    </el-main>
  </el-container>
</template>

<style scoped>
.link{
	float:right;
	margin-top:30px;
	margin-right:25px
}
.register{
	margin-left:20px;
	float:right;
	margin-top:20px;
	margin-right:25px
}
</style>
