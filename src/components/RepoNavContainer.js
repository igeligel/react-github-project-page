import React from 'react';
import styled from 'styled-components';

const StlyedRepoNavContainer = styled.div`
  margin-top: 16px;
  max-width: 980px;
  width: 100%;
  background-color: #fafbfc;
`;

const StyledRepoNavList = styled.ul`
  padding: 0;
  margin: 0;
  font-size: 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;

const StyledRepoNavListItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #586069;
`;

const StyledRepoNavListItemActive = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -1px;
  border-bottom: 1px solid white;
  border-radius: 3px 3px 0 0;
  border-right: 1px solid #e1e4e8;
  border-left: 1px solid #e1e4e8;
  border-top: 3px solid #e36209;
  background-color: white;
  color: #24292e;
`;

const StyledRepoNavListItemCounter = styled.span`
  padding: 2px 5px;
  font-weight: 600;
  color: #444d56;
  font-size: 12px;
  background-color: rgba(27, 31, 35, 0.08);
  border-radius: 20px;
  margin-left: 0.3em;
`;

const StyledRepoNameListLink = styled.a`
  color: #24292e;
  padding: 8px 15px;
  text-decoration: none;
`;

export const RepoNavContainer = (pros) => {
  return (
    <StlyedRepoNavContainer>
      <StyledRepoNavList>
        <StyledRepoNavListItemActive>
          <StyledRepoNameListLink href="">
            <span className="octicon octicon-code" />
            <span>Code</span>
          </StyledRepoNameListLink>
        </StyledRepoNavListItemActive>
        <StyledRepoNavListItem>
          <StyledRepoNameListLink href="">
            <span className="octicon octicon-issue-opened" />
            <span>Issues</span>
            <StyledRepoNavListItemCounter>248</StyledRepoNavListItemCounter>
          </StyledRepoNameListLink>
        </StyledRepoNavListItem>
        <StyledRepoNavListItem>
          <StyledRepoNameListLink href="">
            <span className="octicon octicon-git-pull-request" />
            <span>Pull Requests</span>
            <StyledRepoNavListItemCounter>101</StyledRepoNavListItemCounter>
          </StyledRepoNameListLink>
        </StyledRepoNavListItem>
        <StyledRepoNavListItem>
          <StyledRepoNameListLink href="">
            <span className="octicon octicon-project" />
            <span>Projects</span>
            <StyledRepoNavListItemCounter>1</StyledRepoNavListItemCounter>
          </StyledRepoNameListLink>
        </StyledRepoNavListItem>
        <StyledRepoNavListItem>
          <StyledRepoNameListLink href="">
            <span className="octicon octicon-graph" />
            <span>Insights</span>
          </StyledRepoNameListLink>
        </StyledRepoNavListItem>
      </StyledRepoNavList>
    </StlyedRepoNavContainer>
  );
};

export default {
  RepoNavContainer,
};
