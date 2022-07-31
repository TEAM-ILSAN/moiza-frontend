import { isLocation } from '@/constants/common';
import { verifyInput } from '@/utils/verifyInput';
import { ChangeEvent, useEffect, useState } from 'react';
import StartingChatInput from '../StartingChatInput';

const Location = () => {
  const [location, setLocation] = useState({ value: '월드컵로7길 19', isValid: false });

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setLocation({ ...location, value });
  };

  const changeIsValid = (isValid: boolean) => {
    setLocation({ ...location, isValid });
  };

  useEffect(() => {
    changeIsValid(verifyInput(isLocation, location.value));
  }, [location.value]);

  return (
    <StartingChatInput
      id="location"
      value={location.value}
      title="활동 지역"
      placeHolder="활동 지역"
      isValid={location.isValid}
      onChange={changeValue}
    />
  );
};

export default Location;
