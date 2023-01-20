import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../utils/firebase";
import Footer from "../components/Footer";
import { SectionTitle } from "../styles/pages/HomeStyles";
import Container from "../components/ui/Container";
import { Grid, Item, Link, RightFrame } from "../styles/pages/PortfolioStyles";

const Portfolio = () => {
  const [web, setWeb] = useState([]);
  const [shown, setShown] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    document.querySelectorAll("a.link").forEach((a) => {
      a.classList.remove("active");
    });
    e.target.classList.add("active");
    setShown(
      web.filter(
        (item) =>
          item.framework.toLowerCase() === e.target.innerText.toLowerCase()
      )
    );
  };

  const handleAllClick = (e) => {
    e.preventDefault();
    document.querySelectorAll("a.link").forEach((a) => {
      a.classList.remove("active");
    });
    e.target.classList.add("active");
    setShown(web);
  };

  useEffect(() => {
    async function fetchProjects() {
      const queryItems = query(collection(db, "all"), orderBy("id", "asc"));
      const items = await getDocs(queryItems);
      items.forEach((item) => {
        setWeb((web) => [...web, item.data()]);
        setShown((shown) => [...shown, item.data()]);
      });
    }
    fetchProjects();
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio - imsamimalik</title>
      </Helmet>
      <Container
        style={{
          padding: "30px",
        }}
      >
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle>
              <div className="title-frame">
                <h4 className="title-h">
                  <span> Portfolio </span>
                </h4>
              </div>
              <RightFrame className="right-frame">
                <div className="filter">
                  <Link
                    onClick={handleAllClick}
                    href="#"
                    data-filter="*"
                    className="link active"
                  >
                    All Categories
                  </Link>
                  <Link onClick={handleClick} href="#" className="link">
                    WordPress
                  </Link>
                  <Link onClick={handleClick} href="#" className="link">
                    React
                  </Link>
                  <Link
                    onClick={handleClick}
                    href="#"
                    data-filter=".category-drawings"
                    className="link"
                  >
                    Misc.
                  </Link>
                </div>
              </RightFrame>
            </SectionTitle>
          </div>
          <Grid>
            {shown.map((item) => (
              <Item
                key={item.id}
                className={`grid-item ${item.framework}`.toLowerCase()}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-item-frame"
                >
                  <img src={item.imgUrl} alt={item.title} />
                </a>
                <div className="item-description">
                  <h5 className="mb-15">{item.title}</h5>
                  <div className="mb-15">{item.description}</div>
                </div>
              </Item>
            ))}
          </Grid>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Portfolio;
