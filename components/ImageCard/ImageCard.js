export default function ImageCard ({children}) {

    return (
        <div className="ImageCard">
            <style jsx>{`
                .ImageCard {
                    border: 1px solid black;
                }
                `}</style>
            <div className="ImageCard">
                ImageCard {children}
            </div>
        </div>
        
    )
}