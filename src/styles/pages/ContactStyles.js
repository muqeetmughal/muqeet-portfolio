import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  padding: 0 30px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const BoxConainer = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Title = styled.h4`
  position: relative;
  margin-bottom: 30px;
  max-width: 78%;
`;

export const Box = styled.div`
  background: linear-gradient(159deg, var(--cardbg1) 0%, var(--cardbg2) 100%);
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  padding: 25px;
  margin-bottom: 30px;
  transition: 0.55s ease-in-out;
  width: 100%;
`;

export const Table = styled.div`
  color: var(--dark-global-text);
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style-type: none;

      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
      strong {
        font-size: 13px;
        font-weight: 400;
        color: var(--dark-white);
        line-height: 1.7;
      }
    }
  }
`;
