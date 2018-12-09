import styled from 'styled-components'

const AppWrapper = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background: cornflowerblue;
`

const InnerWrapper = styled.div`
    width: 100;
    height: 100%;
    display: flex;
    position: relative;
`

const Title = styled.span`
    margin: auto;
    font-size: 50px;
    font-weight: 600;
    font-family: fantasy;
`

export {
    AppWrapper,
    InnerWrapper,
    Title
}