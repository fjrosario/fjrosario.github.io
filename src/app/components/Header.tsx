import React from "react";
import PropTypes from "prop-types";
import { Bio } from "../../data/bio";

function Header({ name, title }: Pick<Bio, "name" | "title">) {
  return (
    <header className="h-card">
      <a
        className="u-url"
        href="https://frankrosario.com"
        rel="noopener noreferrer"
      >
        <h1 className="p-name" aria-label={name}>
          {name}
        </h1>
      </a>
      <h2>
        <em>{title}</em>
      </h2>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default React.memo(Header);
