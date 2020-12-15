import styled from 'styled-components';

const EmailRowWrapper = styled.div`
  display: table-row;
  background-color: ${props => props.selected ? 'rgba(242,245,245,0.8)' : 'white'};
  &:hover {
    // box-shadow: 0 10px 6px -6px #777;
    background-color: #ebebeb;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc; 
    cursor: pointer;
  }
  .subject {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .checkbox,
  .subject,
  .tags,
  .date {
    display: table-cell;
    border-bottom: 1px solid #ccc;
    padding: 15px;
  }

  .checkbox {
    width: 30px;
  }
`;

export default EmailRowWrapper;
