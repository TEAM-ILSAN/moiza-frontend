import ModalPortal from '@/components/ModalPortal';
import StartingChatInput from '@/components/StartingChatInput';
import useModal from '@/hooks/useModal';
import { ChangeEvent, useState } from 'react';

const categories = [
  '커피챗',
  '운동',
  '산책',
  '반려동물',
  '취미모임',
  '게임',
  '스터디',
  '술자리',
  '밥친구',
  '커리어',
  '동네정보',
  '재테크',
];

const ChatRoomDescription = () => {
  const [inputs, setInputs] = useState({ category: '', name: '', description: '' });

  const { openModal, closeModal } = useModal();

  const showSelectableModal = () => {
    openModal({
      key: 'selectableModal',
      props: {
        title: '주제',
      },
    });
  };

  const changeInput = (event: ChangeEvent) => {
    const { id, value } = event.target as HTMLInputElement;
    setInputs({ ...inputs, [id]: value });
  };

  const selectCategory = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setInputs({ ...inputs, category: value });
    closeModal();
  };

  return (
    <>
      <StartingChatInput
        id="category"
        value={inputs.category}
        title="주제"
        readOnly
        isSelectable
        onClick={showSelectableModal}
      />
      <StartingChatInput id="name" value={inputs.name} title="방 이름" placeHolder="방 이름" onChange={changeInput} />
      <StartingChatInput
        id="description"
        value={inputs.description}
        title="방 설명"
        placeHolder="어떤 방인지 알려주세요"
        onChange={changeInput}
      />
      <ModalPortal>
        {categories.map((category, index) => (
          <li key={index}>
            <label htmlFor={category}>
              <input type="radio" name="category" value={category} onChange={selectCategory} />
              {category}
            </label>
          </li>
        ))}
      </ModalPortal>
    </>
  );
};

export default ChatRoomDescription;