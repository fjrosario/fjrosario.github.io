import {
  Link,
  getPrimaryDirectory,
  getRelativeExternalUrl,
} from "../../data/linkArray";
import LinkIcon from "./LinkIcon";

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
              <LinkIcon icon={link.icon} />
              <span className="link-title">{link.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LinkList;
