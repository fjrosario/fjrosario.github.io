import App from "./components/App";
import { masterLinkArray } from "../data/linkArray";
import { myBio } from "../data/bio";

export default function Home() {
  return <App linkArray={masterLinkArray} bio={myBio} />;
}
