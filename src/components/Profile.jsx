import React from "react";
import './Profile.css'

const Profile = () => {
    return(
        <main className='profile'>

        <div>
          <img src='https://avatars.mds.yandex.net/get-zen_doc/163385/pub_5be3fb0e726d1b00ae9f5d71_5be45ede72909500aa1f0b40/scale_1200'/>
        </div>

        <div>
          ava discription
        </div>

        <div>
          my posts
          <div>New posts</div>

          <div>
            <div className='item'>post1</div>
            <div className='item'>post2</div>
          </div>
        </div>

        <div>
          other
        </div>

      </main>
    )
}

export default Profile