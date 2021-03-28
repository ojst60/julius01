import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withAuthenticator,AmplifyAuthenticator,AmplifySignOut , AmplifySignIn } from '@aws-amplify/ui-react';
import { Auth, Hub } from 'aws-amplify';
import Profile from './Profile';


const App = () => (
 <Profile />
);



export default withAuthenticator(App);
