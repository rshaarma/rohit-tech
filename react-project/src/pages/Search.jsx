import React, { useState } from "react";
import axios from "axios";
import Searchbar from "../components/SearchBar";
import Pagination from "../components/Pagination";
// import Navbar from "../components/Navbar";

const Search = () => {
  const [apiData, setApiData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const nPages = Math.ceil(apiData.length / recordsPerPage);

  const pit =
    "i9W1AwELc2hi9W1AwELc2hha2VzcGVhcmUWaUNZMlJsZldTRGk3b1NEcjhWUFhzdwAWbUVKRHVTbHBUZmFEeEQ4dF81N3IwUQAAAAAAAAT18BZ1QS1rb2Q4RVNCT0JyTFdsOFU2UGdRAAEWaUNZMlJsZldTRGk3b1NEcjhWUFhzdwAAha2VzcGVhcmUWaUNZMlJsZldTRGk3b1NEcjhWUFhzdwAWbUVKRHVTbHBUZmFEeEQ4dF81N3IwUQAAAAAAAATw-xZ1QS1rb2Q4RVNCT0JyTFdsOFU2UGdRAAEWaUNZMlJsZldTRGk3b1NEcjhWUFhzdwAA";
  const search = "MC4wLDIwMjItMDktMTNUMTU6NTI6MDguNzY1WiwyOTQ1";
  const [pit_id, setPit_id] = useState(pit);
  const [search_after, setSearchAfter] = useState(search);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const { data: response } = await axios.get(
  //         `https://cosmic-junior-developer.eu.ngrok.io/shakespeare/search?term=${searchInput}&size=12`
  //       );
  //       setApiData(response);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [searchInput]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://cosmic-junior-developer.eu.ngrok.io/shakespeare/search?term=${searchInput}&size=12`
      )
      .then((response) => {
        setApiData(response.data.documents);
        setPit_id(response.data.pit.id);
        setSearchAfter(response.data.search_after);
        console.log(response.data.pit.id);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {/* <Navbar /> */}
      <Searchbar
        searchItems={searchItems}
        submitHandler={submitHandler}
        apiData={apiData}
      />

      {recordsPerPage > 10 ? (
        <Pagination
          apiData={apiData}
          nPages={nPages}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      ) : null}
    </>
  );
};

export default Search;
