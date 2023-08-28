import Row from '../UI/Row';
import Button from './Button';

const LinkList = ({ items }) => {
  return (
    <Button key={items.id}>
      <Row direction="default">
        <span>{items.icon}</span>
        <span>{items.text}</span>
      </Row>
    </Button>
  );
};

export default LinkList;
