function Product({props}) {
    const res = props?.map(function(item, index) {
        return
        <>
        LOL
            //<img class="topicImage" src="https://placehold.co/300x200"></img>;
            //<h4 class="topicTitle">${item.name}</h4>;
            //<p class="topicText">${item.description}</p>;
        </>
    });

    return <>
        {res}
    </>;
}

export default Product;