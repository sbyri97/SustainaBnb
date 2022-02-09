import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import SignUpForm from "./components/SignUpForm";
import * as sessionActions from './store/session'
import Navigation from "./components/Navigation";
import MainHostForm from "./components/HostForm/";
import EditHostForm from "./components/EditForm";
import UserSpots from "./components/UserListings";
import IndividualSpot from './components/IndividualSpot'



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreSession())
    .then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/host-property">
            <MainHostForm />
          </Route>
          <Route path={`/api/users/:userId/spots`}>
            <UserSpots />
          </Route>
          <Route path={`/api/users/:userId/spot/edit/:spotId`}>
            <EditHostForm />
          </Route>
          <Route path='/spot/:spotId'>
            <IndividualSpot />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
