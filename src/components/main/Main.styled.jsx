import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const Container = styled(Box)(({ theme }) => ({
  flex: "3",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  overflowY: "auto"
}));

export const MainWrapper = styled(Box)(({ theme }) => ({
  minWidth: "50rem",
  height: "inherit",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  [theme.breakpoints.down("sm")]: {
    width: "100%"
  }
}));
