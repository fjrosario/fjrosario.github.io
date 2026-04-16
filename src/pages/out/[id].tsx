import Head from "next/head";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getLinkByDirectory, masterLinkArray } from "../../data/linkArray";

const redirectDelayInSeconds = 1;

type RedirectPageProps = {
  id: string;
};

export default function Page({
  id,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const link = getLinkByDirectory(id);

  if (!link) {
    return (
      <>
        <Head>
          <title>Redirect not found</title>
          <meta name="robots" content="noindex" />
        </Head>
        <h1 className="redirect">Redirect not found.</h1>
      </>
    );
  }

  const redirectCopy = `Redirecting to ${link.title}...`;

  return (
    <>
      <Head>
        <title>{redirectCopy}</title>
        <meta
          httpEquiv="refresh"
          content={`${redirectDelayInSeconds}; url=${link.originUrl}`}
        />
        <meta name="robots" content="noindex" />
      </Head>
      <h1 className="redirect">
        {redirectCopy}{" "}
        <a
          rel="noopener noreferrer"
          aria-label={link.title}
          title={link.title}
          href={link.originUrl}
        >
          {link.originUrl}
        </a>
      </h1>
    </>
  );
}

export const getStaticProps: GetStaticProps<RedirectPageProps> = async ({
  params,
}) => {
  const id = typeof params?.id === "string" ? params.id : "";

  return { props: { id } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = masterLinkArray.flatMap((link) =>
    link.directories.map((id) => ({ params: { id } }))
  );

  return { paths, fallback: false };
};
