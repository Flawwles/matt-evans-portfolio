import styled from 'styled-components';

const Spacer = styled.div`
   ${props => props.x ? `width: ${props.x}` : `width: 1px;`};
   ${props => props.y ? `height: ${props.y}` : `height: 1px;`};
   display: inline-block;
   content: '';
`;

export default Spacer

