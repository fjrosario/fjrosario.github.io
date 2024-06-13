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
   * A display string that combines the name and title.
   */
  public get fullTitle(): string {
    return `${this.name} - ${this.title}`;
  }

  /**
   *
   */
  constructor(name: string, title: string) {
    this.name = name;
    this.title = title;
  }
}

export const myBio: Bio = new Bio(
  "Frank J. Rosario",
  "Principal/Staff Software Engineer and Software/Solutions Architect"
);
