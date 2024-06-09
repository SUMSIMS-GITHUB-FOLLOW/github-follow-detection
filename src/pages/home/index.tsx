import { HomeContainer } from './styles';
import { Button } from '@atoms';
import Input from '../../components/atoms/Input';

const index = () => {
  return (
    <HomeContainer>
      <h1>홈 입니당.</h1>
      <Button label="버튼1" />
      <Button label="버튼2" />
      <Button label="버튼3" />
      <Input />
    </HomeContainer>
  );
};

export default index;
