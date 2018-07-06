import React from 'react';
import styled from 'styled-components';

export function RepoHeader() {
  const RepoHeader = styled.div`
    margin-top: 16px;
    background-color: #fafbfc;
    max-width: 980px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  `;
  return (
    <RepoHeader>
      <div className="repo-info__container">
        <span className="octicon octicon-repo" />
        <h1 className="repo-info__heading--first">
          <a href="https://github.com/emberjs">emberjs</a>
        </h1>
        <span>/</span>
        <a
          className="repo-info__name"
          href="https://github.com/emberjs/ember.js"
        >
          ember.js
        </a>
      </div>
      <div className="repo-action__container">
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
      </div>
    </RepoHeader>
  );
}

export default {
  RepoHeader,
};
