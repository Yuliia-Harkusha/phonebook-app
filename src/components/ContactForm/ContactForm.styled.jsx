import styled from 'styled-components';

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const Input = styled.input`
  padding: ${props => props.theme.spacing(1.5)};
  :focus-visible {
    outline-color: ${props => props.theme.colors.gray};
  }
`;

export const Label = styled.label`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 700;
  color: ${props => props.theme.colors.gray};
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};
  cursor: pointer;
  border: none;
  border-radius: ${props => props.theme.radii.primary}px;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.light};
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.small};
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.hover};
    box-shadow: ${props => props.theme.shadows.small};
  }
`;
