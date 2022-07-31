import Button from '@/components/Button';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

interface SignUpSteps {
  1: string;
  2: string;
  3: string;
}

const signUpSteps: SignUpSteps = { 1: 'name', 2: 'gender', 3: 'location' };
const totalStep = Object.keys(signUpSteps).length;

const SignUp = () => {
  const { step } = useParams();
  const navigate = useNavigate();

  const goToStep = (number: number) => {
    if (number > totalStep) {
      return;
    }

    navigate(signUpSteps[number as keyof SignUpSteps]);
  };

  useEffect(() => {
    if (!step) {
      navigate('name');
    }
  }, []);

  return (
    <>
      <StepWrapper>
        {new Array(totalStep).fill(null).map((element, index) => {
          const currentStep = index + 1;
          return (
            <Step key={currentStep} onClick={() => goToStep(currentStep)}>
              {currentStep}
            </Step>
          );
        })}
      </StepWrapper>
      <Outlet />
      <Button text="다음" isDisabled={false} onClick={() => goToStep(Number(step) + 1)} />
    </>
  );
};

export default SignUp;

const StepWrapper = styled.div`
  display: flex;
`;

const Step = styled.button`
  padding: 10px;
  background: black;
  color: white;
`;
