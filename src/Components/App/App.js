import React, { Component } from "react";
import Menu from "../Menu/Menu";
import faker from "faker";
import Button from "../Button/Button";
import List from "../List/List";
class App extends Component {
  state = {
    items: [],
  };

  addItem = () => {
    this.setState((state) => ({
      items: [
        ...state.items,
        { id: faker.random.uuid(), text: faker.lorem.words(5) },
      ],
    }));
  };

  removeItem = (id) => {
    this.setState((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <Menu />
        <hr />
        <Button label="Add item" onCLick={this.addItem} />
        <hr />
        <List items={items} onDelete={this.removeItem}   />
      </div>
    );
  }
}

export default App;