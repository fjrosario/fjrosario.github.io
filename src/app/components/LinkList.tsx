import { Link } from "../../data/linkArray";
import React from "react";
import PropTypes from "prop-types";

interface LinkListProps {
  linkArray: Link[];
}

const externalLinkPath: string = "out";

function LinkList({ linkArray = [] }: LinkListProps) {
  return (
    <nav aria-label="External links">
      <ul>
        {linkArray.map(({ icon, directory, title, originUrl }) => (
          <li key={originUrl}>
            <i className={icon}></i>
            <a
              href={`${externalLinkPath}/${directory[0]}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
            >
              <span>{title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

LinkList.propTypes = {
  linkArray: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LinkList;
