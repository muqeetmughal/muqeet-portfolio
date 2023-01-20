import { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(2020);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, [year]);

  return (
    <>
      <div className="container-fluid">
        <footer className="footer">
          <div>© {year} All Rights Reserved.</div>
          <div>
            Email:{" "}
            <a href="mailto:hello@muqeet.dev" rel="noreferrer" target="_blank">
              hello@muqeet.dev
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
