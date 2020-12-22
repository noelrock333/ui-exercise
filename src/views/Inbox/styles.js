import styled from 'styled-components';

const InboxWrapper = styled.div`
  background-color: gray;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: 50px auto;
  overflow-y: hidden;
  .actions-menu {
    grid-column: 2 / -1;
  }
  .aside-menu {
    grid-column: 1 / 2;
    grid-row: 1 / -1;
  }
  .emails-table {
    grid-column: 2 / -1;
  }
`;

export default InboxWrapper;

export const EmailsTable = styled.div`
  display: table;
  width: 100%;
`;
