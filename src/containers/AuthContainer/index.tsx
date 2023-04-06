import { useDispatch, useSelector } from 'react-redux';
import AuthPages from '../../components/pages/AuthPages';
import { UserSelectors } from 'store';
import { useNavigate } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';
import { UserSliceActions } from 'store/slice/users';
import PageWrapper from 'components/common/PageWrapper';

type AuthContainerPropsType = {
  children?: ReactNode;
}

const AuthContainer = ({}: AuthContainerPropsType) => {
  const loading = useSelector(UserSelectors.getUserLoading);
  const token = useSelector(UserSelectors.getUserToken);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && token !== 'error') {
      navigate('/');
      dispatch(UserSliceActions.setUserLoading(false));
    }
    if (token === 'error') {
      dispatch(UserSliceActions.setUserLoading(false));
    }
  }, [token]);

  return loading ? <h1>Загрузка...</h1> : <AuthPages />;
};

export default AuthContainer;
