import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 70px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  justify-content: space-between;
  padding: 10px;
`;

export const Icon = styled.div`
  padding: 6px;
  border: 1px solid black;
  border-radius: 50%;
`;

export const RightCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LeftCard = styled.div`
  display: flex;
  align-items: center;
`;
