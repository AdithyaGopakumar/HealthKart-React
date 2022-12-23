import React from "react";
import axios from "axios";
import DisplayOrder from "./displayOrder";

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
        <DisplayOrder orderData={this.state.orders} />
      </>
    );
  }

  componentDidMount() {
    axios.get(`${orderApi}`).then((res) => {
      console.log(res.data, "this is data from order api");
      this.setState({ orders: res.data });
    });
  }
}

export default ViewOrders;
