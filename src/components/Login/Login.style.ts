import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const Title = styled.div`
  align-items: center;
  justify-items: center;
  justify-content: center;
`;

export const Login = styled(Box)`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  diraction: rtl;
`;
