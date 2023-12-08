import styled from 'styled-components'


import background from '../../assets/gifs-de-churrasco-4.gif'
export const Container = styled.div`
    background: url("${background}");
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    
`

export const Image = styled.img`
    width: 242px;
    height: 254px;
    margin-top: 15px;
    
`

export const ContainerData = styled.div`
    
`

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 25px;
    margin-bottom: 35px;

    
`

export const Order = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 38px;
    line-height: 50px;
    letter-spacing: -0.408px;
    color: yellow;
    text-decoration: overline white;
    text-shadow: 2px 2px red;
`
export const NameClient = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 31px;
    line-height: 52px;
    color: white;
    text-decoration: underline yellow;

`

export const TrashImage = styled.img`
    width: 34px;
    height: 38px;
    background: white;
`

export const ListOrder = styled.div`
    width: 442px;
    height: 131px;
    background: rgba(0, 0, 0, 0.55);
    border-radius: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 25px;
    button{
        background: none;
        border: none;
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
        &:active {
            opacity: 0.5;
        }
    }
`

export const Data = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
    
`

export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: #D93856;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    margin-top: 46px;
    :hover{
        opacity: 0.5;
    }
    :active{
        opacity: 0.7;
    }
`