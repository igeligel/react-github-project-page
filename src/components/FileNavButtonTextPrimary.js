import React from 'react';
import styled from 'styled-components';

const StyledFileNavButtonTextPrimary = styled.span`
  font-weight: 600;
`;

export const FileNavButtonTextPrimary = () => {
  return (
    <StyledFileNavButtonTextPrimary>
      Clone or download
    </StyledFileNavButtonTextPrimary>
  );
};

export default {
  FileNavButtonTextPrimary,
};
