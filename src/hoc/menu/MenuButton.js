import React from "react";
import styled from "styled-components";



const ButtonStyle = styled.div`
    width : 80px;
    padding: 20px;
    background-color:#fff;
    border-radius:10px;
    transition: all 0.3s;
    position:relative;
    border: 2px solid ${props => props.color};
    color:${props => props.color};
    cursor:pointer;
    &:hover{
        transform: scale(1.1);
    }
    div{
        position: absolute;
        left:50%;
        
        bottom:40%;
        font-weight: bold;
        font-size:28px;
        transform: translate(-50%);
    }

`;

class MenuButton extends React.Component{
    render(){
        return <ButtonStyle
            onClick={()=>this.props.showPage(this.props.index)}
            color={this.props.color}>
            
            <div>{this.props.text}</div>
        </ButtonStyle>
    }
}

export default MenuButton;