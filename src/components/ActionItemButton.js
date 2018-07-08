import React from 'react';
import styled from 'styled-components';

const StyledRepoActionItemButton = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(27, 31, 35, 0.2);
  line-height: 20px;
  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
  box-sizing: border-box;
  border-top-left-radius: 3px;
  padding: 3px 10px;
`;

const StyledRepoActionItemButtonText = styled.span`
  font-weight: 600;
  margin-left: 0.3em;
`;

export function ActionItemButton(props) {
  // eslint-disable-next-line
  console.log(props);
  return (
    <StyledRepoActionItemButton>
      {props.octicon && <span className={`octicon octicon-${props.octicon}`} />}
      <StyledRepoActionItemButtonText>
        {props.actionText}
      </StyledRepoActionItemButtonText>
    </StyledRepoActionItemButton>
  );
}

export default {
  ActionItemButton,
};
