import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../modal";
import {
  Container,
  HoverWrapper,
  Post,
  PostBtn,
  PostIcon,
  Posts,
  PostWrapper,
} from "./Body.styled";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { deletePost } from "../../features/postSlice";

const Body = () => {
  const [openModal, setOpenModal] = useState(false);
  const [like, setLike] = useState(false);
  const [postImg, setPostImg] = useState(null);
  const posts = useSelector((store) => store.post);
  const dispatch = useDispatch()
  const postHandler = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setPostImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  const likeHandler = (id) => {
    posts.filter((postId) => {
      if(postId.id === id){
        setLike(!like)
      }
    })
  };

  const removeHandler = (id) => {
    dispatch(deletePost({id}))
  };
  return (
    <Container>
      {openModal && <Modal setOpenModal={setOpenModal} postImg={postImg} />}
      <div style={{ marginBottom: "2.5rem", width: "100%" }}>
        <PostBtn htmlFor="post" onClick={() => setOpenModal(true)}>
          New post
        </PostBtn>
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        id="post"
        onChange={postHandler}
      />
      <Posts>
        { posts.length >0 ? posts.map((post) => {
          return (
            <PostWrapper key={post.id}>
              <HoverWrapper>
                <PostIcon like={like ? 1: 0} onClick={() => likeHandler(post.id)}>
                  <FavoriteOutlinedIcon />
                </PostIcon>
                <PostIcon onClick={() => removeHandler(post.id)}>
                  <CancelOutlinedIcon />
                </PostIcon>
              </HoverWrapper>
              <Post src={post.postUrl} alt="post" />
            </PostWrapper>
          );
        }) : <h4>No Posts</h4>}
      </Posts>
    </Container>
  );
};

export default Body;
