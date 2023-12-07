import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 5px solid #ccc;

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
`;
