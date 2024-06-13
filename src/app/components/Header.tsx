import React from "react";
import PropTypes from "prop-types";
import { Bio } from "../../data/bio";

function Header({ name, title }: Pick<Bio, "name" | "title">) {
  return (
    <header>
      <h1 aria-label={name}>{name}</h1>
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
