import useModal from '@/hooks/useModal';
import styled from '@emotion/styled';
import { MouseEvent, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalPortalProps {
  children?: ReactNode;
}

const element = document.querySelector('#modal-root');

const ModalPortal = ({ children }: ModalPortalProps) => {
  const { closeModal } = useModal();

  const clickBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = event;
    if (target !== currentTarget) return;

    closeModal();
  };

  return createPortal(
    <>
      <Wrapper onClick={clickBackdrop}>{children}</Wrapper>
    </>,
    element
  );
};

export default ModalPortal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;
