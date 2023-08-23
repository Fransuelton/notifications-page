import { styled } from "styled-components"


const HeaderArea = () => {

    return (
        <Header>
            <Div>
                <H1>Notifications</H1>
                <P>3</P>
            </Div>
            <A>Mark all as read</A>
        </Header>
    )
}

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 2.4rem 0;

    @media (min-width: 1200px) and (max-width: 1919px) {
        margin: 3.1rem 0;
    }
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const H1 = styled.h1`
    font-size: 2rem;
    font-weight: 800;
    color: #1C202B;

    @media (min-width: 1200px) and (max-width: 1919px) {
        font-size: 2.4rem;
    }
`

const P = styled.p`
    background-color: #0A327B;
    border-radius: 0.6rem;
    width: 3.2rem;
    height: 2.5rem;
    margin-left: 0.9rem;
    color: #FFF;
    font-size: 1.6rem;
    font-weight: 800;
    text-align: center;
`

const A = styled.a`
    color: #5E6778;
    font-size 1.4rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;

    @media (min-width: 481px) and (max-width: 1200px) {
        font-size: 1.6rem;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        font-size: 1.6rem;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        font-size: 1.6rem;
    }

    @media (min-width: 1200px) and (max-width: 1919px) {
        font-size: 1.6rem;
    }

    &:hover {
        color: #0A327B;
        text-decoration: underline;
    }
`

export { HeaderArea }