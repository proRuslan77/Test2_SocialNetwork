// import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return(

            <div className={s.item}>
                <img src="https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg" alt=""/>
                {props.message}
                <div>
                    <span>like {props.count} </span>
                </div>
            </div>

    )
}

export default Post