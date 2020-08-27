import styled, { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';
import SvgCheckIcon from '../components/SvgCheckIcon';

export const GlobalStyle = createGlobalStyle`
html, body {
  ${tw`
  min-h-full
  m-0 p-0
  text-black
  font-sans
  `}
  background-color: #364156;
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
  background-color: #F3F3F3;
  position: relative;
  user-select: none;
`;

export const PhotoContainer = styled.div`
  ${tw`
  w-full
  p-10
  flex
  overflow-scroll
`}
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: #f3f3f3;
`;

export const PhotoCard = styled.img`
  ${tw`
  w-full
  h-full
  object-cover
  mx-8
`}
  scroll-snap-align: center;
  height: 300px;
  width: 500px;
  border-radius: 2px;

  // The display:flex; on parent restricts margin on children. you have to use a transparent border to achieve this.
  &:last-child {
    border-right: 48px solid transparent;
  }
`;

export const PhotoCountContainer = styled.div`
  ${tw`
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
  background-color: ${({ selected }) => (selected ? '#40434E' : '#C2C2C2')};
`;

export const InformationContainer = styled.div`
  ${tw`
    w-full
    py-2 px-6
    flex
  `}
`;

export const InnerContainer = styled.div`
  ${tw`
  flex flex-col justify-center
  p-8
  `};
  width: 50%;
`;

export const KeyPointHolder = styled.div`
  ${tw`
    flex items-center
    p-4
    pl-0
  `}
`;

export const CheckIcon = styled(SvgCheckIcon)`
  ${tw`
    h-8 w-8
    mr-2
  `}
`;

export const H3 = styled.h3`
  ${tw`
  text-lg
  font-bold
  mb-2
  `}
  color: #364156;
`;

export const H2 = styled.h2`
  ${tw`
  text-2xl
  font-bold
  mb-4
  `}
  color: #82C498;
`;

export const P = styled.p`
  ${tw`
    mt-4
    text-justify
  `}
`;

export const UL = styled.ul`
  ${tw`
  py-2
  `};
  margin-bottom: -2.5rem;
`;
