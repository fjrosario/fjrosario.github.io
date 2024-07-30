// Purpose: To store the master link array for the site and redirects.

const masterLinkArray = [
  {
    icon: "fab fa-xl fa-linkedin",
    originUrl: "https://www.linkedin.com/in/frankjrosario/",
    title: "LinkedIn",
    directories: ["linkedin", "li"],
  },
  {
    icon: "fab fa-xl fa-stack-overflow",
    originUrl: "https://stackoverflow.com/users/10922/frank-rosario",
    title: "Stack Overflow",
    directories: ["stackoverflow", "so"],
  },
  {
    icon: "fab fa-xl fa-github-square",
    originUrl: "https://github.com/fjrosario",
    title: "GitHub",
    directories: ["github", "gh", "git", "dev"],
  },
  {
    icon: "fab fa-xl fa-twitter-square",
    originUrl: "https://www.twitter.com/frosario",
    title: "X/Twitter",
    directories: ["x", "tw", "twitter", "twt"],
  },
  {
    icon: "fab fa-xl fa-facebook-square",
    originUrl: "https://www.facebook.com/frank.rosario",
    title: "Facebook",
    directories: ["facebook", "fb"],
  },
  {
    icon: "fa-solid fa-xl fa-shop",
    originUrl: "https://www.mercari.com/u/frankrosario/?itemStatuses=1",
    title: "Mercari",
    directories: ["mercari", "store"],
  },
  {
    icon: "fab fa-xl fa-ebay",
    originUrl:
      "https://www.ebay.com/sch/jammerfi/m.html?_nkw=&_armrs=1&_from=&_ipg=200",
    title: "EBay",
    directories: ["ebay", "eb"],
  },
  {
    icon: "fa-regular fa-xl fa-envelope",
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

const externalLinkPath = "out";

const getRelativeExternalUrl = (path) => {
  return `/${externalLinkPath}/${path}`;
};

export { masterLinkArray, externalLinkPath, getRelativeExternalUrl };
