import { Button, Container, Nav, Navbar, OverlayTrigger, Popover } from 'react-bootstrap';
import { FaAddressBook, FaHome, FaInfoCircle, FaListAlt, FaRupeeSign, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './pageheader.css';

export default function PageHeader(props) {

    const popover = (
        <Popover id="cart-popover">
            <Popover.Body>
                {
                    props.item.length > 0 ?
                        <>
                            <div className="popover-content">
                                {
                                    props.item.map(data =>
                                        <div className="pop-body">
                                            <div className="specification">
                                                <div className="image">
                                                    <img src={data.imgPath} />
                                                </div>
                                                <div className="detail">
                                                    <h3>{data.itemName}</h3>
                                                    <p><FaRupeeSign />{data.cost}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="popover-footer">
                                <div className="total-detail d-flex justify-content-between">
                                    <h3>Order subtotal</h3>
                                    <h3><FaRupeeSign />
                                    {
                                        props.item.reduce((acc, element) => acc + element.cost, 0)
                                    }
                                    </h3>
                                </div>
                                <Button>
                                    <NavLink to="/cart" state={{ data: props.item }}>View Cart</NavLink>
                                </Button>
                            </div>
                        </> :
                        <>
                            <div className="no-data">
                                <h6>No item data</h6>
                            </div>
                        </>
                }
            </Popover.Body>
        </Popover>
    )

    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                <Container className="">
                    <Navbar.Brand href="#home" className='d-flex flex-column align-items-center'>
                        <img src="food-logo.png" width="30" height="30" className="d-inline-block me-2"
                            alt="logo" />
                        <label>Food Crave</label>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="container-fluid justify-content-betweenl">
                        <Nav className="me-auto ms-3 pe-4">
                            <Nav.Link>
                                <NavLink to="/" className="mx-3 d-flex justify-content-center align-items-center">
                                    <FaHome className="nav-item-icon" /><span>Home</span>
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to="/about" className="mx-3 d-flex justify-content-center align-items-center">
                                    <FaInfoCircle className="nav-item-icon" /><span>About</span>
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to="/category" className="mx-3 d-flex justify-content-center align-items-center">
                                    <FaListAlt className="nav-item-icon" /><span>Category</span>
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to="/contact" className="mx-3 d-flex justify-content-center align-items-center">
                                    <FaAddressBook className="nav-item-icon" /><span>Contact</span>
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                        <OverlayTrigger trigger="click" key="right" placement="bottom" overlay={popover} rootClose>
                            <a href="#" className="cart position-relative d-inline-flex" aria-label="View your shopping cart">
                                <FaShoppingCart className="cart-basket" />
                                <span className="cart-count d-flex align-items-center justify-content-center">
                                    {props.item.length}
                                </span>
                            </a>
                        </OverlayTrigger>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}