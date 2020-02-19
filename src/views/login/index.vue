<template>
  <div class="login-wrap">
    <div class="login-box">
      <div class="title-box">
        <img class="logo" src="../../assets/login_logo.png" alt />
        <span class="title">黑马面面</span>
        <span class="line"></span>
        <span class="subtitle">用户登录</span>
      </div>

      <el-form ref="form" :rules="rules" :model="form" label-width="43px">
        <el-form-item prop="phone">
          <el-input prefix-icon="el-icon-user" placeholder="请输入手机号" v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            type="password"
            placeholder="请输入密码"
            v-model="form.password"
          ></el-input>
        </el-form-item>

        <el-form-item prop="code">
          <el-row>
            <el-col :span="17">
              <el-input
                prefix-icon="el-icon-key"
                type="password"
                placeholder="请输入验证码"
                v-model="form.code"
              ></el-input>
            </el-col>
            <el-col :span="7">
              <img class="code" src="../../assets/login_code.png" alt />
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item>
          <el-checkbox v-model="form.agree">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="btn">登录</el-button>
          <el-button type="primary" class="btn">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        phone: "",
        password: "",
        code: "",
        agree: false
      },
      rules: {
        phone: [{ required: true, message: "手机号不能为空", trigger: "blur" }],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 12, message: "密码的长度为6-12位", trigger: "blur" }
        ],
        code: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          { min: 4, max: 4, message: "验证码的长度为4位", trigger: "blur" }
        ]
      }
    };
  }
};
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
    padding-right: 41px;
    box-sizing: border-box;

    .title-box {
      display: flex;
      align-items: center;
      margin-top: 44px;
      margin-left: 48px;
      margin-bottom: 31px;

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

    .code {
      width: 100%;
      height: 40.8px;
      vertical-align: top;
    }

    .btn {
      width: 100%;
      margin-left: 0px;
      margin-bottom: 26px;
    }

    .el-checkbox {
      display: flex;
      // 上下居中
      align-items: center;
      .el-checkbox__label {
        display: flex;
      }
    }
  }
}
</style>