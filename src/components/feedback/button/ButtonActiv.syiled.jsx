import styled from "styled-components";

export const ButtonStylActiv = styled.button` padding-left: 15px; padding-right: 15px;  
font-size: 24px; border-radius: 5px; background-color: #00eeff;  
`
export const ButtonStylActivCirc = styled.span`position:absolute;   height: 100px; width: 100px; border: 1px solid black; border-radius:150px;  

left: ${({ value }) => {               
            switch (value) {
                case 0: return '-2%';
                case 1: return '37% ';
             default: return '74%'
        }
    }}`
            