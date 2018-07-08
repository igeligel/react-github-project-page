import React from 'react';
import styled from 'styled-components';

const StyledRepoFilesContainer = styled.div`
  box-sizing: border-box;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  max-width: 980px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  table {
    font-size: 14px;
    width: 100%;
    border-collapse: collapse;
  }

  tr {
    box-sizing: border-box;
    border-bottom: 1px solid #eaecef;
    border-left: 1px solid #eaecef;
    border-right: 1px solid #eaecef;
  }
`;

const StyledRepoFilesTableIcon = styled.td`
  box-sizing: border-box;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  width: 17px;
  padding-right: 2px;
  padding-left: 10px;
  color: rgba(3, 47, 98, 0.55);
`;

const StyledRepoFilesTableFileName = styled.td`
  box-sizing: border-box;
  padding-top: 0.5em;
  padding-bottom: 0.5em;

  > a {
    color: #0366d6;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

const StyledRepoFilesTableCommitMessage = styled.td`
  box-sizing: border-box;
  padding-top: 0.5em;
  padding-bottom: 0.5em;

  > a {
    color: #6a737d;
    text-decoration: none;

    :hover {
      color: #0366d6;
      text-decoration: underline;
    }
  }
`;

const StyledRepoFilesTableTime = styled.td`
  padding-right: 0.5em;
  box-sizing: border-box;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  color: #6a737d;
  text-align: right;
`;

export function RepoFilesContainer(props) {
  return (
    <StyledRepoFilesContainer>
      <table>
        <tbody>
          <tr>
            <StyledRepoFilesTableIcon>
              <span className="octicon octicon-file-directory" />
            </StyledRepoFilesTableIcon>
            <StyledRepoFilesTableFileName>
              <a href="">bin</a>
            </StyledRepoFilesTableFileName>
            <StyledRepoFilesTableCommitMessage>
              <a href="https://github.com/emberjs/ember.js/commit/45d9f1a4d5f530bd343433b2d3aeb5a1574a4d52">
                split browser runner out.
              </a>
            </StyledRepoFilesTableCommitMessage>
            <StyledRepoFilesTableTime>2 months ago</StyledRepoFilesTableTime>
          </tr>
          <tr>
            <StyledRepoFilesTableIcon>
              <span className="octicon octicon-file-directory" />
            </StyledRepoFilesTableIcon>
            <StyledRepoFilesTableFileName>
              <a href="https://github.com/emberjs/ember.js/tree/master/bin">
                blueprints
              </a>
            </StyledRepoFilesTableFileName>
            <StyledRepoFilesTableCommitMessage>
              <a href="https://github.com/emberjs/ember.js/commit/af4f272e452bdd144e16b3bc5671ca874d416e61">
                Cleanup deprecate feature parsing.
              </a>
            </StyledRepoFilesTableCommitMessage>
            <StyledRepoFilesTableTime>18 days ago</StyledRepoFilesTableTime>
          </tr>
          <tr>
            <StyledRepoFilesTableIcon>
              <span className="octicon octicon-file-directory" />
            </StyledRepoFilesTableIcon>
            <StyledRepoFilesTableFileName>
              <a href="https://github.com/emberjs/ember.js/tree/master/broccoli">
                broccoli
              </a>
            </StyledRepoFilesTableFileName>
            <StyledRepoFilesTableCommitMessage>
              <a href="https://github.com/emberjs/ember.js/commit/8a7318e9c0f3e58f1e9cc7a6ce591d6c83fcb351">
                Remove legacy packages structure.
              </a>
            </StyledRepoFilesTableCommitMessage>
            <StyledRepoFilesTableTime>a month ago</StyledRepoFilesTableTime>
          </tr>
        </tbody>
      </table>
    </StyledRepoFilesContainer>
  );
}

export default {
  RepoFilesContainer,
};
