import React from "react";
import axios from "axios";
import "../listing page/listing.css";
import BrandsListingDisplay from "./brandsListingDisplay";
const BrandslistingURL =
  "https://healthkart-render-api.onrender.com/allproducts?brandId=";
// const brandURL = "https://healthkart-render-api.onrender.com/brands";

class BrandListingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brandProductList: "",
      brand: "",
    };
  }

  render() {
    return (
      <>
        <div className="brand-container">
          <div className="container">
            <div className="row">
              <div className="col col-xl-3">
                <h2>Browse by</h2>
                <div class="categories">
                  <h3>Category</h3>
                  <div class="options-container">
                    <div class="option-container">
                      <input
                        class="category"
                        id="protein"
                        type="radio"
                        name="Protien"
                      />
                      <label for="protein" class="option-text">
                        Protein
                      </label>
                    </div>
                    <div class="option-container">
                      <input
                        class="category"
                        id="gainer"
                        type="radio"
                        name="gainer"
                      />
                      <label for="gainer" class="option-text">
                        Gainer
                      </label>
                    </div>
                    <div class="option-container">
                      <input
                        class="category"
                        id="supplements"
                        type="radio"
                        name="supplements"
                      />
                      <label for="supplements" class="option-text">
                        Supplements
                      </label>
                    </div>
                    <div class="option-container">
                      <input
                        class="category"
                        id="creatine"
                        type="radio"
                        name="creatine"
                      />
                      <label for="creatine">Creatine</label>
                    </div>
                    <div class="option-container">
                      <input
                        class="category"
                        id="pre-workout"
                        type="radio"
                        name="pre-workout"
                      />
                      <label for="pre-workout">Pre-Workout</label>
                    </div>
                  </div>
                </div>
                <div class="prices">
                  <h2>Filter by</h2>
                  <h3>Price</h3>
                  <div class="options-container">
                    <div class="option-container">
                      <input
                        class="prices-option"
                        id="lowToHigh"
                        type="radio"
                        name="lowToHigh"
                      />
                      <label for="lowToHigh">Low to High cost</label>
                    </div>
                    <div class="option-container">
                      <input
                        class="prices-option"
                        id="highToLow"
                        type="radio"
                        name="highToLow"
                      />
                      <label for="highToLow">High to Low cost</label>
                    </div>
                    <div class="option-container">
                      <input
                        class="prices-option"
                        id="lessThan1000"
                        type="radio"
                        name="lessThan1000"
                      />
                      <label for="lessThan1000">Less than Rs.1000</label>
                    </div>
                    <div class="option-container">
                      <input
                        class="prices-option"
                        id="lessThan2000"
                        type="radio"
                        name="lessThan2000"
                      />
                      <label for="lessThan2000">Less than Rs.2000</label>
                    </div>
                    <div class="option-container">
                      <input
                        class="prices-option"
                        id="lessThan3000"
                        type="radio"
                        name="lessThan3000"
                      />
                      <label for="lessThan3000">Less than Rs.3000</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-xl-9">
                <div className="container products">
                  <div className="row">
                    <>
                      <h1 className="brand">
                        Popular picks from {this.state.brand}
                      </h1>
                      <BrandsListingDisplay
                        listData={this.state.brandProductList}
                      />
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    let brandId = this.props.match.params.brandId;

    sessionStorage.setItem("brandId", brandId);
    axios.get(`${BrandslistingURL}${brandId}`).then((res) => {
      this.setState({ brandProductList: res.data });
      // console.log(res.data, `${BrandslistingURL}${brandId}`);
      this.setState({ brand: res.data[0].brand });
    });
    // axios.get(`${brandURL}`).then((res) => {
    //   this.setState({
    //     brand: res.data.filter((item) => {
    //       console.log(brandId);
    //       return item.brand_id === brandId;
    //     }),
    //   });
    //   console.log(
    //     res.data.filter((item) => {
    //       return item.brand_id === 2;
    //     })
    //   );
    // });
  }
}
// console.log(this.state);
export default BrandListingPage;
