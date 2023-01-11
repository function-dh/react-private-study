import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
  const location = useLocation() // 쿼리스트링
  const [searchParams, setSearchParams] = useSearchParams() // 쿼리스트링 파싱

  const detail = searchParams.get('detail')
  const mode = searchParams.get('mode')

  const onToggleDetail = () => {
    setSearchParams({mode, detail: String(detail !== 'true')})
  }
  const onIncreaseMode = () => {
    const nextMode = mode === 'null' ? 1 : parseInt(mode) + 1
    setSearchParams({mode: String(nextMode), detail})
  }

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      <p>쿼리스트링 : {location.search}</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
