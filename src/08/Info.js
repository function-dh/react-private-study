import React from 'react';
import useInput from "./useInput";

const Info = () => {
  const [state, onChange] = useInput({
    name: '',
    nickname: ''
  })
  const { name, nickname } = state

  return (
    <div>
      <div>
        <input name="name" type="text" value={name} onChange={onChange}/>
        <input name="nickname" type="text" value={nickname} onChange={onChange}/>
      </div>
      <div>
        이름 : {name}
        <br />
        닉네임 : {nickname}
      </div>
    </div>
  );
};

export default Info;
