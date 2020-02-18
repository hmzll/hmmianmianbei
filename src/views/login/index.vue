<template>
  <div class="login-wrap">
    <div class="login-box">
      <div class="title-box">
        <img class="logo" src="../../assets/login_logo.png" alt />
        <span class="title">黑马面面</span>
        <span class="line"></span>
        <span class="subtitle">用户登录</span>
      </div>
    </div>
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.login-wrap {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );

  display: flex;
  justify-content: space-around;
  align-items: center;

  .login-box {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);

    .title-box {
      display: flex;
      align-items: center;
      margin-top:44px;
      margin-left:48px;
      
      .title {
        margin-left: 16px;
        margin-right: 14px;
      }
      .line {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
      }

      .subtitle {
        margin-left: 12px;
      }
    }
  }
}
</style>