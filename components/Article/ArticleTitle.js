import styled from 'styled-components';

const ArticleTitleWrapper = styled.div`
   position: relative;
   display: inline-flex;
   align-items: center;

   & a {
       position: absolute;
       right: 0;
       padding-top: 8px;
       transform: translateX(-20px);
       opacity: 0;
       transition: all 0.2s ease;
   }

   &:hover a {
    opacity: 1;
    transform: translateX(10px)

   }
`;

const ArticleTitleText = styled.h1`
   color: var(--accent-dark-400);
   font-size: 3rem;  
   background: white;
   transition: color 0.3s ease;
   padding-right: 32px;
`;


const ArticleTitle = ({children, id}) => {

    return (
        <ArticleTitleWrapper>
            <a href={`#${id}`}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.0752 14.4932L24.0351 18.5339C24.3481 16.7796 24.153 14.9526 23.4472 13.2914L25.1601 11.5782C26.4997 10.2386 26.4997 8.05902 25.1601 6.71945C23.8209 5.37989 21.641 5.37989 20.3014 6.71945L14.471 12.5499C13.1314 13.8891 13.1314 16.069 14.471 17.4086C14.9339 17.8711 15.4978 18.1711 16.0924 18.3133L12.9711 21.4349C12.4671 21.1282 11.9908 20.7591 11.5556 20.3236C8.60841 17.377 8.60841 12.5814 11.5556 9.63481L17.386 3.80442C20.333 0.856861 25.1282 0.856861 28.0752 3.80442C31.0224 6.75102 31.0224 11.5466 28.0752 14.4932ZM3.80448 17.3855L7.84453 13.3451C7.53116 15.0994 7.72626 16.9267 8.43239 18.588L6.7192 20.3008C5.37963 21.6404 5.37963 23.82 6.7192 25.1595C8.05876 26.4991 10.2383 26.4991 11.5779 25.1595L17.4086 19.3292C18.7482 17.9896 18.7482 15.81 17.4086 14.4704C16.9454 14.0076 16.3815 13.7082 15.7872 13.5657L18.9085 10.4441C19.4126 10.7508 19.8888 11.1199 20.3237 11.5554C23.2706 14.502 23.2709 19.2973 20.3237 22.2442L14.4936 28.0746C11.5467 31.0218 6.75108 31.0218 3.80448 28.0746C0.856922 25.1277 0.856922 20.3324 3.80448 17.3855Z" fill="var(--accent-dark-400)"/>
                </svg>
            </a>
            <ArticleTitleText id={id}>
                {children}
            </ArticleTitleText>
            
        
        </ArticleTitleWrapper>
    )
}


export default ArticleTitle

