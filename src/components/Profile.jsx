import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return(
        <main className={s.profile}>

        <div className={s.img}>
          <img src='https://gagadget.com/media/cache/8b/9f/8b9fed822430d4cf1906fa897df8bed9.png'/>
        </div>

        <div>
          ava discription
        </div>

        <div>
          My posts
          <div>New posts</div>

          <div>
            <div className={s.item}>post1</div>
            <div className={s.item}>post2</div>
          </div>
        </div>

        <div>
          Other
        </div>

      </main>
    )
}

export default Profile