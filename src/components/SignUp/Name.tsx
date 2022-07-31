import { isName } from '@/constants/common';
import { verifyInput } from '@/utils/verifyInput';
import { ChangeEvent, useEffect, useState } from 'react';
import StartingChatInput from '../StartingChatInput';
import { userInfoMock } from './__mocks__/userInfoMock';

const Name = () => {
  const [name, setName] = useState({ value: userInfoMock.user_info.properties.nickname, isValid: false });

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setName({ ...name, value });
  };

  const changeIsValid = (isValid: boolean) => {
    setName({ ...name, isValid });
  };

  useEffect(() => {
    changeIsValid(verifyInput(isName, name.value));
  }, [name.value]);

  return (
    <StartingChatInput
      id="name"
      value={name.value}
      title="이름"
      placeHolder="이름"
      isValid={name.isValid}
      onChange={changeValue}
    />
  );
};

export default Name;
