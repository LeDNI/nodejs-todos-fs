import { ReleaseInfos } from "../../../../../shared/release";
import { TypedResponse } from "../models/express";
import { InMememoryStore } from "../store/InMemoryStore";

declare module "express" {
  export interface Response {
    json: any;
  }
}

const getReactReleases = (store: InMememoryStore) => {
  // return (res: any) => {
  return async (req: any, res: TypedResponse<ReleaseInfos>) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    res.json(await store.getReactReleases());
  };
};

export { getReactReleases };
