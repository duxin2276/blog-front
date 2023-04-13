import request from "../utis/requrest";

export const getArticleList = () => request.get('/article/list')