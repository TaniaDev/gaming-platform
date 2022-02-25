import styled from 'styled-components'

export const Logo = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`

export const Menu = styled(Logo)`
    justify-content: flex-end;
`

export const Item = styled.a`
    margin: 0px 40px 0px 40px;

    &:hover {
      border-bottom: 1px solid #FA9021;
    }
`

export const Nav = styled.nav`
    margin: 24px 40px;
    display: flex;
    justify-content: space-between;
`

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Button = styled.button`
    color: #FFFFFF;
    border: none;
`

export const ButtonAction = styled(Button)`
    background: #FA9021;
    border-radius: 4px;
    padding: 8px 24px;
`

export const ButtonSeeAll = styled(Button)`
    background: #363636;
    border-radius: 4px;
    padding: 8px 24px;
`

export const ButtonDetails = styled(Button)`
    background: #FA9021;
    border-radius: 24px;
    padding: 10px 24px;
`

export const Page = styled.div`
    padding: 96px 128px 96px 128px;

`
export const Square = styled.div`
    width: 210px;
    height: 210px;
    background-color: white;
    margin: 10px;
`

export const Subtitle = styled.span`
    font-weight: bolder;
`

export const Title = styled.h1`
    margin: 24px 0px 8px 0px;
    font-size: 48px;
`

export const Text = styled.div`
    margin: 40px 0px 48px 0px;
    line-height: 32px;
`

export const Tag = styled.span`
    color: #FA9021;
    font-weight: bolder;
`

export const Main = styled.div`
    width: 528px;
`

export const ImageBackground = styled.span`
    width: 45vw;
    height: 45vw;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;

`
