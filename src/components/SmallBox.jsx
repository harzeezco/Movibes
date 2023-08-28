import Row from '../UI/Row';
import { SmallBoxStyles } from '../UI/SmallBoxStyle';

const SmallBox = () => {
  return (
    <Row justify="center" paddingTop="large">
      <SmallBoxStyles>
        <Row>
          <div></div>
          <h4>
            Start watching <br /> and earn <br /> free tickets
          </h4>

          <p>50k people are watching now</p>

          <button>Start Watching</button>
        </Row>
      </SmallBoxStyles>
    </Row>
  );
};

export default SmallBox;
