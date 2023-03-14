import { ReleaseInfos } from "../../../../shared/release";
export const getReactReleases = async () => {
  const response = await fetch(`http://localhost:5000/react-releases`);
  return (await response.json()) as ReleaseInfos;
};
