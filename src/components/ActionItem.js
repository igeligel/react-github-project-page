import React from 'react';
import styled from 'styled-components';

import { ActionItemButton } from './ActionItemButton';
import { ActionItemOption } from './ActionItemOption';

const StyledActionItem = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #24292e;
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 3px;

  :not(:first-child) {
    margin-left: 10px;
  }
`;

export const ActionItem = (props) => {
  return (
    <StyledActionItem>
      <ActionItemButton {...props} />
      <ActionItemOption {...props} />
    </StyledActionItem>
  );
};

export default {
  ActionItem,
};
