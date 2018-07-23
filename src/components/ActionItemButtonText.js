import React from 'react';
import styled from 'styled-components';

const StyledActionItemButtonText = styled.span`
  font-weight: 600;
  margin-left: 0.3em;
`;

export const ActionItemButtonText = ({ actionText }) => {
  return <StyledActionItemButtonText>{actionText}</StyledActionItemButtonText>;
};

export default {
  ActionItemButtonText,
};
