import React from 'react';
import styled from 'styled-components';

const StyledRepoActivityContainer = styled.div`
  box-sizing: border-box;
  padding: 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: #f1f8ff;
  border: 1px solid #c8e1ff;
  margin-top: 1em;
  max-width: 980px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const StyledRepoActivityEventDescription = styled.div`
  color: #586069;
  font-size: 12px;
  display: flex;
  align-items: center;

  > img {
    width: 20px;
    height: 20px;
  }
`;

const StyledRepoActivityUsername = styled.a`
  margin-left: 0.4em;
  font-weight: 600;
  color: #24292e;
  text-decoration: none;
`;

const StyledRepoActivityEventText = styled.a`
  color: #586069;
  text-decoration: none;
`;

const StyledRepoActivityButton = styled.button`
  margin-left: 0.6em;
  height: 12px;
  padding: 0 5px 5px;
  font-size: 12px;
  vertical-align: middle;
  background: #dfe2e5;
  border: none;
  line-height: 6px;
`;

const StyledRepoActivityEventTime = styled.div`
  color: #586069;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

export const RepoActivityContainer = (props) => {
  return (
    <StyledRepoActivityContainer>
      <div>
        <StyledRepoActivityEventDescription>
          <img
            src="https://avatars2.githubusercontent.com/u/61024?s=60&v=4"
            alt="Person xyz"
          />
          <StyledRepoActivityUsername href="">
            igeligel&nbsp;
          </StyledRepoActivityUsername>
          <StyledRepoActivityEventText href="https://github.com/emberjs/ember.js/commit/527e517eddf787740e3b6608bff1cf79b83660b5">
            Merge pull request&nbsp;
          </StyledRepoActivityEventText>
          <a href="" style={{ color: '#0366d6', 'text-decoration': 'none' }}>
            #15754
          </a>
          <StyledRepoActivityEventText href="https://github.com/emberjs/ember.js/commit/527e517eddf787740e3b6608bff1cf79b83660b5">
            &nbsp;from bekzod/remove-derpication
          </StyledRepoActivityEventText>
          <StyledRepoActivityButton>...</StyledRepoActivityButton>
        </StyledRepoActivityEventDescription>
      </div>
      <StyledRepoActivityEventTime>
        <span>Latest commit&nbsp;</span>
        <a href="https://github.com/emberjs/ember.js/commit/527e517eddf787740e3b6608bff1cf79b83660b5">
          527e517
        </a>
        <span>&nbsp;18 hours ago</span>
      </StyledRepoActivityEventTime>
    </StyledRepoActivityContainer>
  );
};

export default {
  RepoActivityContainer,
};
