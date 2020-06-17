import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./App.scss"
/* import Button, Content and custom class TutorialHeader */
import { Button } from "carbon-components-react";
import { Content } from "carbon-components-react/lib/components/UIShell";
import TutorialHeader from "./components/TutorialHeader";
/* import contant pages */
import { Route, Switch } from "react-router-dom";
import LandingPage from "./content/LandingPage";
import RepoPage from "./content/RepoPage";

function App() {
  return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
  );
}

export default App;
