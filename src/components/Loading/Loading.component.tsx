import LoadingBall from '../../images/pokeball_loading.gif';
import { DivLoadingBall } from './Loading.style';

const Loading = () => {
  return (
    <DivLoadingBall>
      <img src={LoadingBall} alt='pokeball spinning'/>   
    </DivLoadingBall>
  );
};

export default Loading;
