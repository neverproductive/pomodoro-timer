import './logo.sass'

const Logo = () => {
    return (
        <div className="logo-container">
            <a href="https://www.neverproductive.com/">
                <img src={process.env.PUBLIC_URL + '/Dark-Tree-Rounded-Corners.png'} alt="logo" width="100%" height="100%" className="logo" />
            </a>
        </div>
    )
}

export default Logo;