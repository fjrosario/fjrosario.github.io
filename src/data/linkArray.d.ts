import exp from "constants";

export interface Link {
  /**
   * The CSS class for the icon to display for this link.
   */
  icon: string;

  /**
   * The URL of the external website.
   */
  originUrl: string;

  /**
   * The title of the link, which will be displayed to the user.
   */
  title: string;

  /**
   * The directory of the link, which will be displayed to the user.
   */
  directories: string[];
}

export const masterLinkArray: Link[];

export const externalLinkPath: string;

export const getRelativeExternalUrl: (string: path) => string;
