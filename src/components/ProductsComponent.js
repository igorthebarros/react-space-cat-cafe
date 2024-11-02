import React, { useState } from 'react';

const Proudcts = () => {


    const productsDataImages = {
        sandwiches: [],
        brownies: [],
        cakes: []
    }

    const [showModal, setShowModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const { choice } = useUserChoice()
    const productChosenByUser = productsDataImages[choice] || productsDataImages.sandwiches

    const handleProductClick = (product) => {
        setSelectedProduct(product)
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
        setSelectedProduct(null)
    }

    return (
        <Container className='mt-5'>
            <Row>
                {productChosenByUser.map((ps, index) => (
                    <Col md={4} key={index} className='mb-4'>
                        <Card className='photo-card' onClick={() => handleCardClick(ps)}>
                            <Card.Img variant='top' src={ps.principal_photo} />
                            <Card.Body>
                                <Card.Title>{ps.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}