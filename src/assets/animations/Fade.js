import { keyframes } from 'styled-components';

const Fade = keyframes`
  0% { opacity: 0; filter: greyscale(100%); }
  100% { opacity: 1; filter: greyscale(0%); }
`;

export default Fade;
