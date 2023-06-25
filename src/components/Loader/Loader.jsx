import { Wrapper } from './Loader.styled';
import { Oval } from 'react-loader-spinner';

export function Loader() {
  return (
    <Wrapper>
      <Oval
        ariaLabel="loading-indicator"
        height={40}
        width={40}
        strokeWidth={5}
        color="orange"
        secondaryColor="#ccc"
      />
    </Wrapper>
  );
}