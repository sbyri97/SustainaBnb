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
import MainPage from "./components/MainPage";
import SimpleMap from "./components/Map";
import { Paris } from "./components/CitySpots/paris";
import { JoshuaTree } from "./components/CitySpots/joshuaTree";
import { Copenhagen } from "./components/CitySpots/copenhagen";
import { Amsterdam } from "./components/CitySpots/amsterdam";
import MyAccount from "./components/UserAccount/account";
import AboutMe from "./components/AboutMe/aboutme";




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
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route exact path="/spots">
            <AllSpots />
          </Route>
          <Route exact path="/signup">
            <SignUpForm />
          </Route>
          <Route exact path={`/spots/:spotId`}>
            <IndividualSpot />
          </Route>
          <Route exact path='/spots/spotsbycity/Paris'>
            <Paris />
          </Route>
          <Route exact path='/spots/spotsbycity/Joshua Tree'>
            <JoshuaTree />
          </Route>
          <Route exact path='/spots/spotsbycity/Copenhagen'>
            <Copenhagen />
          </Route>
          <Route exact path='/spots/spotsbycity/Amsterdam'>
            <Amsterdam />
          </Route>
          <Route exact path="/host-property">
            <MainHostForm />
          </Route>
          <Route exact path={`/users/:userId`}>
            <MyAccount />
          </Route>
          <Route exact path={`/users/:userId/spots`}>
            <UserSpots />
          </Route>
          <Route exact path={`/users/:userId/spot/edit/:spotId`}>
            <LaodingData />
          </Route>
          <Route exact path='/aboutme'>
            <AboutMe />
          </Route>
          <Route>
            <h2 style={{marginTop: "60px"}}>404 Error! Go Back</h2>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
