import React from "react"
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Button } from "../styles/theme/styledComponents"
import * as s from "../styles/Sidebar.styles"

const SidebarLink = ({ to, displayName, pathname }) => (
  <Button className={pathname === to ? "btn-inverted" : ""}>
    <Link to={to}>
      <i className="fa fa-heart" />
    </Link>
    <Link to={to}>{displayName}</Link>
  </Button>
)

const Sidebar = ({ location, isSidebarOpen }) => {
  return (
    <s.SidebarStyles>
      <div className={`sidebar-links ${isSidebarOpen && "open"}`}>
        {/* <div style={{ marginLeft: "2rem" }}>App:</div> */}
        <SidebarLink
          to="/app"
          displayName="Dashboard"
          pathname={location.pathname}
        />
        <SidebarLink
          to="/app/trip/create"
          displayName="Create a new trip"
          pathname={location.pathname}
        />
        <SidebarLink
          to="/app/trips"
          displayName="Trips"
          pathname={location.pathname}
        />
        <SidebarLink
          to="/app/trips/archived"
          displayName="Archived Trips"
          pathname={location.pathname}
        />
        <SidebarLink
          to="/app/billing"
          displayName="Billing"
          pathname={location.pathname}
        />
        <SidebarLink
          to="/app/settings"
          displayName="Settings"
          pathname={location.pathname}
        />
        {/* <div style={{ marginLeft: "2rem" }}>Pages:</div> */}
        <SidebarLink
          to="/"
          displayName="Landing Page"
          pathname={location.pathname}
        />
        <SidebarLink
          to="/login"
          displayName="Login"
          pathname={location.pathname}
        />
        <SidebarLink
          to="/register"
          displayName="Register"
          pathname={location.pathname}
        />
      </div>
    </s.SidebarStyles>
  )
}

const mapStateToProps = state => ({
  isSidebarOpen: state.navigation.isSidebarOpen
})

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Sidebar)
)
