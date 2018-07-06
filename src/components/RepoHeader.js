import React from 'react';
import styled from 'styled-components';
import { RepoActionItem } from './RepoActionItem';

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

const StyledRepoInfoHeadingFirst = styled.h1`
  display: inline;
  font-size: 18px;
  font-weight: 400;
`;

const StyledRepoInfoName = styled.a`
  font-weight: 600;
`;

export function RepoHeader(props) {
  return (
    <StyledRepoHeader>
      <StyledRepoInfoContainer>
        <span className="octicon octicon-repo" />
        <StyledRepoInfoHeadingFirst>
          <a href={`https://github.com/${props.user}`}>{props.user}</a>
        </StyledRepoInfoHeadingFirst>
        <span>/</span>
        <StyledRepoInfoName href="https://github.com/emberjs/ember.js">
          ember.js
        </StyledRepoInfoName>
      </StyledRepoInfoContainer>
      <StyledRepoActionContainer>
        <RepoActionItem
          octicon="eye"
          actionText="Unwatch"
          actionLink="https://github.com/emberjs/ember.js/watchers"
          actionValue="1,048"
        />
        <div className="repo-action__item">
          <button className="repo-action__item-button">
            <span className="octicon octicon-star" />
            <span className="repo-action__item-button-text">Star</span>
          </button>
          <a
            className="repo-action__item-option"
            href="https://github.com/emberjs/ember.js/stargazers"
          >
            18,372
          </a>
        </div>
        <div className="repo-action__item">
          <button className="repo-action__item-button">
            <span className="octicon octicon-repo-forked" />
            <span className="repo-action__item-button-text">Fork</span>
          </button>
          <a
            className="repo-action__item-option"
            href="https://github.com/emberjs/ember.js/network"
          >
            3,904
          </a>
        </div>
      </StyledRepoActionContainer>
    </StyledRepoHeader>
  );
}

export default {
  RepoHeader,
};
