import styled from "styled-components";

export const ProfileContainer = styled.div``;

export const Heading = styled.h3``;

export const Wrapper = styled.div`
    margin: 100px auto;
    width: 100%;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 760px) {
    }
`;
export const ProfileDetailsContainer = styled.div`
    margin: 2%;
`;
export const BlogPostContainer = styled.div`
    margin: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const CommentContainer = styled.div`
    flex: 1;
    background-color: black,
    flex-direction: row;
    margin-bottom: -20%;
    
`;
export const CommentAmountContainer = styled.div`
    flex: 1;
    background-color: #fff,
    flex-direction: row;
    zIndex: 2;
`;
export const BlogCard = styled.div`
    margin: 1%;
    border-color: #62f56c;
    border-width: 5px;
    border-style: solid;
    width: 40%;
    height: 350px;
    border-radius: 5%;
    overflow: hidden;
`;
export const UserImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin-top: -5%;
    margin-inline: 5% 5%;
    object-fit: cover;
`;
export const BlogCoverImage = styled.img`
    width: 100%;
    height: 90%;
    border-radius: 5%;
    flex: 1;
    margin-bottom: -20%;
`;
export const UserBanner = styled.img`
    width: 100%;
    object-fit: cover;
    height: 250px;
    margin-top: -10%;
`;
export const UserInfo = styled.div`
    padding: 2%
`;

export const HeaderSection = styled.div`
    display: flex;
    flex-direction: row;
`;
export const HeaderContainer = styled.div``;

export const SkillLevelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
`;

export const SkillLevels = styled.div`
    display: flex;
`;

export const SkillLevel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    background: #080a10;
    border: #4cc23e 1px solid;
    height: 100px;
    width: 200px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        scale: 1.05;
        color: #4cc23e;
    }
`;
