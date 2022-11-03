import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const Container = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "row",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse"
  }
}));
