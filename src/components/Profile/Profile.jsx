// import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <main>

            <div>
              <img className={s.img} src='https://gagadget.com/media/cache/8b/9f/8b9fed822430d4cf1906fa897df8bed9.png'/>
            </div>

            <div>
              ava discription
            </div>

            <MyPosts/>


        </main>
    )
}

export default Profile