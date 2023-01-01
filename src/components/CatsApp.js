import React from "react";
import API from "../services/api";
import CatsList from "./CatsList";
import SearchInput from "./SearchInput";

class CatsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      query: "",
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  componentDidMount() {
    API.get(`/breeds/`).then((res) => {
      const cats = res.data;
      this.setState({ cats });
    });
  }

  onSearchHandler = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    const filteredCats = this.state.query
      ? this.state.cats.filter((cat) =>
          cat.name.toLowerCase().includes(this.state.query.toLocaleLowerCase())
        )
      : this.state.cats;
    return (
      <>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between shadow-xl bg-white w-full py-5 px-10">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold">Cats Information 🐈</h1>
          <SearchInput onSearch={this.onSearchHandler} />
        </div>
        <CatsList cats={filteredCats} />
      </>
    );
  }
}

export default CatsApp;
