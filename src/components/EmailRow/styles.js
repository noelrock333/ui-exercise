import styled from 'styled-components';

const EmailRowWrapper = styled.div`
  display: table-row;
  background-color: ${props => props.selected ? 'rgba(242,245,245,0.8)' : 'white'};
  &:hover {
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

  .tags {
    .tag {
      display: inline-flex;
      background-color: #e89600;
      padding: 2px 4px; 
      border-radius: 3px;
      color: white;
      margin-left: 2px;
    }
  }

  @media (max-width: 750px) {
    .tags, .date {
      display: none;
    }
  }

  .checkbox {
    width: 30px;
  }
`;

export default EmailRowWrapper;
