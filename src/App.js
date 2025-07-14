import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import productsData from "./data/productsData";
import Products from "./components/Products";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import ShowFullProduct from "./components/ShowFullProduct";
import OrderForm from "./components/OrderForm";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData,
      currentProducts: productsData,
      orders: [],
      showFullProduct: false,
      fullProduct: {},
      isOrderFormOpen: false,
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.state.currentProducts = this.state.products;
    this.onShowProduct = this.onShowProduct.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.toggleOrderForm = this.toggleOrderForm.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Slider />
        <Header
          orders={this.state.orders}
          onDelete={this.deleteOrder}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          toggleOrderForm={this.toggleOrderForm}
        />
        <Categories chooseCategory={this.chooseCategory} />
        <Products
          products={this.state.currentProducts}
          onAdd={this.addToOrder}
          onShowProduct={this.onShowProduct}
        />

        {this.state.showFullProduct && (
          <ShowFullProduct
            product={this.state.fullProduct}
            onAdd={this.addToOrder}
            onShowProduct={this.onShowProduct}
          />
        )}
        {this.state.isOrderFormOpen && (
          <OrderForm onClose={this.toggleOrderForm} />
        )}
        <AboutUs />
        <Contacts />
        <Footer />
      </div>
    );
  }

  onShowProduct(product) {
    this.setState({ fullProduct: product });
    this.setState({
      showFullProduct: !this.state.showFullProduct,
    });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentProducts: this.state.products });
      return;
    } else {
      this.setState({
        currentProducts: this.state.products.filter(
          (el) => el.category === category
        ),
      });
    }
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(product) {
    const existingProduct = this.state.orders.find(
      (el) => el.id === product.id
    );

    if (existingProduct) {
      this.setState({
        orders: this.state.orders.map((el) =>
          el.id === product.id
            ? { ...el, quantity: el.quantity + (product.quantity || 1) }
            : el
        ),
      });
    } else {
      this.setState({
        orders: [
          ...this.state.orders,
          { ...product, quantity: product.quantity || 1 },
        ],
      });
    }
  }

  increaseQuantity = (id) => {
    this.setState({
      orders: this.state.orders.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity + 1 } : el
      ),
    });
  };

  decreaseQuantity = (id) => {
    this.setState({
      orders: this.state.orders
        .map((el) => (el.id === id ? { ...el, quantity: el.quantity - 1 } : el))
        .filter((el) => el.quantity > 0),
    });
  };

  toggleOrderForm() {
    this.setState((prevState) => ({
      isOrderFormOpen: !prevState.isOrderFormOpen,
    }));
  }
}
export default App;
