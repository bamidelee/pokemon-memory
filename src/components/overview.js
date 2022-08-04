import logo from './logo.png';
import './styles/overview.css';

function Overview (props){
    return (
        <div>
            <header>

                <div className="logo">
                    <img src={logo} alt='logo' className='logoIcon'/>
                    <h1>POKEMON MEMORY</h1>
                </div>
                <div className='score'>
                    <div>Score: {props.score}</div>
                    <div>Best score: {props.bestScore}</div>
                </div>
            </header>
            <div className='level'>lvl{props.level}</div>
           
        </div>
    )
}
export {Overview}