import { masterLinkArray, Link } from "../../data/linkArray";
import Head from "next/head";

function getPageLink(id: string): Link | null {
  return (
    masterLinkArray.find((link: Link) => link.directory?.includes(id)) || null
  );
}

export default function Page({ params }: { params: { id: string } }) {
  const link: Link | null = getPageLink(params.id);
  const redirectCopy = `Redirecting to ${link?.title}...`;
  let metaRedirectTag = (
    <meta httpEquiv="refresh" content={`0; url=${link?.url}`} />
  );

  //uncomment line to disable redirect
  //metaRedirectTag = <></>;

  return (
    <>
      <Head>
        <title>{redirectCopy}</title>
        {metaRedirectTag}
      </Head>
      <body>
        <h1>{redirectCopy}</h1>
      </body>
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
  let linkArray = masterLinkArray;

  //uncomment line to only generate one redirect page (for debugging)
  //linkArray = linkArray.slice(0, 1);

  paths = linkArray.flatMap(
    (link) => link.directory?.map((dir) => ({ params: { id: dir } })) || []
  );

  return { paths, fallback: false };
}
