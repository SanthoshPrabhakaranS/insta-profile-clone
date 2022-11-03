import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../features/postSlice";
import { Button } from "../header/Header.styled";
import { Container, ModalWrapper } from "./Modal.styled";

const Modal = ({ setOpenModal, postImg }) => {
    const dispatch = useDispatch()
    const postHandler = () => {
        dispatch(setPost({ id: Math.floor(Math.random() * 1000), postUrl: postImg }))
        setOpenModal(false)
    }
  return (
    <Container>
      <ModalWrapper>
        <Box>
          <p>Do you want to post the picture ?</p>
        </Box>
        <Box>
          <Button onClick={postHandler}>Post</Button>
          <Button onClick={() => setOpenModal(false)}>Cancel</Button>
        </Box>
      </ModalWrapper>
    </Container>
  );
};

export default Modal;
