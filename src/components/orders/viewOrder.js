import React from "react";
import axios from "axios";
import DisplayOrder from "./displayOrder";
import Header from "../HeaderFooter/header";

const orderApi = "http://localhost:8700/orders";

class ViewOrders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: "",
    };
  }

  render() {
    return (
      <>
        <Header />
        <DisplayOrder orderData={this.state.orders} />
      </>
    );
  }

  componentDidMount() {
    let sessionData = sessionStorage.getItem("userData")
      ? sessionStorage.getItem("userData").split(",")
      : [];

    axios.get(`${orderApi}`).then((res) => {
      console.log(res.data, "this is data from order api");
      this.setState({ orders: res.data });
    });
  }
}

export default ViewOrders;
