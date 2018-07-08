import React from 'react';
import styled from 'styled-components';

const StyledFileNav = styled.div`
  margin-top: 1em;
  max-width: 980px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledFileNavContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledFileNavButton = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 3px 10px;
  font-size: 12px;
  line-height: 20px;
  border: 1px solid rgba(27, 31, 35, 0.2);
  display: inline-block;
  background: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
`;

const StyledFileNavButtonTextMain = styled.span`
  font-weight: 600;
`;

const StyledFileNavButtonGroup = styled.div`
  display: inline-block;
  font-size: 0;

  > button {
    font-size: 12px;
    line-height: 20px;
    border: 1px solid rgba(27, 31, 35, 0.2);
    display: inline-block;
    padding: 3px 10px;
    background: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
    border: none;
    border-top: 1px solid rgba(27, 31, 35, 0.2);
    border-bottom: 1px solid rgba(27, 31, 35, 0.2);
    font-weight: 600;
    cursor: pointer;
  }

  > button:first-child {
    border: 1px solid rgba(27, 31, 35, 0.2);
    font-size: 12px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  > button:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border: 1px solid rgba(27, 31, 35, 0.2);
  }
`;

const StyledFileNavButtonPrimary = styled.button`
  border-radius: 3px;
  color: white;
  padding: 3px 10px;
  font-size: 12px;
  line-height: 20px;
  border: 1px solid rgba(27, 31, 35, 0.2);
  display: inline-block;
  background: linear-gradient(-180deg, #34d058 0%, #28a745 90%);
  cursor: pointer;
`;

const StyledFileNavButtonTextPrimary = styled.span`
  font-weight: 600;
`;

const StyledFileNavButtonTextAddition = styled.span`
  font-weight: 500;
  opacity: 0.75;
`;

export const FileNav = (props) => {
  return (
    <StyledFileNav>
      <StyledFileNavContainer>
        <StyledFileNavButton>
          <StyledFileNavButtonTextAddition>
            Branch:
          </StyledFileNavButtonTextAddition>
          <StyledFileNavButtonTextMain> master </StyledFileNavButtonTextMain>
          <span>▼</span>
        </StyledFileNavButton>
        <StyledFileNavButton style={{ 'margin-left': '5px' }}>
          <StyledFileNavButtonTextMain>
            New pull request
          </StyledFileNavButtonTextMain>
        </StyledFileNavButton>
      </StyledFileNavContainer>
      <StyledFileNavContainer>
        <StyledFileNavButtonGroup>
          <button>Create new file</button>
          <button>Upload files</button>
          <button>Find file</button>
        </StyledFileNavButtonGroup>
        <StyledFileNavButtonPrimary style={{ 'margin-left': '5px' }}>
          <StyledFileNavButtonTextPrimary>
            Clone or download
          </StyledFileNavButtonTextPrimary>
          <span>▼</span>
        </StyledFileNavButtonPrimary>
      </StyledFileNavContainer>
    </StyledFileNav>
  );
};

export default {
  FileNav,
};
