import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLinkByDirectory, masterLinkArray } from "../../../data/linkArray";

const redirectDelayInSeconds = 1;

type RedirectPageProps = {
  params: {
    id: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return masterLinkArray.flatMap((link) =>
    link.directories.map((id) => ({ id }))
  );
}

export function generateMetadata({ params }: RedirectPageProps): Metadata {
  const link = getLinkByDirectory(params.id);

  if (!link) {
    return {
      title: "Redirect not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `Redirecting to ${link.title}...`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function RedirectPage({ params }: RedirectPageProps) {
  const link = getLinkByDirectory(params.id);

  if (!link) {
    notFound();
  }

  const redirectCopy = `Redirecting to ${link.title}...`;

  return (
    <>
      <meta
        httpEquiv="refresh"
        content={`${redirectDelayInSeconds}; url=${link.originUrl}`}
      />
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
