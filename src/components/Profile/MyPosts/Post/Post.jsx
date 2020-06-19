import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://avatarko.ru/img/kartinka/2/zhivotnye_kot_galstuk_1881.jpg" />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}


export default Post;