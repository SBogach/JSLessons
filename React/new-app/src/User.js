function User({props}) {
    const res = props.map(function(item, index) {
        return <tr>
            <td>{item.name} </td>
            <td>{item.surn} </td>
            <td>{item.age}</td>
            </tr>
    });

    return <>
        {res}
    </>;
}

export default User;