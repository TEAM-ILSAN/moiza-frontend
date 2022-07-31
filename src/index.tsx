import { css, Global, ThemeProvider } from '@emotion/react';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import NavBar from './components/Navigation/NavBar';
import Gender from './components/SignUp/Gender';
import Location from './components/SignUp/Location';
import Name from './components/SignUp/Name';
import ChatRoom from './pages/ChatRoom';
import ChatRoomDescription from './pages/ChatRoomDescription';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import SignUp from './pages/SignUp';
import baseTheme from './styles/baseTheme';
import GlobalStyles from './styles/globalStyles';
import Playground from './pages/Playground';

function RootWithCallbackAfterRender() {
  return (
    <React.Fragment>
      <ThemeProvider theme={baseTheme}>
        <Global
          styles={css`
            ${GlobalStyles}
          `}
        />
        <RecoilRoot>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="playground" element={<Playground />} />
              <Route path="chatroom" element={<ChatRoom />} />
              <Route path="starting-chatroom" element={<ChatRoomDescription />} />
              <Route path="signup" element={<SignUp />}>
                <Route path="name" element={<Name />} />
                <Route path="gender" element={<Gender />} />
                <Route path="location" element={<Location />} />
              </Route>
              <Route path="mypage" element={<MyPage />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </ThemeProvider>
    </React.Fragment>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RootWithCallbackAfterRender />);

if (module.hot) {
  module.hot.accept();
}
