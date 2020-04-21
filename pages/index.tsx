import { Container, Row } from 'reactstrap';

const createBox = (color: string) => (
  <div style={{
    height: '50px',
    width: '50px',
    backgroundColor: color,
    border: 'white 1px solid',
  }}>
  </div>
);

function SameGame() {
  return (
    <Container>
      { /* This is just a sample row, feel free to run with this visual system, or leverage your own */ }
      <Row>
        <div>{createBox('red')}</div>
        <div>{createBox('green')}</div>
        <div>{createBox('blue')}</div>
        <div>{createBox('yellow')}</div>
        <div>{createBox('black')}</div>
      </Row>
    </Container>
  );
}

export default SameGame;