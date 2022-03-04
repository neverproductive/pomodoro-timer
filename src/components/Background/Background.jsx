import './background.sass';

const Background = () => {
    return (
        <div className="background-wrapper">
            <img src={process.env.PUBLIC_URL + '/Background.png'} alt="background" className="background" width="100%" height ="100%"/>
        </div>
    )
}

export default Background
