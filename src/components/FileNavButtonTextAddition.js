import React from 'react';
import styled from 'styled-components';

const StyledFileNavButtonTextAddition = styled.span`
  font-weight: 500;
  opacity: 0.75;
`;

export const FileNavButtonTextAddition = () => {
  return (
    <StyledFileNavButtonTextAddition>Branch:</StyledFileNavButtonTextAddition>
  );
};

export default {
  FileNavButtonTextAddition,
};
