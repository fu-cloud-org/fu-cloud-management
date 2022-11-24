import service from "@/utils/request";

// label列表
export function labels(params) {
  return service({
    method: "get",
    url: "/labels",
    params,
  });
}
