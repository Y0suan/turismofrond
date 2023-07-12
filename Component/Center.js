import styled from "styled-components"

const StyledHeader = styled.div`
max-width: 1040px;
margin:0 auto;
padding:  0 24px;
`

export default function Center({children}){
    return(
        <StyledHeader>
            {children}
        </StyledHeader>
    )
}