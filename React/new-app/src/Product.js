import "./Product.css"

function Product({props}) {
    return <>
        <img className="topicImage" src={props.images[0].imageUrl}></img>
        <h4 className="topicTitle">${props.name}</h4>
        <p className="topicText">${props.description}</p>
    </>
}

export default Product;