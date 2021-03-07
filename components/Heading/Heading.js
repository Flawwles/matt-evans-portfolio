export default function Heading ({children, size, theme, ...rest}) {
    
    return (
        <div {...rest} className="heading">
            <style jsx>{`
                .heading {
                    display: flex;
                    font-size: ${size};
                    font-family: wotfardbold;
                    color: ${(theme == 'dark' ? 'var(--grey-900)' : 'var(--accent-dark-500)')}
                }
            `}</style>
            {children}
            </div>
    )
}