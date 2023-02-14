import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage,
  defineRule,
  configure,
} from "vee-validate";
import { max, min, email, required } from "@vee-validate/rules";
import type { App } from "vue";

export default {
  install(app: App) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("captcha", email);

    configure({
      generateMessage: () => {
        // TODO: Custom ErrorMessage

        /* const messages = {
          id: `请输入正确的用户id`,
          psw: `请输入正确的密码格式`,
          captcha: `请输入正确的邮箱格式`,
          wait_number: `请输入验证码`,
        }; */
        return "格式错误";
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
