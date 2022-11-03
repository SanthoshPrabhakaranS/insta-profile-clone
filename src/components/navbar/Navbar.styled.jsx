import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const Container = styled(Box)(({ theme }) => ({
  flex: ".5",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  fontWeight: "400",
  borderRight: "1px solid #d1d1d1",
  [theme.breakpoints.down("md")]: {
    flex: "0",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    height: "7vh"
  },
}));

export const Logo = styled(Box)(({ theme }) => ({
  padding: "0 10px",
  [theme.breakpoints.down("md")]: {
    padding: "0",
  },
}));

export const ImgMobile = styled("img")(({ theme }) => ({
  width: "20px",
  height: "20px",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    margin: "0 auto"
  },
  [theme.breakpoints.up("md")]: {
    display: "none"
  },
  [theme.breakpoints.down("sm")]: {
    display: "none"
  },
}));

export const Img = styled("img")(({ theme }) => ({
  width: "100px",
  height: "60px",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "none"
  },
  [theme.breakpoints.up("md")]: {
    display: "flex"
  },
}));

export const NavBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  width: "100%",
  padding: "10px",
  cursor: "pointer",
  fontSize: ".9rem",
  "&:hover": {
    backgroundColor: "#f8f6f6",
    borderRadius: "1.1rem",
    margin: "0 auto"
  },
  [theme.breakpoints.down("md")]: { 
  padding: "10px 0",
    "& p": {
      display: "none",
      width: "inherit"
    },
    "&:hover": {
      backgroundColor: "initial",
      borderRadius: "none",
    },
  },
}));

export const Profile = styled("img")(({ theme }) => ({
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  objectFit: "cover"
}));

