const Card = ({ data }) => {

    const {
        name,
        image,
        position,
        biography
    } = data
    return (
        <div className="card">
            <h3>{name}</h3>
            <img src={image} alt="" />
            <h4 className="re">{position}</h4>
            <p>{biography}</p>
        </div>
    )
}

export default Card
