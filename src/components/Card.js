
function Card(props) {
    const { title, decs } = props;
    return <div className='card'>
        <h3 className='cardTittle'>{title}</h3>
        <p className='cardBody'>{decs}</p>
        <p className='cardFotter'>20/20/2099</p>
    </div>
}

export default Card;