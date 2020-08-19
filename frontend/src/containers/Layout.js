import React, { Component } from "react";
import { Layout, Typography } from "antd";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import logo from "../logo.png";
import avatar from "../elliot.jpg";
const { Content, Footer } = Layout;
const { Text } = Typography;

class CustomLayout extends Component {
  render() {
    const { user, isAuthenticated } = this.props;

    return (
      <div>
        <Layout className="layout">
          <div className="ui inverted menu">
            <div className="item">
              <NavLink to="/">
                <img src={logo} alt="logo" style={{ height: "3rem" }} />
              </NavLink>
            </div>
            <div className="right menu">
              {isAuthenticated ? (
                <>
                  <div className="item">
                    <div>
                      <NavLink to="/">
                        <div className="ui avatar right spaced  image">
                          <img alt="avatar" src={avatar} />
                        </div>
                        <Text code style={{ color: "lightgrey" }}>
                          {user}
                        </Text>
                      </NavLink>
                    </div>
                  </div>
                  <NavLink
                    className="item"
                    to="/"
                    onClick={(_) => this.props.logout()}
                  >
                    Logout
                  </NavLink>
                </>
              ) : (
                <div className="item">
                  <NavLink to="/login/">Login</NavLink>
                </div>
              )}
            </div>
          </div>

          <Content style={{ padding: "0 50px" }}>
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.AuthReducer.user,
    isAuthenticated: state.AuthReducer.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomLayout);
