import React from 'react';
import {Link, Outlet, NavLink} from 'react-router-dom'

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <PostItem />
      </ul>
    </div>
  );
};

const PostItem = () => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  }
  const postList = [1,2,3]

  return (
    postList.map((id, index) => (
      <li key={index}>
        <NavLink
          to={`/articles/${id}`}
          style={({isActive}) => (isActive ? activeStyle : undefined) }>
          게시글 {id}
        </NavLink>
      </li>
    ))
  )
}

export default Articles;
