import { styled } from "styled-components";



export const RegistrDiv = styled.div`

    margin: 0;
    padding: 0;
    background-image: url("https://prod.assets.earlygamecdn.com/images/Honkai-Star-Rail-login-screen.png?mtime=1682327639");
    width: 100%;
    min-height: 100vh;
    display: flow-root;
    .form_title{
        margin: 20px auto 0 auto;
        font: 700 25px tahoma;
        width: fit-content;
        color: #ec144f;
    }
    .form{
        width: 300px;
        height: auto;
        border: 1px solid gray;
        border-radius: 15px;
        margin: 70px auto 0 auto;
        box-shadow:(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .form-group{
        width: 250px;
        margin: 30px auto;
        padding: 0;
    }
    .input{
        width: 250px;
        background-color: unset;
    }

    .inputButton{
        width: 250px;
        margin: 30px auto 30px auto;
    }
    .passTo{
        margin: 20px auto 35px auto;
        font: 300 16 tahoma;
        width: 250px;
        height: auto;
        color: white;
    }
    .link{
        color: #ec144f;
        text-decoration: none;
    }
    .logo_div{
        width: 200px;
        height: 70px;
        margin: 50px auto;
        background-color: white;
    }
    .logo{
        width: 70px;
        height: 70px;
        float: left;
    }
    .logo_div p{
        font: 700 25px tahoma;
        color:#ec144f;
        margin-top: 20px;
        width: fit-content;
        height: fit-content;
        display: inline-block;
    }
`