"use client";

import React from "react";
import PropTypes from "prop-types";

interface FooterProps {
  name: string;
}

function Footer({ name }: FooterProps) {
  const year = new Date().getFullYear();
  const copyrightDisclaimer = `© ${year} ${name}. All rights reserved.`;
  return (
    <footer>
      <p aria-label={copyrightDisclaimer}>{copyrightDisclaimer}</p>
    </footer>
  );
}

Footer.propTypes = {
  name: PropTypes.string.isRequired,
};

export default React.memo(Footer);
