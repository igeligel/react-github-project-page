import React from 'react';
import styled from 'styled-components';

const StyledRepoTagContainer = styled.div`
  margin-top: 0.5em;
  max-width: 980px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledRepoTagList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  display: inline-block;
`;

const StyledRepoTagListItem = styled.li`
  display: inline-block;
  margin-right: 0.3em;
`;

const StyledRepoTagLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  border-radius: 3px;
  font-size: 12px;
  padding: 0.3em 0.9em;
  background-color: #f1f8ff;
  color: #0366d6;

  :hover {
    text-decoration: none;
  }
`;

export const RepoTagContainer = (props) => {
  return (
    <StyledRepoTagContainer>
      <StyledRepoTagList>
        <StyledRepoTagListItem>
          <StyledRepoTagLink href="">ember</StyledRepoTagLink>
        </StyledRepoTagListItem>
        <StyledRepoTagListItem>
          <StyledRepoTagLink href="">javascript</StyledRepoTagLink>
        </StyledRepoTagListItem>
      </StyledRepoTagList>
    </StyledRepoTagContainer>
  );
};

export default {
  RepoTagContainer,
};
