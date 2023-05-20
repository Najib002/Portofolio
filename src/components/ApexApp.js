import React from "react";
import API from "../services/api";
import ApexList from "./ApexList";
import SearchInput from "./SearchInput";
import ScrollToTopButton from "./ScrollToTopButton";

class ApexApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apexDatas: [],
      query: "",
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  componentDidMount() {
    API.get(`/data.json`).then((res) => {
      const apexDatas = res.data.sort((a, b) => (a.home > b.home ? 1 : -1));
      this.setState({ apexDatas });
    });
  }

  onSearchHandler = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    const filteredApexs = this.state.query
      ? this.state.apexDatas.filter(
          (apex) =>
            apex.name
              .toLowerCase()
              .includes(this.state.query.toLocaleLowerCase()) ||
            apex.home
              .toLowerCase()
              .includes(this.state.query.toLocaleLowerCase())
        )
      : this.state.apexDatas;
    return (
      <>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between shadow-xl bg-white w-full py-5 px-10">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold">
            Apex Legends 🎮
          </h1>
          <SearchInput onSearch={this.onSearchHandler} />
        </div>
        <ApexList apexs={filteredApexs} />
        <ScrollToTopButton />
      </>
    );
  }
}

export default ApexApp;
