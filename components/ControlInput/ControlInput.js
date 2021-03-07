export default function Align({children, title, value, inputType, onChange}) {
    
    return (
        <div className="control-input">
            <style jsx>{`
                .control-input__title {
                    font-size: 13px;
                    font-family: wotfardbold;
                    font-weight: bold;
                    padding-bottom: 0.5rem;
                    padding-top: 1rem;
                }
                .control-input {
                    display: flex;
                    flex-direction: column;
                    padding-bottom: 1rem;
                } 
                .control-input__wrapper {
                    width: 100%;
                    position: relative;
                }
                .control-input__input {
                    width: 100%;
                    font-size: 13px;
                    line-height: 1.4rem;
                    border: 0;
                    border-bottom: 1px solid var(--grey-400);
                    padding:0;
                    padding-bottom: 0.2rem;
                    background: transparent;
                } 
                .control-input__input:focus {
                    outline: 0;
                    border-bottom: 1px solid var(--accent-light-400);
                }
                .control-input__input::-webkit-input-placeholder {
                    color: var(--grey-200);
                }
                .control-input__inputType {
                    position: absolute;
                    top: 0;
                    right: 0;
                    font-size: 13px;
                    line-height: 1.4rem;
                    color: var(--grey-200);
                    background: var(--grey-800);
                    padding-left: 0.4rem;
                }
            
            `}</style>
            <label htmlFor={title}
                className="control-input__title">
                {title}
                </label>
            <div className="control-input__wrapper">
                <input 
                    className="control-input__input" 
                    type="text" id={title} 
                    defaultValue={value}
                    placeholder={`enter ${title}`}
                    spellCheck="false"
                    onChange={onChange} />
                <span className="control-input__inputType">{inputType}</span>
            </div>
            {children}
            </div>
    )
}