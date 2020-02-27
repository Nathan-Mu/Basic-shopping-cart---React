import React from "react";
import TotalAmount from "./component/TotalAmount";
import Counters from "./component/Counters";

class App extends React.Component {
  state = {
    products: [
      { id: 1, name: "keyboard", price: 30, number: 10 },
      { id: 2, name: "mouse", price: 10, number: 10 },
      { id: 3, name: "monitor", price: 100, number: 0 },
      { id: 4, name: "usb drive", price: 60, number: 20 }
    ]
  };

  handleIncrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    // products[index] = { ...product, number: product.number + 1}
    products[index].number++;
    this.setState({ products });
  };

  handleDecrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].number--;
    this.setState({ products });
  };

  handleDelete = product => {
    const products = this.state.products.filter(product => product !== product);
    this.setState({ products });
  };

  handleReset = () => {
    const products = this.state.products.map(product => {
      if (product.number !== 0) {
        return {...product, number: 0};
      } else {
        return product;
      }

    });
    this.setState({products});
};

  render() {
    const { products } = this.state;
    return (
      <div>
        <TotalAmount products={products} />
        <button onClick={this.handleReset}>reset</button>
        {/*<Counters products={products} />*/}
      </div>
    );
  }
}

export default App;
