// import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return(

        <div className={s.posts}>
          My posts

            <Post message="Hi, Bro" count='10' />
            <Post message="Welcome to Hell" count='5' />
            <Post/>
            <Post/>
            <Post/>

        </div>


    )
}

export default MyPosts