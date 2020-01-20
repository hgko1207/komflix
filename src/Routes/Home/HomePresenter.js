import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({ nowPalying, upcoming, popular, error, loading }) => null;

HomePresenter.propTypes = {
  nowPalying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default HomePresenter;
