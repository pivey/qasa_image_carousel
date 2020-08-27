import styled, { createGlobalStyle, css } from 'styled-components';
import tw from 'tailwind.macro';
import LeftButton from '../components/LeftButton';
import RightButton from '../components/RightButton';

export const GlobalStyle = createGlobalStyle`
html, body {
  ${tw`
  min-h-full
  m-0 p-0
  text-black
  font-sans
  `}
  background-color: #C33E24;
  box-sizing: border-box;
}
`;

export const Container = styled.div`
  ${tw`
  max-w-screen-lg
  m-auto
  bg-green-300
  h-screen
  `}
  background-color: #CDBA85;
  position: relative;
  user-select: none;
`;

export const PhotoContainer = styled.div`
  ${tw`
  w-full
  p-4
  flex
  overflow-scroll
  bg-green-400
`}
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PhotoCard = styled.img`
  ${tw`
  w-full
  h-full
  object-cover
  mx-8
`}
  scroll-snap-align: center;
  height: 400px;
  width: 600px;

  // The display:flex; on parent restricts margin on children. you have to use a transparent border to achieve this.
  &:last-child {
    border-right: 48px solid transparent;
  }
`;

export const PhotoCountContainer = styled.div`
  ${tw`
    p-6
    w-full
    flex items-center justify-center
  `}
`;

export const PhotoCount = styled.a`
  ${tw`
    h-2 w-2
    rounded-full
    bg-white
  `};
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
  background-color: ${({ selected }) => (selected ? 'black' : 'white')};
`;

const IconStyle = css`
  height: 2.5rem;
  width: 2.5rem;
  top: ${({ top }) => top - 16}px;
  position: absolute;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;

export const LeftIcon = styled(LeftButton)`
  ${IconStyle}
  left: -4rem;
`;

export const RightIcon = styled(RightButton)`
  ${IconStyle}
  right: -4rem;
`;
