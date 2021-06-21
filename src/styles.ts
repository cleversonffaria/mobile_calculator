import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color: #202020;
  justify-content: space-between;
`;

export const Calculator = styled.View`
  overflow: hidden;
  flex-direction: row; 
  padding: 10px 5px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top:50px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 40px;
  margin-left: 10px;
`;