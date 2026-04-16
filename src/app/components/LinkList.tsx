import { Link, getRelativeExternalUrl } from "../../data/linkArray";

interface LinkListProps {
  linkArray: Link[];
}

function LinkList({ linkArray = [] }: LinkListProps) {
  return (
    <nav aria-label="External links">
      <ul>
        {linkArray.map(({ icon, directories, title }) => (
          <li key={directories[0]}>
            <a
              href={getRelativeExternalUrl(directories[0])}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={icon} aria-hidden="true"></i>
              <span>{title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LinkList;
