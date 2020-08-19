import React, { Component } from "react";
import { Form, Menu, Icon, TextArea, Message, Button } from "semantic-ui-react";

class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      showMessage: false,
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { title, description } = this.state;
    const { center, zoom, extent } = this.props;
    this.props.onAddBookmark({
      title,
      description,
      center,
      zoom,
      extent,
    });
    this.setState({ title: "", description: "", showMessage: true });
  }

  handleDismiss = () => {
    this.setState({ showMessage: false });
  };

  showMessage = () => {
    if (this.props.success === null) return;
    if (this.props.success == true) {
      return (
        <Message
          onDismiss={this.handleDismiss}
          color="green"
          header="Success!"
          content="Bookmark added successfully!"
        />
      );
    } else {
      return (
        <Message
          onDismiss={this.handleDismiss}
          color="red"
          header="Failed"
          content="Something happened you can't add bookmark"
        />
      );
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={(_) => this.handleSubmit()}>
          <Menu.Item as="a">
            <Form.Field>
              <label>Title</label>
              <input
                placeholder="Title"
                name="title"
                value={this.state.title}
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Field>
          </Menu.Item>
          <Menu.Item as="a">
            <Form.Field>
              <label>Description</label>
              <TextArea
                placeholder="Tell us more"
                name="description"
                value={this.state.description}
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Field>
          </Menu.Item>
          <Menu.Item as="a">
            <Button loading={this.props.btn_loading} type="submit">
              <Icon name="add circle" />
              Add
            </Button>
          </Menu.Item>
        </Form>
        {this.state.showMessage && this.showMessage()}
      </div>
    );
  }
}

export default CustomForm;
