import "./Product.css"

function Product({props, onChangeCount}) {

    const onChange = () => {
        onChangeCount(props.id);
    }

    return <>
        <img className="topicImage" src={props.images[0].imageUrl ? props.images[0].imageUrl : 'LOL'}></img>
        <h4 className="topicTitle">{props.name}</h4>
        <p className="topicText">{props.description}</p>
        <button className="topicButton" onClick = {onChange}>Добавить в корзину</button>
    </>
}

export default Product;