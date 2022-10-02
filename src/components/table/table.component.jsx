import MiniCardComponent from "../miniCard/miniCard.component";
import { Row, Col, Container } from "react-bootstrap";


const TableComponent = (props) => {
  const divStyle = {
    backgroundColor: "white",
    borderRadius: "25px",
    padding: "10px",
    marginTop: "10px",
  };


  return (
    <Container fluid style={divStyle}>
      <Row>
        {props.pokemonArr.map((pokemon, k) => (
          <Col key={k + pokemon} xs={12} md={6} lg={3}>
            <MiniCardComponent pokemon={pokemon} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TableComponent;
