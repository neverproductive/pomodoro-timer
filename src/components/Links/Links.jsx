import './links.sass';

const Links = () => {

    return (
        <div className="links">
            <a className="link discord" href="https://www.youtube.com/c/JordanDParker">
                <img src={process.env.PUBLIC_URL + '/youtube.png'} alt="youtube" width="100%" height="100%"/>
            </a>
            <a className="link blog" href="https://www.neverproductive.com/">
                <img src={process.env.PUBLIC_URL + '/Tree.png'} alt="logo" width="100%" height="100%"/>
            </a>
            <a className="link discord" href="https://discord.gg/7T99jjVcJX">
                <img src={process.env.PUBLIC_URL + '/discord.png'} alt="discord" width="100%" height="100%"/>
            </a>
        </div>
    )
}

export default Links
