export default function Align({children, horizontal, vertical}) {
    
    return (
        <div className="align">
            <style jsx>{`
                .align {
                    display: flex;
                    width: 100%;
                    justify-content: ${horizontal};
                    align-items: ${vertical}
                }
            `}</style>
            {children}
            </div>
    )
}