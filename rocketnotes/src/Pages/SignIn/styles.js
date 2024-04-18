import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div  `
    height: 100vh;
    display: flex;
    align-items: stretch;
    `;
    
export const Form =styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    align-items: center;
    text-align: center;

    >h2{
        padding: 48px;
    }
    
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: opacity(20%);
`
;
