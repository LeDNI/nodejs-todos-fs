import { Send } from "express-serve-static-core";
export interface TypedResponse<ResBody> extends Express.Response {
  json: Send<ResBody, this>;
}
export interface TypedRequestBody<T> extends Express.Request {
  body: T;
}
import { Query } from "express-serve-static-core";

export interface TypedRequestQuery<T extends Query> extends Express.Request {
  params: T;
}
export interface TypedRequest<T extends Query, U> extends Express.Request {
  body: U;
  params: T;
}
