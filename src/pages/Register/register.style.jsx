import styled from "styled-components"


export const RegisterWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 90vh;
background-color: teal;

`
export const RegisterTitle = styled.h2`
font-size: 36px;
margin-bottom: 20px !important;
margin: 0;
text-align: center;
color: #fff;
`

export const RegisterForm = styled.form`
width: 400px;
background-color: white;
padding: 32px;
border-radius: 6px;

`

export const RegisterLabel = styled.label`
color: black;
display: block;
margin-bottom: 10px;

`
export const RegisterInput = styled.input`
width: 100%;
padding: 10px;
border-radius: 4px;
border: 1px solid teal;

` 
export const RegisterBlock = styled.div`
margin-bottom: 20px;

`
export const RegisterButton = styled.button`
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

export const RegisterError = styled.span`
color: red;
`
 