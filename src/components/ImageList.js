import styled from '@emotion/styled';

export const ImageList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
  }
`;
