import React from 'react';
import styled from 'styled-components';

const StyledRepoActionItem = styled.div`
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

export function ActionItem(props) {
  return (
    <StyledRepoActionItem>
      <StyledRepoActionItemButton>
        {props.octicon && (
          <span className={`octicon octicon-${props.octicon}`} />
        )}
        <StyledRepoActionItemButtonText>
          {props.actionText}
        </StyledRepoActionItemButtonText>
      </StyledRepoActionItemButton>
      <StyledRepoActionItemOption href={props.actionLink}>
        {props.actionValue}
      </StyledRepoActionItemOption>
    </StyledRepoActionItem>
  );
}

export default {
  ActionItem,
};
