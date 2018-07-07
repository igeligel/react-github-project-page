import React, { Component } from 'react';
import styled from 'styled-components';

import { RepoHeader } from '../components/RepoHeader';
import { RepoNavContainer } from '../components/RepoNavContainer';
import { RepoDescriptionContainer } from '../components/RepoDescriptionContainer';
import { RepoTagContainer } from '../components/RepoTagContainer';

const RepoContainer = styled.div`
  width: 100%;
  background-color: white;
`;

const RepoContainerTop = styled.div`
  border-bottom: 1px solid #e1e4e8;
  background-color: #fafbfc;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledAppContainer = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`;

const StyledRepoContentContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <StyledAppContainer>
        <RepoContainer>
          <RepoContainerTop>
            <RepoHeader user={'emberjs'} />
            <RepoNavContainer />
          </RepoContainerTop>
          <StyledRepoContentContainer>
            <RepoDescriptionContainer />
            <RepoTagContainer />
            <div className="repo-summary__container">
              <div className="repo-summary__stats-container">
                <a className="repo-summary__stats-link" href="">
                  <span className="octicon octicon-history" />
                  <span className="repo-summary__stats-amount">16,928</span>
                  <span className="repo-summary__stats-title">commits</span>
                </a>
                <a className="repo-summary__stats-link" href="">
                  <span className="octicon octicon-git-branch" />
                  <span className="repo-summary__stats-amount">53</span>
                  <span className="repo-summary__stats-title">branches</span>
                </a>
                <a className="repo-summary__stats-link" href="">
                  <span className="octicon octicon-tag" />
                  <span className="repo-summary__stats-amount">313</span>
                  <span className="repo-summary__stats-title">releases</span>
                </a>
                <a className="repo-summary__stats-link" href="">
                  <span className="octicon octicon-organization" />
                  <span className="repo-summary__stats-amount">731</span>
                  <span className="repo-summary__stats-title">
                    contributors
                  </span>
                </a>
                <a className="repo-summary__stats-link" href="">
                  <span className="octicon octicon-law" />
                  <span className="repo-summary__stats-title">MIT</span>
                </a>
              </div>
              <div className="repo-summary__stats-graph" />
            </div>
            <div className="file-nav">
              <div className="file-nav__container">
                <button className="file-nav__button">
                  <span className="file-nav__button-text--addition">
                    Branch:
                  </span>
                  <span className="file-nav__button-text--main">master</span>
                  <span>▼</span>
                </button>
                <button
                  className="file-nav__button"
                  style={{ 'margin-left': '5px' }}
                >
                  <span className="file-nav__button-text--main">
                    New pull request
                  </span>
                </button>
              </div>
              <div className="file-nav__container">
                <div className="file-nav__button-group">
                  <button>Create new file</button>
                  <button>Upload files</button>
                  <button>Find file</button>
                </div>
                <button
                  className="file-nav__button--primary"
                  style={{ 'margin-left': '5px' }}
                >
                  <span className="file-nav__button-text--primary">
                    Clone or download
                  </span>
                  <span>▼</span>
                </button>
              </div>
            </div>
            <div className="repo-activity__container">
              <div>
                <div className="repo-activity__event-description">
                  <img
                    src="https://avatars2.githubusercontent.com/u/61024?s=60&v=4"
                    alt="Person xyz"
                  />
                  <a className="repo-activity__username" href="">
                    igeligel&nbsp;
                  </a>
                  <a
                    className="repo-activity__event-text"
                    href="https://github.com/emberjs/ember.js/commit/527e517eddf787740e3b6608bff1cf79b83660b5"
                  >
                    Merge pull request&nbsp;
                  </a>
                  <a href="" style={{ color: '#0366d6' }}>
                    #15754
                  </a>
                  <a
                    className="repo-activity__event-text"
                    href="https://github.com/emberjs/ember.js/commit/527e517eddf787740e3b6608bff1cf79b83660b5"
                  >
                    &nbsp;from bekzod/remove-derpication
                  </a>
                  <button className="repo-activity__button">...</button>
                </div>
              </div>
              <div className="repo-activity__event-time">
                <span>Latest commit&nbsp;</span>
                <a href="https://github.com/emberjs/ember.js/commit/527e517eddf787740e3b6608bff1cf79b83660b5">
                  527e517
                </a>
                <span>&nbsp;18 hours ago</span>
              </div>
            </div>
            <div className="repo-files__container">
              <table>
                <tbody>
                  <tr>
                    <td className="repo-files__table-icon">
                      <span className="octicon octicon-file-directory" />
                    </td>
                    <td className="repo-files__table-file-name">
                      <a href="">bin</a>
                    </td>
                    <td className="repo-files__table-commit-message">
                      <a href="https://github.com/emberjs/ember.js/commit/45d9f1a4d5f530bd343433b2d3aeb5a1574a4d52">
                        split browser runner out.
                      </a>
                    </td>
                    <td className="repo-files__table-time">2 months ago</td>
                  </tr>
                  <tr>
                    <td className="repo-files__table-icon">
                      <span className="octicon octicon-file-directory" />
                    </td>
                    <td className="repo-files__table-file-name">
                      <a href="https://github.com/emberjs/ember.js/tree/master/bin">
                        blueprints
                      </a>
                    </td>
                    <td className="repo-files__table-commit-message">
                      <a href="https://github.com/emberjs/ember.js/commit/af4f272e452bdd144e16b3bc5671ca874d416e61">
                        Cleanup deprecate feature parsing.
                      </a>
                    </td>
                    <td className="repo-files__table-time">18 days ago</td>
                  </tr>
                  <tr>
                    <td className="repo-files__table-icon">
                      <span className="octicon octicon-file-directory" />
                    </td>
                    <td className="repo-files__table-file-name">
                      <a href="https://github.com/emberjs/ember.js/tree/master/broccoli">
                        broccoli
                      </a>
                    </td>
                    <td className="repo-files__table-commit-message">
                      <a href="https://github.com/emberjs/ember.js/commit/8a7318e9c0f3e58f1e9cc7a6ce591d6c83fcb351">
                        Remove legacy packages structure.
                      </a>
                    </td>
                    <td className="repo-files__table-time">a month ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </StyledRepoContentContainer>
        </RepoContainer>
      </StyledAppContainer>
    );
  }
}

export default App;
