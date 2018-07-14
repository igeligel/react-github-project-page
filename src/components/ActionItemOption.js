import React from 'react';
import styled from 'styled-components';

const StyledActionItemOption = styled.a`
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

export const ActionItemOption = (props) => {
  return (
    <StyledActionItemOption href={props.actionLink}>
      {props.actionValue}
    </StyledActionItemOption>
  );
};

export default {
  ActionItemOption,
};
