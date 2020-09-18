import axios from "axios";

const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    const token = localStorage.getItem("accessToken");
    if (token) config.headers.accessToken = token;
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (err) => {
    return new Promise((resolve, reject) => {
      const originalReq = err.config;
      if (err.response.status === 401 && err.config && !err.config._rety) {
        originalReq._rety = true;

        let res = fetch("/api/auth/refreshToken", {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            accessToken: localStorage.getItem("accessToken"),
          },
          redirect: "follow",
          referrer: "no-referrer",
        })
          .then((res) => res.json())
          .then((res) => {
            originalReq.headers.accessToken = res.accessToken;
            localStorage.setItem("accessToken", res.accessToken);
            return instance(originalReq);
          });

        resolve(res);
      }

      reject(err);
    });
  }
);

export default instance;
