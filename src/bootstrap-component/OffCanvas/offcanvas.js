import React, { useState } from "react";
import { Badge, Button, Card, Container, ListGroup, Offcanvas, Spinner } from "react-bootstrap";
import { FaRupeeSign, FaStar } from "react-icons/fa";
import './offcanvas.css';

export default function OffCanvasTrial(props) {
    const chinese = [
        { itemName: "Noodle", imgPath: 'veg-noodle.webp', desc: "Known as a South Indian staple food", rating: 4.5, cost: 100 },
        { itemName: "Chilli Baby Corn", imgPath: 'baby-corn.webp', desc: "Fermented food that is easy to digest", rating: 4.5, cost: 100 },
        { itemName: "Garlic Mushroom", imgPath: 'garlic-mushroom.webp', desc: "Prepared with rice, lentil, ghee and nuts", rating: 4.5, cost: 80 }
    ];
    const nonVeg = [
        { itemName: "Chicken Biryani", imgPath: 'hyderabadi-biryani.jpg', desc: "Served usually with a raita, or gravy by the side", rating: 4.5, cost: 250 },
        { itemName: "Chicken Curry & Rice", imgPath: 'chicken-curry.jpg', desc: "Known as roti, mainly serve with palya & curry", rating: 4.5, cost: 300 },
        { itemName: "Hyderabadi Biryani", imgPath: 'chicken-biryani.jpg', desc: "Eaten with saaru, helps in weight loss", rating: 4.5, cost: 200 }
    ];
    const northIndian = [
        { itemName: "Chana Masala & Puri", imgPath: 'chole-bhature.jpg', desc: "Served usually with a raita, or gravy by the side", rating: 4.5, cost: 250 },
        { itemName: "Paneer Butter Masala & Naan", imgPath: 'butter-paneer.jpg', desc: "Known as roti, mainly serve with palya & curry", rating: 4.5, cost: 300 },
        { itemName: "Daal Makhani & Paratha | Rice", imgPath: 'daal-makhni.jpg', desc: "Eaten with saaru, helps in weight loss", rating: 4.5, cost: 200 }
    ];
    const southIndian = [
        { itemName: "Dosa Chatni", imgPath: 'dosa.jpg', desc: "Known as a South Indian staple food", rating: 4.5, cost: 100 },
        { itemName: "Tomato Bath", imgPath: 'tomato-rice.webp', desc: "An aromatic, tasty and spicy one pot rice meal", rating: 4.5, cost: 150 },
        { itemName: "Idli Sambar", imgPath: 'idli-recipe.webp', desc: "Known as chitranna or nimmakaya pulihora", rating: 4.5, cost: 80 },
    ];
    const servies = [
        { name: "North Indian", link: 'link1', selected: [...northIndian] },
        { name: "South Indian", link: 'link2', selected: [...southIndian] },
        { name: "Non Veg", link: 'link3', selected: [...nonVeg] },
        { name: "Chinese", link: 'link4', selected: [...chinese] }
    ];
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState([...northIndian]);
    const [spinner, setSpinner] = useState(false);

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    function setCtg(res) {
        setSpinner(true);
        setCategory(res);
        setTimeout(() => {
            setSpinner(false);
        }, 2000);
        handleClose();
    }

    function addToCart(selectedItem) {
        props.setItem([...props.item, selectedItem]);
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center mb-4 header">
                <h1>Eat what you like the most...</h1>
                <Button variant="primary" onClick={handleShow}>Choose Category</Button>
            </div>
            <DishDetail category={category} spinner={spinner} addToCart={addToCart}/>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Choose the category</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup variant="flush" defaultActiveKey="#link1">
                        {
                            servies.map(data =>
                                <ListGroup.Item key={data.link}
                                    action href={'#' + data.link} onClick={(e) => setCtg(data.selected)}>
                                    {data.name}
                                </ListGroup.Item>
                            )
                        }
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function DishDetail(props) {

    return (
        <>
            {
                props.spinner ?
                    (
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            <SpinnerLoading />
                        </div>
                    ) :
                    (<Container className=''>
                        <div className=' d-flex flex-row flex-wrap justify-content-center card-wrapper'>
                            {
                                props.category.map(data =>
                                    <Card key={data.itemName}>
                                        <Card.Img variant='top' src={require(`../../images/${data.imgPath}`)} className='card-image' />
                                        <Card.Body>
                                            <Card.Title className='d-flex flex-row justify-content-between'>
                                                {data.itemName}
                                                <Badge bg="success">{data.rating}<FaStar className='star-icon' /></Badge>
                                            </Card.Title>
                                            <Card.Text className='d-flex flex-row justify-content-between'>
                                                <label className='card-desc'>{data.desc}</label>
                                                <label className='price-item'><FaRupeeSign />{data.cost}</label>
                                            </Card.Text>
                                            <div className='d-flex justify-content-center my-5'>
                                                <Button variant='primary' onClick={(e) => props.addToCart(data)}>Add to Cart</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                )
                            }
                        </div>
                    </Container>
                    )
            }
        </>
    );
}

function SpinnerLoading() {
    return (
        <Spinner animation="grow" role="status" variant="light">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
}

