import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "Center",
  alignItems: "center",
  backgroundColor: "#0000005e",
  position: "fixed",
  zIndex: "2",
  top: "0",
  left: "0",
  [theme.breakpoints.down("md")]: {
    padding: "0 1rem"
  }
}));

export const ModalWrapper = styled(Box)(({ theme }) => ({
  width: "40rem",
  height: "20rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "2rem",
  backgroundColor: "#fff",
  color: "#000",
  borderRadius: "1rem",
  fontSize: "1.3rem",
  "& :nth-of-type(2)": {
    display: "flex",
    gap: "1rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem"
  }
}));
