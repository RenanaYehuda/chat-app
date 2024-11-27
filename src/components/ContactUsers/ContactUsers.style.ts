import { Button } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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

export const Title = styled.div``;

export const TextButton = styled.div`
  margin: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  color: primary;
`;

export const BottomCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
`;
