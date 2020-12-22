import styled from 'styled-components';

const AsideMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  .item {
    padding: 7px 5px;
    cursor: pointer;
    width: 100%;
    display: flex;
    transition: ease-in all 0.1s;
    color: white;
    justify-content: start;
    @media (max-width: 750px) {
      justify-content: center;
      span {
        display: none;
      }
    }
    &:hover {
      background-color: #969696;
    }
    svg {
      height: 22px;
      fill: white;
    }
    span {
      margin-left: 10px;
    }
  }
`;

export default AsideMenuWrapper;
