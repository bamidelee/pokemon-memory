import './styles/tiles.css'
function Tiles (prop){
    return (

        <div className='imageContainer'>
        
            {prop.spliceTile.map((tile) => <img key={tile.id} src={tile.sprites.front_default} alt={tile.forms[0].name} onClick={prop.shuffle} className='image' />)}
        </div>
    )
}
export {Tiles};