import React from "react";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { storeComposeMail } from "../actions/compose.js";
import { requestApiData } from "../actions/inbox.js";

export class Folders extends React.Component {
  
  handleCompose(e) {}

  render() {
    return (
      <div className="folders vl">
        <NavLink
          className="composebtn outer"
          onClick={() => this.handleCompose()}
          to="/composemail"
        >
          <button className="btn composebtn">Compose</button>
        </NavLink>
        <div className="list-group">
          <br />
          <NavLink
            className="list-group-item"
            activeClassName="active"
            to="/inbox"
          >
            Inbox
          </NavLink>
          <NavLink
            className="list-group-item"
            activeClassName="active"
            to="/sent"
          >
            Sent Mail
          </NavLink>
          <NavLink
            className="list-group-item"
            activeClassName="active"
            to="/draft"
          >
            Draft
          </NavLink>
          <NavLink
            className="list-group-item"
            activeClassName="active"
            to="/trash"
          >
            Trash
          </NavLink>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ storeComposeMail, requestApiData }, dispatch);

export default connect(null, mapDispatchToProps, null, { pure: false })(
  Folders
);
