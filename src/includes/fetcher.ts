import { ChatAPIs } from "./ChatAPIs";
import type {
  ILoginForm,
  IMessage,
  IRegisterForm,
  IRequestOptions,
} from "./IFetcher";

const ContentType = {
  json: "application/json;charset=utf-8",
  form: "application/x-www-form-urlencoded;charset=utf-8",
};

// options不指定RequestInit
function xfetch(url: string, options?: IRequestOptions) {
  // 如果不传入options, 以base对象为RequestInit
  const base = {
    method: "GET",
    headers: {
      "Content-Type": ContentType.json,
    },
    body: {},
  };

  // 合并请求对象
  options = Object.assign(base, options);
  const { method, body } = options;

  // GET没有请求体, 把请求体的参数拼接到URL上, 然后删除body
  if (method!.toUpperCase() === "GET") {
    const params: string[] = [];
    Object.keys(body).forEach((key) => {
      params.push(`${key}=${encodeURIComponent(body[key])}`);
    });
    if (params.length) {
      // 得到标准URL请求格式http://xxxxx?param1=value1&&param2=value2
      url = `${url}?${params.join("&&")}`;
    }
    delete options.body;
  }

  if (localStorage.getItem("TOKEN") && options.headers) {
    // 请求带上token
    options.headers["TOKEN" as string] = localStorage.getItem("TOKEN");
  }

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(async (res) => {
        if (res.status.toString() != "201") {
          reject(res);
        }
        // 要求后端携带set-cookies标头以设置TOKEN
        if (res.headers.get("set-cookies")) {
          localStorage.setItem("TOKEN", res.headers.get("set-cookies")!);
        }
        resolve(res.json());
      })
      .catch((err) => reject(err));
  });
}

/**
 *
 * @param form 用户名 密码 邮箱 验证码
 * @returns
 */
function createUser(form: IRegisterForm): Promise<IMessage> {
  return new Promise((resolve, reject) => {
    xfetch(
      `http://${import.meta.env.VITE_DOMAIN}:${import.meta.env.VITE_HOST}${
        ChatAPIs.UserRegister
      }`,
      {
        method: "post",
        body: JSON.stringify(form),
      }
    )
      .then((data) => {
        resolve(data as IMessage);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 *
 * @param form 用户ID 密码 用户邮箱 验证码
 * @returns
 */
function userLogin(form: ILoginForm): Promise<IMessage> {
  return new Promise((resolve, reject) => {
    xfetch(
      `http://${import.meta.env.VITE_DOMAIN}:${import.meta.env.VITE_HOST}${
        ChatAPIs.UserLogin
      }`,
      {
        method: "post",
        body: JSON.stringify(form),
      }
    )
      .then((data) => {
        resolve(data as IMessage);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export { xfetch, createUser, userLogin };
