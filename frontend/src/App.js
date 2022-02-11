import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import SignUpForm from "./components/SignUpForm";
import * as sessionActions from './store/session'
import Navigation from "./components/Navigation";
import MainHostForm from "./components/HostForm/";
import UserSpots from "./components/UserListings";
import IndividualSpot from './components/IndividualSpot'
import LaodingData from "./components/EditForm";



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
          <Route path='/spot/:spotId'>
            <IndividualSpot />
          </Route>
          <Route path="/host-property">
            <MainHostForm />
          </Route>
          <Route path={`/api/users/:userId/spots`}>
            <UserSpots />
          </Route>
          <Route path={`/api/users/:userId/spot/edit/:spotId`}>
            <LaodingData />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
