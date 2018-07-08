import React, { Component } from 'react';
import styled from 'styled-components';

import { RepoHeader } from '../components/RepoHeader';
import { RepoNavContainer } from '../components/RepoNavContainer';
import { RepoDescriptionContainer } from '../components/RepoDescriptionContainer';
import { RepoTagContainer } from '../components/RepoTagContainer';
import { RepoSummaryContainer } from '../components/RepoSummaryContainer';
import { FileNav } from '../components/FileNav';
import { RepoActivityContainer } from '../components/RepoActivityContainer';
import { RepoFilesContainer } from '../components/RepoFilesContainer';

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
            <RepoActivityContainer />
            <RepoFilesContainer />
          </StyledRepoContentContainer>
        </RepoContainer>
      </StyledAppContainer>
    );
  }
}

export default App;
