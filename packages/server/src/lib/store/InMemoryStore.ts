import { ReleaseInfos } from "../../../../../shared/release";

class InMememoryStore {
  private dataReactReleases: ReleaseInfos = [];

  constructor() {
    //
  }

  async initialize() {
    this.dataReactReleases.push({
      body: "_BODY",
      created_at: "2022-06-14T19:51:27Z",
      draft: false,
      id: 123,
      name: "_NAME",
      prerelease: false,
      published_at: "2022-06-14T19:51:27Z",
      tag_name: "_TAGNAME",
      url: "_URL",
    });
  }

  async setReactReleases(data: ReleaseInfos) {
    this.dataReactReleases = data;
  }

  async getReactReleases() {
    return this.dataReactReleases;
  }
}

export { InMememoryStore };
