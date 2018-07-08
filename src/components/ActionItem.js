import React from 'react';
import styled from 'styled-components';

import { ActionItemButton } from './ActionItemButton';

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

const StyledRepoActionItemOption = styled.a`
  cursor: pointer;
  font-weight: 600;
  line-height: 20px;
  box-sizing: border-box;
  padding: 3px 10px;
  background-color: white;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  text-decoration: none;

  :link {
    color: #24292e;
  }

  :visited {
    color: #24292e;
  }

  :hover {
    color: #24292e;
  }

  :active {
    color: #24292e;
  }

  :hover {
    text-decoration: none;
  }
`;

export const ActionItem = (props) => {
  return (
    <StyledActionItem>
      <ActionItemButton {...props} />
      <StyledRepoActionItemOption href={props.actionLink}>
        {props.actionValue}
      </StyledRepoActionItemOption>
    </StyledActionItem>
  );
};

export default {
  ActionItem,
};
