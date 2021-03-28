import { withAuthenticator,} from '@aws-amplify/ui-react';
import Profile from './Profile';


const App = () => (
  <Profile />
 
);



export default withAuthenticator(App);
