
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Cards(props) {
  const [like, setLike] = useState(false)



  //funcion para cambiar entre true y false al estado de like
  function handlerlike() {
    setLike(!like)
  }

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img className="imgCel" variant="top" src={props.item.image} />
        <Card.Body>
          <div className='d-flex gap-2 '>
            <Card.Title>{props.item.title}</Card.Title>
            {like ? <FaHeart onClick={handlerlike}></FaHeart> : <FaRegHeart onClick={handlerlike} ></FaRegHeart>}
          </div>
          <Card.Text> {props.item.description} </Card.Text>
          <div>
            <Link to={`/detalle/${props.item.title}`} state={props.item}>
            <Button variant="primary">Mas info</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>

  )
}