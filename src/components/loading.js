import load from './load.gif';
import './styles/loading.css'

function Loading (prop){
    return (
        <div className='loadingBody'>
            <div>
                <img src={load} alt='loading' />
                <div className='loadingLevel'>lvl{prop.level} <span style={{backgroundColor:'red'}}></span>  <span style={{backgroundColor:'green',animationDelay:'.2s'}}></span>  <span style={{backgroundColor:'yellow',animationDelay:'.4s'}}></span></div>
            </div>
        </div>
    )
}
export {Loading}