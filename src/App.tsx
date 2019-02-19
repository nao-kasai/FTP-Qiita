import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { inject, observer } from 'mobx-react';

import Top from "./pages/Top";
import MyPage from "./pages/MyPage";

import './App.css';

@inject('routing')
@observer
class App extends Component<any, any> {
  render() {

    return (
      <div>
        <Switch location={this.props.location}>
          <Route path="/" exact component={Top} />
          <Route path="/mypage" exact component={MyPage} />
        </Switch>
      </div>
    );
  }
}

// ※これ書かないとページ遷移できても、画面がレンダーされない！
export default withRouter(App);
