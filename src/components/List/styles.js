import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 5px;
  height:100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.8 : 1}
    
  & + div {
      border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
  header{
      display:flex;
      justify-content: space=between; 
      aling-items:center;
      height:42px;
       
      h2{
        font-weight:500;
        font-size:20px;
        padding: 0 10px;
      }
      button{
        padding-down:10px;
        height:26px;
        width:26px;
        border-radius: 18px;
        background: #3b5bfd;
        border:0;  
        
        cursor:pointer;

      }
  }
`;
