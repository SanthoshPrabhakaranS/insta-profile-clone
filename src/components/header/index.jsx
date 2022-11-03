import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Bio,
  Button,
  ButtonWrapper,
  Container,
  EditWrapper,
  FollowCount,
  Img,
  Input,
  Label,
  ProfileDetails,
  ProfileWrapper,
  TextArea,
  UserName,
} from "./Header.styled";
import { editUser } from "../../features/profileSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  document.title = `${user.userName} (Instagram)`
  const postCount = useSelector((store) => store.post)
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [userName, setUserName] = useState(edit ? user.userName : user.userName);
  const [name, setName] = useState(edit ? user.name : user.name);
  const [bio, setBio] = useState(edit ? user.bio : user.bio);
  const [image, setImage] = useState(null);

  const onImageChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const editHandler = () => {
    dispatch(editUser({ userName, bio, name, image }));
    setEdit(false);
  };

  return (
    <Container>
      <ProfileWrapper>
        <Img src={user.image} alt="profile" />
      </ProfileWrapper>
      <ProfileDetails>
        {!edit ? (
          <>
            <UserName>
              <p>{user.userName}</p>
              <Button onClick={() => setEdit(true)}>Edit Profile</Button>
            </UserName>
            <FollowCount>
              <p> <span>{postCount.length}</span> posts</p>
              <p><span>100</span> followers</p>
              <p><span>200</span> following</p>
            </FollowCount>
            <Bio>
              <p>{user.name}</p>
              <p>{user.bio}</p>
            </Bio>
          </>
        ) : (
          <EditWrapper>
            <Input
              type="text"
              placeholder="New username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <Input
              type="text"
              placeholder="New profile name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextArea
              type="text"
              placeholder="New bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            ></TextArea>
            <ButtonWrapper>
              <Button width="3rem" onClick={editHandler}>
                Save
              </Button>
              <Label htmlFor="inputTag">Change profile photo</Label>
              <input
                style={{
                  display: "none",
                }}
                id="inputTag"
                type="file"
                onChange={onImageChange}
              ></input>
              <Button width="5rem" onClick={() => setEdit(false)}>
                No changes
              </Button>
            </ButtonWrapper>
          </EditWrapper>
        )}
      </ProfileDetails>
    </Container>
  );
};

export default Header;
