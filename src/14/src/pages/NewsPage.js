import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../compoenets/Categories';
import NewsList from '../compoenets/NewsList';

const NewsPage = () => {
  const params = useParams();
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = params.category || 'all';

  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
