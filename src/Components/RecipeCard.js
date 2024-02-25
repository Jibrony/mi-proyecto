import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import recipes from '../recipes'; // Asegúrate de tener la ruta correcta al archivo de recetas
import './RecipeCardDesign.css'; // Asegúrate de tener la ruta correcta al archivo de estilos

function RecipeCards() {
    return (
        <Container>
            {chunkArray(recipes, 4).map((row, rowIndex) => (
                <Row key={rowIndex} className='fila'>
                    {row.map((recipe, colIndex) => (
                        <Col key={colIndex} md={3}>
                            <Card style={{ width: '100%', height: '100%' }}>
                                <div className="card-image-wrapper">
                                    <Card.Img variant="top" src={recipe.imagen} className="img-product" />
                                </div>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "30px" }}>
                                        <strong>
                                            {recipe.nombre}
                                        </strong>
                                    </Card.Title>
                                    <Card.Text style={{ fontSize: '20px'}}>
                                        {recipe.descripcion}
                                    </Card.Text>
                                    <div className="button-container">
                                        <Button variant="primary">Ver receta</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
}

function chunkArray(array, size) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
        chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
}

export default RecipeCards;


