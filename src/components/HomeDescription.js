import React from 'react';
import PropTypes from 'prop-types';
import {
  InformationContainer,
  InnerContainer,
  P,
  H2,
  H3,
  UL,
  CheckIcon,
  KeyPointHolder,
} from '../styles/index';

const HomeDescription = ({ selectedInfo }) => (
  <InformationContainer>
    {selectedInfo && (
      <>
        <InnerContainer>
          <H2>{selectedInfo?.title}</H2>
          <H3>{selectedInfo?.address}</H3>
          <P>{selectedInfo?.description}</P>
        </InnerContainer>
        <InnerContainer>
          <H3>Stand out points about the property:</H3>
          <UL>
            {selectedInfo?.keyPoints.map(point => (
              <KeyPointHolder key={point}>
                <CheckIcon />
                <li>{point}</li>
              </KeyPointHolder>
            ))}
          </UL>
        </InnerContainer>
      </>
    )}
  </InformationContainer>
);

HomeDescription.propTypes = {
  selectedInfo: PropTypes.shape({
    address: PropTypes.string,
    description: PropTypes.string,
    keypPints: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }).isRequired,
};

export default HomeDescription;
