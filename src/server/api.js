import service from "./index";

const request = {
  TestCookieGet(params) {
    return service({
      url: "/api/black/white-list",
      method: "get",
      params,
    });
  },
  TestCookiePost(data) {
    return service({
      url: "/api/2",
      method: "post",
      data,
    });
  },
};

export default request;
