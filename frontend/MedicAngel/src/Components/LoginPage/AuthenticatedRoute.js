import { Route, Redirect } from 'react-router-dom';

export default function AuthenticatedRoute(props) {
  return sessionStorage.getItem('user') === null ?   <Redirect to='/login'/> : <Route {...props} />   ;
}
