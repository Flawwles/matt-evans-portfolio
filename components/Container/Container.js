import styled from 'styled-components';

const ContainerWrapper = styled.main`
    ${props => props.background === 'dark' ? `background: var(--accent-dark-100)` : ''};
    ${props => props.background === 'dark' ? `color: var(--grey-600)` : ''};
    font-size: 1em;
    border: 0;
    padding: 0.6rem 2rem;
`;

const ContainerContents = styled.div`
    max-width: 70rem;
    margin: 0 auto;
`

const Container = ({children, background}) => {
    return (
        <ContainerWrapper background={background}>
            <ContainerContents>
                {children}
            </ContainerContents>
        </ContainerWrapper>
    );
};

export default Container


