import styled from "styled-components"

const ExampleDemoStyles = styled.div`

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

    .resize > span { user-select: none; }
    .example img { max-width: 100%; }

    .resize:focus {
        outline: none;
        box-shadow: 0 0 0 4px var(--main-color-opacity-20), 0 0 1px 1px var(--main-color-opacity-50);
        border-color: var(--main-color);
        background: var(--main-color-opacity-10);
    }

    .resize:focus .icon-fill { fill: var(--main-color); }

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

export default ExampleDemoStyles