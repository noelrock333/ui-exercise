import styled from 'styled-components';

const AsideMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  .item {
    padding: 7px 5px;
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    transition: ease-in all 0.1s;
    &:hover {
      background-color: #969696;
    }
    svg {
      height: 22px;
      fill: white;
    }
  }
`;

export default AsideMenuWrapper;
