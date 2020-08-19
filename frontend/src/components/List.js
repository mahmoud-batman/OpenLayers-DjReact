import React, { Component } from "react";
import { Icon, Menu, Button } from "semantic-ui-react";

class CustomList extends Component {
  componentDidMount() {
    this.props.onBookmarkListView();
  }

  render() {
    return (
      <div>
        <Menu.Item header>
          <Icon name="list" />
          Bookmark List
        </Menu.Item>
        {this.props.bookmark_list.map((item) => (
          <Menu.Item
            key={item.id}
            as="a"
            onClick={() => this.props.onBookmarkChangeView(item.id)}
          >
            <Icon name="bookmark" />
            {item.title}
          </Menu.Item>
        ))}

        <Menu.Item as="a">
          <Button onClick={() => this.props.onResetView()}>
            <Icon name="repeat" />
            Reset
          </Button>
        </Menu.Item>
      </div>
    );
  }
}
export default CustomList;
