import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 5px;
  height: 100vh;
`;

export const TopCard = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f8f8ff;
  align-items: center;
  height: 10%;
  padding: 10px;
  position: relative;
`;

export const Icon = styled.div`
  padding: 6px;
  border: 1px solid black;
  border-radius: 50%;
`;
