import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "inherit",
  borderTop: "1px solid #d1d1d1",
  position: "relative",
}));

export const Posts = styled(Box)(({ theme }) => ({
  width: "inherit",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  padding: "1rem 0",
  gap: "1rem",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    placeItems: "Center",
    padding: "1rem"
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    placeItems: "Center"
  },
}));

export const PostWrapper = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "270px",
  position: "relative",
  cursor: "pointer",
  "&:hover > .MuiBox-root": {
    display: "flex",
  },
  [theme.breakpoints.down("md")]: {
    width: "95%",
    height: "290px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    height: "300px",
  },
}));

export const Post = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

export const PostBtn = styled("label")(({ theme }) => ({
  position: "absolute",
  top: "1rem",
  right: "0",
  padding: "5px 6px",
  border: "1px solid #d1d1d1",
  backgroundColor: "transparent",
  borderRadius: "4px",
  fontWeight: "600",
  fontSize: ".7rem",
  cursor: "pointer",
}));

export const HoverWrapper = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: "center",
  alignItems: "Center",
  gap: "1rem",
  backgroundColor: "#00000036",
  position: "absolute",
  width: "100%",
  height: "100%",
  color: "#fff",
}));

export const PostIcon = styled(Box)(({ theme, like }) => ({
  "&:nth-of-type(1)": {
    color: like ? "#e21919" : "#fff",
  },
}));
