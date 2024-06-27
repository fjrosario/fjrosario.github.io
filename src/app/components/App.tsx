import React from "react";
import Header from "./Header";
import LinkList from "./LinkList";
import Footer from "./Footer";
import { Link } from "../../data/linkArray";
import { Bio } from "../../data/bio";

interface AppProps {
  linkArray: Link[];
  bio: Bio;
}

function App({ linkArray, bio }: AppProps) {
  return (
    <>
      <Header {...bio} />
      <hr />
      <LinkList linkArray={linkArray} />
      <hr />
      <Footer name={bio.name} />
    </>
  );
}

export default App;
