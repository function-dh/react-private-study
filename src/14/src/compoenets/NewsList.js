import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import article from '../../../13/Article';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 2rem auto 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
   const fetchData = async()=>{
     setIsLoading(true)
     try {
       const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f')
       setArticles(response.data.articles)
     } catch (e) {
       console.log(e);
     }
     setIsLoading(false)
   }
   fetchData()
  }, [])

  // 로딩중
  if(isLoading){
    return <NewsListBlock>대기 중...</NewsListBlock>
  }

  // article 값이 설정 되지 않았을 때
  if(!articles){
    return null
  }

  // articles 값이 유요할때
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
