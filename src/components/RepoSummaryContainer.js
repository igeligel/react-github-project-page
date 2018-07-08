import React from 'react';
import styled from 'styled-components';

const StyledRepoSummaryContainer = styled.div`
  border-radius: 3px;
  border: 1px solid #dfe2e5;
  margin-top: 1.5em;
  max-width: 980px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledRepoSummaryStatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledRepoSummaryStatsLink = styled.a`
  text-decoration: none;
  color: #586069;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-basis: calc(100% / 5);
  display: flex;
  justify-content: center;

  :hover {
    text-decoration: none;
  }

  > .octicon {
    color: #586069;
  }
`;

const StyledRepoSummaryStatsAmount = styled.span`
  margin-left: 0.1em;
  font-weight: 600;
  color: #24292e;
`;

const StyledRepoSummaryStatsTitle = styled.span`
  color: #586069;
  margin-left: 0.3em;
`;

const StyledRepoSummaryStatsGraph = styled.div`
  background: linear-gradient(to right, #f1e05a 84%, #2b7489 0%);
  height: 9px;
  width: 100%;
`;

export const RepoSummaryContainer = (props) => {
  return (
    <StyledRepoSummaryContainer>
      <StyledRepoSummaryStatsContainer>
        <StyledRepoSummaryStatsLink href="">
          <span className="octicon octicon-history" />
          <StyledRepoSummaryStatsAmount>16,928</StyledRepoSummaryStatsAmount>
          <StyledRepoSummaryStatsTitle>commits</StyledRepoSummaryStatsTitle>
        </StyledRepoSummaryStatsLink>
        <StyledRepoSummaryStatsLink href="">
          <span className="octicon octicon-git-branch" />
          <StyledRepoSummaryStatsAmount>53</StyledRepoSummaryStatsAmount>
          <StyledRepoSummaryStatsTitle>branches</StyledRepoSummaryStatsTitle>
        </StyledRepoSummaryStatsLink>
        <StyledRepoSummaryStatsLink href="">
          <span className="octicon octicon-tag" />
          <StyledRepoSummaryStatsAmount>313</StyledRepoSummaryStatsAmount>
          <StyledRepoSummaryStatsTitle>releases</StyledRepoSummaryStatsTitle>
        </StyledRepoSummaryStatsLink>
        <StyledRepoSummaryStatsLink href="">
          <span className="octicon octicon-organization" />
          <StyledRepoSummaryStatsAmount>731</StyledRepoSummaryStatsAmount>
          <StyledRepoSummaryStatsTitle>
            contributors
          </StyledRepoSummaryStatsTitle>
        </StyledRepoSummaryStatsLink>
        <StyledRepoSummaryStatsLink href="">
          <span className="octicon octicon-law" />
          <StyledRepoSummaryStatsTitle>MIT</StyledRepoSummaryStatsTitle>
        </StyledRepoSummaryStatsLink>
      </StyledRepoSummaryStatsContainer>
      <StyledRepoSummaryStatsGraph />
    </StyledRepoSummaryContainer>
  );
};

export default {
  RepoSummaryContainer,
};
