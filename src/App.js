import { WithAuthenticator,} from '@aws-amplify/ui-react';
import Profile from './Profile';


const App = () => (
  <Profile />
 
);



export default WithAuthenticator(App);
