import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  velopert: {
    name : '동현',
    description: '개발자'
  },
  gildong: {
    name : '길동',
    description: '홍길동'
  }
}

const Profile = () => {
  const params = useParams()
  const profile = data[params.username]

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <h2>{profile.description}</h2>
        </div>
      ): (
        <p>존재하지 않는 프로필 입니다</p>
      )}
    </div>
  );
};

export default Profile;
