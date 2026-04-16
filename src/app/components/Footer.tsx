interface FooterProps {
  name: string;
}

function Footer({ name }: FooterProps) {
  const year = new Date().getFullYear();
  const copyrightDisclaimer = `© ${year} ${name}. All rights reserved.`;

  return (
    <footer>
      <p>{copyrightDisclaimer}</p>
    </footer>
  );
}

export default Footer;
