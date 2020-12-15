import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Inbox from '../views/Inbox';

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={Inbox} />
    </Router>
  );
};

export default Routes;
