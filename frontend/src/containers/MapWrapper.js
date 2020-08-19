import React, { Component } from "react";
import { connect } from "react-redux";

import {
  bookmarkChangeView,
  resetView,
  mapChangeView,
  bookmarkListView,
  addBookmark,
} from "../store/actions/map";

import CustomForm from "../components/Form";
import CustomList from "../components/List";

import MyMap from "../components/Map";
import { Grid, Icon, Menu, Segment, Sidebar, Radio } from "semantic-ui-react";

class MapWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  toggleVisible() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    const { visible } = this.state;
    return (
      <Grid columns={1}>
        <Grid.Column>
          <Radio
            toggle
            label="Add Bookmark"
            checked={visible}
            onChange={() => this.toggleVisible()}
          />
        </Grid.Column>

        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              onHide={() => this.setState({ visible: false })}
              vertical
              width="wide"
              visible={visible}
            >
              <Menu.Item as="a">
                <Icon name="bookmark" />
                Bookmark
              </Menu.Item>
              {/* FORM */}
              <CustomForm {...this.props} />
            </Sidebar>
            <Sidebar
              as={Menu}
              animation="overlay"
              direction="right"
              inverted
              vertical
              visible={visible}
            >
              {/* LIST */}
              <CustomList
                {...this.props}
                onBookmarkChangeView={(id) =>
                  this.props.onBookmarkChangeView(id)
                }
              />
            </Sidebar>

            <Sidebar.Pusher dimmed={visible}>
              <Segment basic>
                {/* MAP */}
                <MyMap {...this.props} />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    center: state.MapReducer.center,
    zoom: state.MapReducer.zoom,
    extent: state.MapReducer.extent,
    bookmark_list: state.MapReducer.bookmark_list,
    btn_loading: state.MapReducer.btn_loading,
    success: state.MapReducer.success,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBookmarkChangeView: (id) => dispatch(bookmarkChangeView(id)),
    onMapChangeView: (val) => dispatch(mapChangeView(val)),
    onBookmarkListView: () => dispatch(bookmarkListView()),
    onAddBookmark: (obj) => dispatch(addBookmark(obj)),
    onResetView: () => dispatch(resetView()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper);
