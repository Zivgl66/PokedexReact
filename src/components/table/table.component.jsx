import MiniCardComponent from "../miniCard/miniCard.component";
import { Row, Col, Container } from "react-bootstrap";

const TableComponent = (props) => {
  const divStyle = {
    backgroundColor: "white",
    borderRadius: "50px",
  };

  return (
    <Container fluid style={divStyle}>
      <Row>
        {props.pokemonArr.map((pokemon, k) => (
          <Col key={k} xs={12} md={6} lg={4}>
            <MiniCardComponent pokemon={pokemon} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TableComponent;
