import { masterLinkArray, Link } from "../../data/linkArray";
import Head from "next/head";
import React from "react";

const redirectDelayInSeconds: number = 1;

function getPageLink(id: string): Link | null {
  return (
    masterLinkArray.find((link: Link) => link.directories?.includes(id)) || null
  );
}

export default function Page({ params }: { params: { id: string } }) {
  const link: Link | null = getPageLink(params.id);
  const redirectCopy = `Redirecting to ${link?.title}...`;
  const redirectHtml = (
    <a
      rel="noopener noreferrer"
      aria-label={link?.title}
      title={link?.title}
      href={link?.originUrl}
    >
      {link?.originUrl}
    </a>
  );

  // eslint-disable-next-line prefer-const
  let metaRedirectTag = (
    <meta
      httpEquiv="refresh"
      content={`${redirectDelayInSeconds}; url=${link?.originUrl}`}
    />
  );

  //uncomment line to disable redirect
  //metaRedirectTag = <></>;

  return (
    <>
      <Head key={"redirectHeadTags"}>
        <title>{redirectCopy}</title>
        {metaRedirectTag}
      </Head>
      <h1 style={{ margin: "5rem 5rem 0 5rem" }}>
        {redirectCopy} {redirectHtml}
      </h1>
    </>
  );
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  return { props: { params } };
}

export async function getStaticPaths(): Promise<{
  paths: { params: { id: string } }[];
  fallback: boolean;
}> {
  let paths: {
    params: {
      id: string;
    };
  }[] = [];

  // eslint-disable-next-line prefer-const
  let linkArray = masterLinkArray;

  //uncomment line to only generate one redirect page (for debugging)
  //linkArray = linkArray.slice(0, 1);

  paths = linkArray.flatMap(
    (link) => link.directories?.map((dir) => ({ params: { id: dir } })) || []
  );

  return { paths, fallback: false };
}
