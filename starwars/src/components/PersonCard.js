import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import styled, { css } from "styled-components";

const StyledDiv = styled.div`
display: flex;
`

const PersonCard = props => {
    return (
        <Toast >
            <StyledDiv>
                <ToastHeader>Name: {props.name}</ToastHeader>
                    <ToastBody>Birth Year: {props.year}</ToastBody>
                    <ToastBody> Height: {props.height}</ToastBody>
                    <ToastBody> Mass: {props.mass}</ToastBody>
            </StyledDiv>
        </Toast>
        
    )
}

export default PersonCard;