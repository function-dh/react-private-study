import React, {useState} from 'react';
import styled from 'styled-components';

const NewItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0.5rem 0 0;
      line-height: 1.5;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`

const NewsItem = ({article}) => {
  const {title, description, url, urlToImage} = article

  return (
    <NewItemBlock>
      {urlToImage && (
        <div className={'thumbnail'}>
          <a href={url} target={'_blank'}>
            <img src={urlToImage} alt='썸네일' />
          </a>
        </div>
      )}
      <div className={'contents'}>
        <h2>
          <a href={url} target={'_blank'}>{title}</a>
        </h2>
        <p>{description}</p>
      </div>
    </NewItemBlock>
  );
};

export default NewsItem;
