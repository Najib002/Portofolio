import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { QuotesList } from "./index";
import { addMyQuote } from "../redux/action";

export default function PersonalQuoteView() {
  const dispatch = useDispatch();
  const myQuoteList = useSelector((state) => state.myQuotes);
  const [myQuoteInputValue, setMyQuoteInputValue] = useState("");

  const submitNewPersonalQuote = (e) => {
    e.preventDefault();
    const samePersonalQuote = myQuoteList.filter(
      (myQuote) => myQuote === myQuoteInputValue,
    );
    if (myQuoteInputValue.length > 0 && !samePersonalQuote.length) {
      dispatch(addMyQuote(myQuoteInputValue));
      setMyQuoteInputValue("");
    }
  };

  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form onSubmit={submitNewPersonalQuote}>
        <input
          type={`text`}
          value={myQuoteInputValue}
          onChange={(e) => setMyQuoteInputValue(e.target.value)}
        />
        <button
          type={`submit`}
          onSubmit={submitNewPersonalQuote}
          onClick={submitNewPersonalQuote}
        >
          Submit
        </button>
      </form>
      {myQuoteList.length > 0 && <QuotesList quotes={myQuoteList} />}
    </section>
  );
}
