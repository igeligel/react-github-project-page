import React from 'react';
import styled from 'styled-components';

const StyledRepoDescriptionContainer = styled.div`
  line-height: 24px;
  max-width: 980px;
  width: 100%;
  display: block;
`;

const StyledRepoDescriptionLink = styled.a`
  margin-left: 0.5em;
  text-decoration: none;
  color: #0366d6;

  :hover {
    text-decoration: underline;
  }
`;

export function RepoDescriptionContainer(props) {
  return (
    <StyledRepoDescriptionContainer>
      <span>
        Ember.js - A JavaScript framework for creating ambitious web
        applications
      </span>
      <StyledRepoDescriptionLink href="http://www.emberjs.com">
        http://www.emberjs.com
      </StyledRepoDescriptionLink>
    </StyledRepoDescriptionContainer>
  );
}

export default {
  RepoDescriptionContainer,
};
