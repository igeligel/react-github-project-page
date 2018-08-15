import React from 'react';
import styled from 'styled-components';

const StyledFileNavButtonTextMain = styled.span`
  font-weight: 600;
`;

export const FileNavButtonTextMain = ({ text }) => {
  return <StyledFileNavButtonTextMain>{text}</StyledFileNavButtonTextMain>;
};

export default {
  FileNavButtonTextMain,
};
