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
import { AllSpots } from "./components/AllSpots";



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
          <Route exact path="/spots">
            <AllSpots />
          </Route>
          <Route exact path="/signup">
            <SignUpForm />
          </Route>
          <Route path='/spots/:spotId'>
            <IndividualSpot />
          </Route>
          <Route path="/host-property">
            <MainHostForm />
          </Route>
          <Route path={`/users/:userId/spots`}>
            <UserSpots />
          </Route>
          <Route path={`/users/:userId/spot/edit/:spotId`}>
            <LaodingData />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
