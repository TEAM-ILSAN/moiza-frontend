import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { color } from '@/styles/theme';
import NavBar from '../Navigation/NavBar';

interface LayoutProps {
  bgColor?: string;
}

function Layout({ children, bgColor }: PropsWithChildren<LayoutProps>) {
  return (
    <StyledLayout bgColor={bgColor}>
      <Wrapper>{children}</Wrapper>
      <NavBar />
    </StyledLayout>
  );
}

const StyledLayout = styled.div<{ bgColor: string }>`
  height: calc(100vh - 6rem);
  overflow: auto;
  border: 1px solid red;
  padding: 3.6rem 2rem;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : color.primary)};
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 3.6rem 2rem 8rem;
`;

export default Layout;