import styled from "styled-components"

export const LoginWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 90vh;
background-color: teal;

`
export const LoginTitle = styled.h2`
font-size: 36px;
margin-bottom: 20px !important;
margin: 0;
text-align: center;
color: #fff;
`

export const LoginForm = styled.form`
width: 400px;
background-color: white;
padding: 32px;
border-radius: 6px;
border: 1px solid teal;

`

export const LoginLabel = styled.label`
color: black;
display: block;
margin-bottom: 10px;

`
export const LoginInput = styled.input`
width: 100%;
padding: 10px;
border-radius: 4px;
border: 1px solid teal;

` 
export const LoginBlock = styled.div`
margin-bottom: 20px;

`
export const LoginButton = styled.button`
background-color: teal;
padding: 10px 15px;
color: white;
border: 1px solid teal;

font-size: 18px;
border-radius: 10px ;
&:hover{
    background-color: transparent;
    color: teal;
    border: 1px solid teal;
}

`
export const LoginError = styled.span`
color: red;
`


 