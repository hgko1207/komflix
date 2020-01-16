import React, { Component } from "react";
import HomePresenter from "./HomePresenter";

export default class HomeContainer extends Component {
  state = {
    nowPalying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  render() {
    const { nowPalying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPalying={nowPalying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
