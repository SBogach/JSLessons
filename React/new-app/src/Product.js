import "./Product.css"

function Product({props, onChangeCount, count}) {

    const onChange = () => {
        onChangeCount(props.id);
    }

    return <>
        <img className="topicImage" src={props.images[0].imageUrl ? props.images[0].imageUrl : 'LOL'}></img>
        <h4 className="topicTitle">{props.name}</h4>
        <span className="topicTitle">{props.price}$</span>
        <p className="topicText">{props.description}</p>
        {count ? 'asdfsafd' : <button className="topicButton" onClick = {onChange}>Добавить в корзину</button>}
        
    </>
}

export default Product;