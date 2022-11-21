import styled from 'styled-components';

export const SearchLabel = styled.label`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing(3)};
  color: ${props => props.theme.colors.gray};
`;

export const SearchInput = styled.input`
  padding: ${props => props.theme.spacing(1.5)};
  margin-bottom: ${props => props.theme.spacing(3)};
  :focus-visible {
    outline-color: ${props => props.theme.colors.accent};
  }
`;
