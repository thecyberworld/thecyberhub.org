import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs, reset } from "../../features/blogs/blogSlice";
import Spinner from "../Other/MixComponents/Spinner/Spinner";
import { Wrapper } from "../Dashboard/Profile/ProfileElements";
import BlogCard from "./BlogCard/BlogCard";
import { AllBlogs, BlogsComponent, MiddleContainer } from "./BlogsElements";
import { encodeURL } from "./util";
import { Link } from "react-router-dom";
import RightBlogSidebar from "./BlogSidebar/RightBlogSidebar";
import LeftBlogSidebar from "./BlogSidebar/LeftBlogSidebar";
import { RouterLink } from "../Tools/ToolsElements";

const Blogs = () => {
    const dispatch = useDispatch();
    const { blogs, isLoading, isError, message } = useSelector((state) => state.blogs);

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        dispatch(getAllBlogs());

        return () => {
            dispatch(reset());
        };
    }, [dispatch, isError, message]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <Wrapper>
            Temporarily Displaying this Create blog button <br />
            <RouterLink to={"/dashboard/blogs/create"}> Create Blog </RouterLink>
            <br />
            {/* <h1> Blogs </h1> */}
            <BlogsComponent>
                <LeftBlogSidebar />
                <MiddleContainer>
                    {blogs && blogs?.length > 0 ? (
                        <>
                            <AllBlogs>
                                {blogs.map((blog, id) => (
                                    <Link key={id} className={"styles"} to={{ pathname: `${encodeURL(blog?.title)}` }}>
                                        <BlogCard key={blog?._id} blog={blog} />
                                    </Link>
                                ))}
                            </AllBlogs>
                        </>
                    ) : (
                        <>
                            <h3>There are no blogs to display</h3>
                            <RouterLink to={"/dashboard/blogs/create"}> Create Blog </RouterLink>
                        </>
                    )}
                </MiddleContainer>
                <RightBlogSidebar />
            </BlogsComponent>
        </Wrapper>
    );
};

export default Blogs;
