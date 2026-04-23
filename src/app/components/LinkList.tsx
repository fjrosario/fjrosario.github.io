import {
  Link,
  getPrimaryDirectory,
  getRelativeExternalUrl,
} from "../../data/linkArray";

interface LinkListProps {
  linkArray: Link[];
}

function LinkList({ linkArray = [] }: LinkListProps) {
  return (
    <nav aria-label="External links">
      <ul>
        {linkArray.map((link) => (
          <li key={getPrimaryDirectory(link)}>
            <a
              href={getRelativeExternalUrl(getPrimaryDirectory(link))}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={link.icon} aria-hidden="true"></i>
              <span>{link.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LinkList;
