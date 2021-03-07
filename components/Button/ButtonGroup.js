import styled from 'styled-components';
import useResizeObserver from "use-resize-observer";
import getClasses from '../lib/getClasses';


const ButtonGroupStyle = styled.div`
&.ButtonGroup--small > button {
    display: block;
    width: 100%;
    margin-top: 1rem;
}
&.ButtonGroup--medium > button {
    margin-right: 1rem;
}

&.ButtonGroup--large > button {
    margin-right: 1rem;
}
`

const ButtonGroup = ({children}) => {
    const { ref, width = 1 } = useResizeObserver();

    return (
        <ButtonGroupStyle ref={ref} className={getClasses('ButtonGroup', {
            'small': width <= 400,
            'medium': width > 400 && width < 800,
            'large': width >= 800
        })}>
            {children}
        </ButtonGroupStyle>
    )
}


export default ButtonGroup

