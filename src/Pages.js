import { Route, Switch, Redirect } from "wouter";
import loadable from "@loadable/component";
const Contact = loadable(() => import("./pages/Contact"));
const About = loadable(() => import("./pages/About"));
const Portfolio = loadable(() => import("./pages/Portfolio"));
const Home = loadable(() => import("./pages/Home"));
const Login = loadable(() => import("./pages/Login"));
const Blog = loadable(() => import("./pages/Blog"));
const Custom404 = loadable(() => import("./pages/404"));

const Pages = () => {
  return (
    <div className="app-content">
      <div className="curtain"></div>
      <div className="top-bg">
        <div className="bg-overlay"></div>
      </div>
      <Switch>
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/login" exact component={Login} />
        {<Route path="/blog" exact component={Blog} />}
        <Route path="/" exact component={Home} />
        <Route path="/404" component={Custom404} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
};
export default Pages;
