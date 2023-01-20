import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Footer from "../components/Footer";
import { Grid } from "../styles/pages/PortfolioStyles";
import {
  Item,
  BlogCard,
  PostCoverLink,
  PostDescription,
  Link,
} from "../styles/pages/BlogStyles";

const query = `
query{
  user(username:"imsamimalik") {
    publication {
      posts(page:0) {
        title
        brief
        slug
        cuid
        coverImage
        dateUpdated
        author {
          username
        }
      }
    }
  }
}
`;

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const ApiResponse = await response.json();
    setPosts(ApiResponse.data.user.publication.posts);

    // eslint-disable-next-line no-console
    console.log(ApiResponse.data.user.publication.posts);
  };
  useEffect(() => fetchPosts(), []);

  return (
    <>
      <Helmet>
        <title>Blog - imsamimalik</title>
      </Helmet>
      <Container
        style={{
          padding: "30px",
        }}
      >
        <div className="row">
          <SectionTitle text="Blog" />
          <Grid style={{ alignItems: "flex-start" }} className="grid">
            {posts.map((post) => (
              <Item className="col-lg-6" key={post.cuid}>
                <BlogCard className="post">
                  <PostCoverLink
                    className="post-cover"
                    href={`https://imsamimalik.me/${post.slug}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={post.coverImage} alt={post.slug} />
                  </PostCoverLink>
                  <PostDescription className="post-description">
                    <div className="category mb-15">
                      <span>{post.dateUpdated.slice(0, 10)}</span>
                      {" / "}
                      <span>{post.author.username}</span>
                    </div>
                    <a
                      className="title"
                      href={`https://imsamimalik.me/${post.slug}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h5 className="">{post.title}</h5>
                    </a>
                    <div className="description">
                      <p>{post.brief}</p>
                      <Link
                        href={`https://imsamimalik.me/${post.slug}`}
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read More
                      </Link>
                    </div>
                  </PostDescription>
                </BlogCard>
              </Item>
            ))}
          </Grid>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default Blog;
