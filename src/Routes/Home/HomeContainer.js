import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class HomeContainer extends Component {
  state = {
    nowPalying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPalying }
      } = await moviesApi.nowPalying();
      const upcoming = await moviesApi.upcoming();
      console.log(upcoming);
      this.setState({ nowPalying: nowPalying });
    } catch (error) {
      this.setState({ error: "Can't find movies information." });
    } finally {
      this.setState({ loading: false });
    }
  }

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
