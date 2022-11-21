import styled from 'styled-components';

export const Container = styled.div`
  /* max-width: 1200px; */

  padding: ${props => props.theme.spacing(3)};

  margin-left: auto;
  margin-right: auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.spacing(80)};
  margin-left: auto;
  margin-right: auto;
  padding: ${props => props.theme.spacing(5)};
  box-shadow: ${props => props.theme.shadows.small};
  border-radius: ${props => props.theme.radii.primary}px;
`;

export const ContactsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.spacing(80)};
  margin-left: auto;
  margin-right: auto;
  padding: ${props => props.theme.spacing(5)};
`;

export const ContactsTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing(5)};
  font-size: ${props => props.theme.fontSizes.medLarge};
  font-weight: 700;
  color: ${props => props.theme.colors.gray};
`;

export const DefaultText = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  color: ${props => props.theme.colors.gray};
`;
