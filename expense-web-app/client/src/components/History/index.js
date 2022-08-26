import { Container } from '../../global/styles/Global.style'
import { Row } from './History.style'
import Transaction from '../Transaction';

const History = () => {
   return (
      <Container>
         <Row>
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
         </Row>
      </Container>
   );
}

export default History;
