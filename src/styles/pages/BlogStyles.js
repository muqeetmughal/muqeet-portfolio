import styled from "styled-components";

export const Grid = styled.div`
  transition: 0.55s ease-in-out;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Item = styled.div``;

export const BlogCard = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  margin-bottom: 30px;
  :hover img {
    transform: scale(1.07);
  }
`;

export const PostCoverLink = styled.a`
  position: relative;
  padding-bottom: 60%;
  display: block;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: center;
    transition: 0.4s ease-in-out;
  }
`;

export const PostDescription = styled.div`
  background: linear-gradient(159deg, var(--cardbg1) 0%, var(--cardbg2) 100%);
  padding: 30px;
  position: relative;
  bottom: 0;
  .category {
    display: inline-block;
    margin-left: auto;
    display: inline;
    background: var(--dark-black-background);
    padding: 5px 15px;
    border-radius: 15px;
    box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
    font-size: 12px;
  }
  a.title h5 {
    padding: 15px 0 10px;
  }
  .description p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 16px;
    max-height: 48px;
  }
`;
export const Link = styled.a`
  position: relative;
  text-transform: uppercase;
  font-size: 12px;
  display: inline-block;
  letter-spacing: 1.5px;
  font-weight: 700;
  margin-right: 15px;
  margin-bottom: 10px;
  color: var(--main);
  transition: 0.4s ease-in-out;
  padding-top: 10px;
`;
