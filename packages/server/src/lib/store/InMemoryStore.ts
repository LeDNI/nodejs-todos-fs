import { ReleaseInfos } from "../../../../../shared/release";
import fetch from "cross-fetch";

class InMememoryStore {
  private dataReactReleases: ReleaseInfos = [];

  constructor() {
    //
  }

  async initialize() {
    this.dataReactReleases = await fetchReleases();
  }

  async setReactReleases(data: ReleaseInfos) {
    this.dataReactReleases = data;
  }

  async getReactReleases() {
    return this.dataReactReleases;
  }
}

// Fetch React Releases, preferably from the internal cache
async function fetchReleases(): Promise<ReleaseInfos> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/facebook/react/releases"
    );
    const data = (await response.json()) as ReleaseInfos;
    return data;
  } catch (e) {
    console.log("Fetch releases Error", e);
    return [];
  }
}

export { InMememoryStore };
