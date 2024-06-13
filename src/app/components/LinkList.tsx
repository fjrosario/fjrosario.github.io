import { Link } from "../../data/linkArray";
import React from "react";
import PropTypes from "prop-types";

interface LinkListProps {
  linkArray: Link[];
}

function LinkList({ linkArray = [] }: LinkListProps) {
  return (
    <nav aria-label="External links">
      <ul>
        {linkArray.map(({ icon, url, title }) => (
          <li key={url}>
            <i className={icon}></i>
            <a
              href={url}
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
