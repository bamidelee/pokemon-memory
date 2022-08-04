import './styles/gameover.css'

function GameOver (prop){
    return (
        <div className='over'>
            <div>
                <h1>GAME OVER</h1>
                <div>you clicked an image more than once</div>
                <button onClick={prop.restartBtn} className='overBtn' >Restart </button>
            </div>
        </div>
    )
}
export {GameOver}