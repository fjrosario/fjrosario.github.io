// Purpose: Store the master link array for the site and its redirects.

export type IconName =
  | "linkedin"
  | "stackoverflow"
  | "github"
  | "x"
  | "facebook"
  | "shop"
  | "ebay"
  | "email";

export interface Link {
  icon: IconName;
  originUrl: string;
  title: string;
  directories: [string, ...string[]];
}

export const masterLinkArray: Link[] = [
  {
    icon: "linkedin",
    originUrl: "https://www.linkedin.com/in/frankjrosario/",
    title: "LinkedIn",
    directories: ["linkedin", "li"],
  },
  {
    icon: "stackoverflow",
    originUrl: "https://stackoverflow.com/users/10922/frank-rosario",
    title: "Stack Overflow",
    directories: ["stackoverflow", "so"],
  },
  {
    icon: "github",
    originUrl: "https://github.com/fjrosario",
    title: "GitHub",
    directories: ["github", "gh", "git", "dev"],
  },
  {
    icon: "x",
    originUrl: "https://www.twitter.com/frosario",
    title: "X/Twitter",
    directories: ["x", "tw", "twitter", "twt"],
  },
  {
    icon: "facebook",
    originUrl: "https://www.facebook.com/frank.rosario",
    title: "Facebook",
    directories: ["facebook", "fb"],
  },
  {
    icon: "shop",
    originUrl: "https://www.mercari.com/u/frankrosario/?itemStatuses=1",
    title: "Mercari",
    directories: ["mercari", "store"],
  },
  {
    icon: "ebay",
    originUrl:
      "https://www.ebay.com/sch/jammerfi/m.html?_nkw=&_armrs=1&_from=&_ipg=200",
    title: "eBay",
    directories: ["ebay", "eb"],
  },
  {
    icon: "email",
    originUrl: "https://forms.gle/QfFUBtPjbZRQP4g96",
    title: "Contact",
    directories: [
      "contact",
      "contactme",
      "email",
      "e-mail",
      "mail",
      "message",
      "send",
      "cu",
      "cm",
    ],
  },
];

export const externalLinkPath = "out";

export function getRelativeExternalUrl(path: string) {
  return `/${externalLinkPath}/${path}`;
}

export function getPrimaryDirectory(link: Link) {
  return link.directories[0];
}

export function getLinkByDirectory(path: string) {
  return (
    masterLinkArray.find((link) => link.directories.includes(path)) ?? null
  );
}
