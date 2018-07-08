import React from 'react';
import styled from 'styled-components';
import { ActionItem } from './ActionItem';

const StyledRepoHeader = styled.div`
  margin-top: 16px;
  background-color: #fafbfc;
  max-width: 980px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledRepoInfoContainer = styled.div`
  font-size: 18px;
  color: #959da5;
`;

const StyledRepoActionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLink = `a:link {
  color: #0366d6;
  text-decoration: none;
}

a:visited {
  color: #0366d6;
  text-decoration: none;
}

a:hover {
  color: #0366d6;
  text-decoration: underline;
}

a:active {
  color: #0366d6;
  text-decoration: none;
}`;

const StyledRepoInfoHeadingFirst = styled.h1`
  display: inline;
  font-size: 18px;
  font-weight: 400;

  ${StyledLink};
`;

const StyledRepoInfoName = styled.a`
  font-weight: 600;

  color: #0366d6;
  text-decoration: none;
`;

export function RepoHeader(props) {
  return (
    <StyledRepoHeader>
      <StyledRepoInfoContainer>
        <span className="octicon octicon-repo" />
        <StyledRepoInfoHeadingFirst>
          <a href={`https://github.com/${props.user}`}>{props.user}</a>
        </StyledRepoInfoHeadingFirst>
        <span> / </span>
        <StyledRepoInfoName href="https://github.com/emberjs/ember.js">
          ember.js
        </StyledRepoInfoName>
      </StyledRepoInfoContainer>
      <StyledRepoActionContainer>
        <ActionItem
          octicon="eye"
          actionText="Unwatch"
          actionLink="https://github.com/emberjs/ember.js/watchers"
          actionValue="1,048"
        />
        <ActionItem
          octicon="star"
          actionText="Star"
          actionLink="https://github.com/emberjs/ember.js/stargazers"
          actionValue="18,372"
        />
        <ActionItem
          actionText="Fork"
          actionLink="https://github.com/emberjs/ember.js/network"
          actionValue="3,904"
        />
      </StyledRepoActionContainer>
    </StyledRepoHeader>
  );
}

export default {
  RepoHeader,
};
