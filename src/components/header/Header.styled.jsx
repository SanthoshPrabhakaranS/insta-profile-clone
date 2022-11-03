import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: "2rem",
  padding: "1rem 0",
  [theme.breakpoints.down("sm")]: {
    gap: "1rem"
  }
}));

export const ProfileWrapper = styled(Box)(({ theme }) => ({
  flex: "1",
  height: "10rem",
  display: "grid",
  placeItems: "center",
}));

export const ProfileDetails = styled(Box)(({ theme }) => ({
  flex: "2",
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
  marginTop: "1rem",
}));

export const UserName = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  "& p": {
    fontSize: "1.2rem",
    fontWeight: "500",
    letterSpacing: ".5px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: ".5rem",
    alignItems: "flex-start"
  },
}));

export const Img = styled("img")(({ theme }) => ({
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  objectFit: "cover",
  [theme.breakpoints.down("sm")]: {
    width: "100px",
    height: "100px"
  }
}));

export const Bio = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: ".3rem",
  "& p:nth-of-type(1)": {
    fontWeight: "500",
  },
  "& p:nth-of-type(2)": {
    fontFamily: "monospace",
  },
  [theme.breakpoints.down("sm")]: {
    "& p:nth-of-type(1)": {
      fontSize: ".8rem"
    },
    "& p:nth-of-type(2)": {
      fontSize: ".7rem"
    },
  }
}));

export const Button = styled("button")(({ theme, width }) => ({
  padding: "5px 6px",
  border: "1px solid #d1d1d1",
  backgroundColor: "transparent",
  borderRadius: "4px",
  fontWeight: "600",
  fontSize: ".7rem",
  cursor: "pointer",
  width: width,
  [theme.breakpoints.down("sm")]: {
    fontSize: ".7rem"
  }
}));

export const ButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: ".5rem",
  flexWrap: "wrap"
}));

export const EditWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  width :"100%"
}));

export const Input = styled("input")(({ theme }) => ({
  height: "27px",
  width: "100%",
  outline: "none",
  padding: ".2rem",
  border: "1px solid #d1d1d1",
}));

export const TextArea = styled("textarea")(({ theme }) => ({
  width: "100%",
  outline: "none",
  padding: ".2rem",
  border: "1px solid #d1d1d1",
}));

export const Label = styled("label")(({ theme }) => ({
  padding: "5px 6px",
  border: "1px solid #d1d1d1",
  backgroundColor: "transparent",
  borderRadius: "4px",
  fontWeight: "600",
  fontSize: ".7rem",
  cursor: "pointer",
}));

export const FollowCount = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  fontSize: ".85rem",
  fontWeight: "400",
  "& span": {
    fontWeight: "600",
  },
}));
