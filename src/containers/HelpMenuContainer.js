import React from "react";
import { connect } from "react-redux";
import HelpMenu from "../components/HelpMenu";
import { showToast } from "../actions/toastActions";

const HelpMenuContainer = props => {
  return (
    <HelpMenu {...props} />
  );
};

export default connect(
  null,
  {
    showToast
  }
)(HelpMenuContainer);