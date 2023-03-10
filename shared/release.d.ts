export interface ReleaseInfo {
  url: string;
  id: number;
  tag_name: string;
  name: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  body: string;
}

export type ReleaseInfos = ReleaseInfo[];
