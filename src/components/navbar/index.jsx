import React from "react";
import { Container, Img, ImgMobile, Logo, NavBox, Profile } from "./Navbar.styled";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useSelector } from "react-redux";

const Navbar = () => {
    const navProfile = useSelector((store) => store.user)
  return (
    <Container>
      <Logo>
        <Img
          src="https://blackhillsballoons.com/wp-content/uploads/2021/01/Instagram-Logo.png"
          alt="logo"
        />
        <ImgMobile
          src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
          alt="logo"
        />
      </Logo>
      <NavBox>
        <HomeOutlinedIcon />
        <p>Home</p>
      </NavBox>
      <NavBox>
        <SearchOutlinedIcon />
        <p>Search</p>
      </NavBox>
      <NavBox>
        <ExploreOutlinedIcon />
        <p>Explore</p>
      </NavBox>
      <NavBox>
        <SendOutlinedIcon />
        <p>Messages</p>
      </NavBox>
      <NavBox>
        <FavoriteBorderOutlinedIcon />
        <p>Notifications</p>
      </NavBox>
      <NavBox>
        <Profile
          src={navProfile.image}
          alt="profile"
        />
        <p>Profile</p>
      </NavBox>
    </Container>
  );
};

export default Navbar;
