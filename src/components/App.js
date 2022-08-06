import { useEffect } from "react";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";

import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";


const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return <div>
    <LoadingBar />
    {props.loading ? null : <Dashboard />}
  </div>;
};

const mapStateToProps = ({authedUser}) => (
  {
    loading: authedUser === null,
  }
);

export default connect(mapStateToProps)(App);
