import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { quoteAPI } from "../provider/api";
import { addKanyeQuote } from "../redux/action";
import { QuotesList } from "./index";

export default function KanyeQuoteView() {
  const dispatch = useDispatch();
  const [currentKanyeQuote, setCurrentKanyeQuote] = useState("");
  const kanyeQuoteList = useSelector((state) => state.kanyeQuotes);

  const fetchKanyeQuote = useCallback(async () => {
    try {
      const { data } = await quoteAPI.get();
      setCurrentKanyeQuote(data.quote);
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  useEffect(() => {
    fetchKanyeQuote();
  }, [fetchKanyeQuote]);

  const addFavoriteKanyeQuote = () => {
    const sameKanyeQuote = kanyeQuoteList.filter(
      (kanyeQuote) => kanyeQuote === currentKanyeQuote,
    );
    if (!sameKanyeQuote.length) {
      dispatch(addKanyeQuote(currentKanyeQuote));
    }
  };

  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quotes</h1>

      <h3>{currentKanyeQuote.length > 0 && currentKanyeQuote}</h3>
      <button onClick={() => fetchKanyeQuote()}>Get Quote</button>
      <button onClick={() => addFavoriteKanyeQuote()}>Add Favorite</button>
      {kanyeQuoteList.length > 0 && <QuotesList quotes={kanyeQuoteList} />}
    </section>
  );
}
