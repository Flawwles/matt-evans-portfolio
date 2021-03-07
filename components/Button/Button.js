import styled from 'styled-components';

const Button = styled.button`
   background: var(--accent-light-400);
   color: var(--grey-400);
   ${props => props.type === 'secondary' ? `background: var(--grey-400)` : ''};
   ${props => props.type === 'secondary' ? `color: var(--accent-light-400)` : ''};
    font-size: 1em;
    border: 0;
    padding: 0.6rem 2rem;
    border-radius: 3px;
    cursor: pointer;
    transition: transform 0.3s ease;
    -webkit-backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    -webkit-appearance: none;
    ${props => props.jump ? `
    &:hover {
        transform: translateY(-3px);
    }
    ` : ''};
    
`;

export default Button

