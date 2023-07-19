import styled from 'styled-components'



export const MainPageDiv = styled.div`

    margin:0;
    padding:0; 
    width: 100%;
    height: auto;
    .div_main{
        margin: 50px auto;
        font-family: system-ui;
        padding: 0 30px;
        display: inline-block;
    }
    .div_main img{
        width: 50%;
    }
    .div_main h3{
        margin: 20px auto;
        width: fit-content;
    }
    .div_main p{
        margin: 20px auto;
        width: fit-content;
    }
    .contact{
        display: -webkit-box;
        text-decoration: none;
        margin-top: 20px;
    }
    .icon{
        margin-right: 20px;
    }
    @media (max-width: 767px) {
    .div_main img{
      width: 100%;
    }
  }
`