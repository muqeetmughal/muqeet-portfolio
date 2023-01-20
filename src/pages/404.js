import Container from "../components/ui/Container";
import { OrderNow } from "../styles/pages/HomeStyles";

const Custom404 = () => (
  <Container
    style={{ height: "91.5vh", display: "grid", placeItems: "center" }}
  >
    <article>
      <h1 style={{ fontSize: "100px" }}>404</h1>
      <h3 style={{ textAlign: "center" }}>PAGE NOT FOUND!</h3>
      <OrderNow to="/">
        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: "var(--main)",
            cursor: "pointer",
          }}
        >
          Back to Home
        </p>
      </OrderNow>
    </article>
  </Container>
);
export default Custom404;
