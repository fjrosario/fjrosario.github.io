/**
 * Represents a biography for a person.
 */
export class Bio {
  /**
   * The name of the person.
   */
  public readonly name: string;

  /**
   * The title of the person, such as their job title.
   */
  public readonly title: string;

  /**
   * The canonical website URL for the person.
   */
  public readonly url: string;

  /**
   * A short summary for search engines and social previews.
   */
  public readonly description: string;

  /**
   * A display string that combines the name and title.
   */
  public get fullTitle(): string {
    return `${this.name} - ${this.title}`;
  }

  /**
   *
   */
  constructor(
    name: string,
    title: string,
    url: string,
    description: string
  ) {
    this.name = name;
    this.title = title;
    this.url = url;
    this.description = description;
  }
}

export const myBio: Bio = new Bio(
  "Frank J. Rosario",
  "Principal/Staff Software Engineer and Software/Solutions Architect",
  "https://frankrosario.com",
  "Frank J. Rosario is a Principal/Staff Software Engineer and Software/Solutions Architect."
);
