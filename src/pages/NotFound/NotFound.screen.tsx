import { useNavigate } from 'react-router-dom';
import { NotButton, NotFoundContainer, NotTitle } from './NotFound.style';
import PikachuNot from '../../images/pikachu_404.gif';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <NotTitle>No pokémon on this page.</NotTitle>
      <img src={PikachuNot} alt="pikachu say no" />
      <NotButton onClick={() => navigate('/')}>Go home!</NotButton>
    </NotFoundContainer>
  );
};

export default NotFound;
