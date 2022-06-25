import React, { FormEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import CommonTitle from '@/components/Typography/Title';
import ChatRoomRow from '@/components/ChatRoom/ChatRoomRow';
import Layout from '@/components/Layout';
import ChatForm from '@/components/ChatRoom/ChatForm';

import { io, Socket } from 'socket.io-client';
import { ServerToClientEvents, ClientToServerEvents } from '../socket/types';
import { Message } from '../socket/utils/messages';
import { User } from '../socket/utils/users';

const END_POINT = 'http://127.0.0.1:3000';

function ChatRoom() {
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(END_POINT);

  const [inputVal, setInputVal] = useState('');
  const [response, setResponse] = useState<Message>();
  const inputHandler = ({ target, currentTarget }: React.FormEvent<HTMLInputElement>) => {
    setInputVal(currentTarget.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    socket.emit('chatMessage', inputVal);
  };

  useEffect(() => {
    socket.on('message', (data: Message) => {
      console.log('data');
      setResponse(data);
    });
  }, []);

  return (
    <Layout>
      <StyledChatRoom>
        <ChatWrapper>
          <CommonTitle>채팅방 화면</CommonTitle>
          <ChatRoomRow imgSrc="https://cdn.pixabay.com/photo/2022/01/29/06/07/couple-6976409_1280.jpg" isMyChat={false}>
            {inputVal}
          </ChatRoomRow>
          <ChatRoomRow imgSrc="https://cdn.pixabay.com/photo/2022/01/29/06/07/couple-6976409_1280.jpg" isMyChat={true}>
            아아앋가ㅓ다거
          </ChatRoomRow>
        </ChatWrapper>
        <ChatForm inputHandler={inputHandler} submitHandler={submitHandler} />
      </StyledChatRoom>
    </Layout>
  );
}

const StyledChatRoom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.primary};
  height: 100%;
`;

const ChatWrapper = styled.div``;

export default ChatRoom;
