import React, { Component } from 'react';
import styled from 'styled-components';

import { RepoHeader } from '../components/RepoHeader';
import { RepoNavContainer } from '../components/RepoNavContainer';
import { RepoDescriptionContainer } from '../components/RepoDescriptionContainer';
import { RepoTagContainer } from '../components/RepoTagContainer';
import { RepoSummaryContainer } from '../components/RepoSummaryContainer';
import { FileNav } from '../components/FileNav';

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
            <RepoSummaryContainer />
            <FileNav />
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
