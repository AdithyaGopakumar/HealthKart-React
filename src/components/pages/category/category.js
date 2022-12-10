import React from "react";
const categoryURL = "https://healthkart-render-api.onrender.com/categories";

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: "",
    };
  }
  getCategories = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <>
            <div>
              <a href="#">{item.category}</a>
            </div>
          </>
        );
      });
    }
  };

  render() {
    return <>{this.getCategories(this.state.categories)}</>;
  }

  componentDidMount() {
    fetch(categoryURL, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ categories: data });
      });
  }
}

export default Categories;
