import jsxToString from 'jsx-to-string';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';


const WrappedChildren = ({children}) => (
    <>
        {children}
    </>
)


const ExampleCompoent = styled.div`

  --border-radius: 0.2rem;
  --main-color: var(--accent-light-400);
  --main-color-opacity-50: rgba(var(--accent-light-rgb-400), 0.5);
  --main-color-opacity-20: rgba(var(--accent-light-rgb-400), 0.2);
  --main-color-opacity-10: rgba(var(--accent-light-rgb-400), 0.1);
  
  position: relative;
  width: 100%;
  background: #f1f3f5;
  min-height: 100px;
  height: auto;
  border: 1px solid rgb(187, 187, 187);
  border-radius: var(--border-radius);
  margin-bottom: 4rem;


  .example {
    box-sizing: border-box;
    background: white;
    width: 100%;
    content: " ";
    display: block;
    position: relative;
    border-radius: var(--border-radius);
    padding: 1.5rem 3rem 1.5rem 1.5rem;
    min-width: 15rem;
    max-width: 100%;
  }

  .resize {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: var(--border-radius);
    box-shadow: 0 0 0 1px rgb(187, 187, 187);
    transition: all 0.3s ease;
    cursor: ew-resize;
    user-select: none;
    border: none;
    background: transparent;
  }

  .code-button {
    background: white;
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    border: none;
    border-top: 1px solid rgb(187, 187, 187);
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0.5rem 1rem;
    cursor: pointer !important;
    color: var(--grey-100);
    font-size: 0.9rem;
    outline: none;
}

.code-button:focus {
  outline: none;
  box-shadow: 0 0 0 4px var(--main-color-opacity-20), 0 0 1px 1px var(--main-color);
  border-color: var(--main-color-opacity-50);
  background: var(--main-color-opacity-10);
}

.resize > span {
  user-select: none;
}

.example img {
  max-width: 100%;
}

.resize:focus {
  outline: none;
  box-shadow: 0 0 0 4px var(--main-color-opacity-20), 0 0 1px 1px var(--main-color-opacity-50);
  border-color: var(--main-color);
  background: var(--main-color-opacity-10);
}

.resize:focus .icon-fill {
  fill: var(--main-color);
}

.code {
  padding: 1rem;
  background: rgb(43, 48, 59);
  overflow: hidden;
  transition: padding-top 0.2s ease, padding-bottom 0.2s ease;
  font-size: 1.3rem
}
.code.hidden {
  height: 0;
  padding: 0;
}
  
`


export default function ExampleDemo ({children}) {

    const resize = useRef(null);
    const example = useRef(null);
    const [startingWidth, setStartingWidth] = useState(0)
    const [startX, setStartX] = useState(0)


    let [codeVisible, setCodeVisible] = useState(true)

    //Get ready to start dragging
    const handleResizeStart = (e) => {
        e.preventDefault();
        resize.current.focus();
        setStartingWidth(example.current.offsetWidth)
        if(e.clientX) {
            setStartX(e.clientX);
        } else {
            setStartX(e.changedTouches[0].pageX);
        }
        
        document.addEventListener("mousemove", dragMove);
        document.addEventListener("touchmove", dragMove);
    }

    const handleResizeStop = () => {
        document.removeEventListener("mousemove", dragMove);
        document.removeEventListener("touchmove", dragMove);
    }

    const dragMove = (e) => {
        if (e.clientX) {
            example.current.style.width = startingWidth + e.clientX - startX + "px";
        } else {
            example.current.style.width = startingWidth + e.changedTouches[0].pageX - startX + "px";
        }
    };

    const handleCodeButtonClick = () => {
        setCodeVisible(!codeVisible)
    }

    
    useEffect( () => {
        resize.current.addEventListener("mousedown", handleResizeStart);
        resize.current.addEventListener("touchstart", handleResizeStart);

        document.addEventListener('mouseup', handleResizeStop)
        document.addEventListener('touchend', handleResizeStop)
    }, [startX])


    return (
        <ExampleCompoent>
            <div className="example" ref={example}>
                {children}
                <button className="resize" ref={resize} tabIndex="0">
                    <span>
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14 11C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9C13.4477 9 13 9.44772 13 10C13 10.5523 13.4477 11 14 11ZM14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14C13 14.5523 13.4477 15 14 15ZM15 18C15 18.5523 14.5523 19 14 19C13.4477 19 13 18.5523 13 18C13 17.4477 13.4477 17 14 17C14.5523 17 15 17.4477 15 18ZM14 23C14.5523 23 15 22.5523 15 22C15 21.4477 14.5523 21 14 21C13.4477 21 13 21.4477 13 22C13 22.5523 13.4477 23 14 23ZM19 10C19 10.5523 18.5523 11 18 11C17.4477 11 17 10.5523 17 10C17 9.44772 17.4477 9 18 9C18.5523 9 19 9.44772 19 10ZM18 15C18.5523 15 19 14.5523 19 14C19 13.4477 18.5523 13 18 13C17.4477 13 17 13.4477 17 14C17 14.5523 17.4477 15 18 15ZM19 18C19 18.5523 18.5523 19 18 19C17.4477 19 17 18.5523 17 18C17 17.4477 17.4477 17 18 17C18.5523 17 19 17.4477 19 18ZM18 23C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21C17.4477 21 17 21.4477 17 22C17 22.5523 17.4477 23 18 23Z"
                                fill="black"
                                className="icon-fill"
                            />
                        </svg>
                    </span>
                </button>
            </div>
            <button className="code-button" onClick={handleCodeButtonClick}>
                { codeVisible ? "Show code" : 'Hide code'}
            </button>
            <div className={ codeVisible ? "code hidden" : 'code'}>
                <SyntaxHighlighter language="javascript" style={ocean}>
                    {jsxToString(<WrappedChildren>{children}</WrappedChildren>, {
                        displayName: ''
                    })}
                </SyntaxHighlighter>
            </div>
        </ExampleCompoent>
 
    )
}

