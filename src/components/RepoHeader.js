import React from 'react';
import styled from 'styled-components';

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

export function RepoHeader(props) {
  return (
    <StyledRepoHeader>
      <StyledRepoInfoContainer>
        <span className="octicon octicon-repo" />
        <h1 className="repo-info__heading--first">
          <a href={`https://github.com/${props.user}`}>{props.user}</a>
        </h1>
        <span>/</span>
        <a
          className="repo-info__name"
          href="https://github.com/emberjs/ember.js"
        >
          ember.js
        </a>
      </StyledRepoInfoContainer>
      <StyledRepoActionContainer>
        <div className="repo-action__item">
          <button className="repo-action__item-button">
            <span className="octicon octicon-eye" />
            <span className="repo-action__item-button-text">Unwatch</span>
          </button>
          <a
            className="repo-action__item-option"
            href="https://github.com/emberjs/ember.js/watchers"
          >
            1,048
          </a>
        </div>
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
