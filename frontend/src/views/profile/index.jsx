import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Nav from "views/nav";
import FriendListWidget from "views/widgets/FriendListWidget";
import MyPostWidget from "views/widgets/MyPostWidget";
import PostsWidget from "views/widgets/PostsWidget";
import UserWidget from "views/widgets/UserWidget";

const Profile = () => {
    const [user, setUser] = useState(null);
    const { userId } = useParams();
    const token = useSelector((state) => state.token);
    const mine = useSelector((state) => state.user);
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

    const getUser = async () => {
        const response = await fetch(`http://localhost:8991/user/${userId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
        })
        const data = await response.json();
        setUser(data);
    }

    useEffect(() => {
        getUser()// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!user) return null

    return (
        <Box>
            <Helmet>
                <title>Profile - {`${user.firstName} ${user.lastName}`}</title>
                <meta name="description" content={`${user.firstName} ${user.lastName}`} />
            </Helmet>
            <Nav />
            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="2rem"
                justifyContent="center"

            >
                <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                    <UserWidget userId={userId} picturePath={user.picturePath} />
                    <Box m="2rem 0" />
                    <FriendListWidget userId={userId} isHim name={`${user.firstName} ${user.lastName}`} isProfileList />
                </Box>
                <Box
                    flexBasis={isNonMobileScreens ? "42%" : undefined}
                    mt={isNonMobileScreens ? undefined : "2rem"}
                >
                    <MyPostWidget picturePath={mine.picturePath} />
                    <Box m="2rem 0" />
                    <PostsWidget userId={userId} isProfile />
                </Box>
            </Box>
        </Box>
    )
}
export default Profile;