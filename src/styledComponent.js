import styled from 'styled-components';

export const CatList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-content:center;
`;

export const CatItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  text-align: center;
`;

export const CatImage = styled.img`
  width: 100%;
  height: 175px;
`;