import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { FaRupeeSign, FaTrash } from 'react-icons/fa';
import './cartdetail.css';
import { useLocation } from 'react-router-dom'

export default function CartDetail(props) {

    const location = useLocation()

    return (
        <Container>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>ITEM</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            location.state.data.map(data =>
                                <tr>
                                    <td><img src={data.imgPath} className='table-img' /></td>
                                    <td>{data.itemName}</td>
                                    <td><FaRupeeSign className='rupeeIcon' />{data.cost}</td>
                                    <td><FaTrash className='deleteIcon' /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
    );
}
