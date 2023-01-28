import React from "react";

export default function QuotesList({ quotes }) {
  return (
    <ol>
      {quotes.map((quote, id) => (
        <li key={id} style={{ listStyleType: "none" }}>
          {quote}
        </li>
      ))}
    </ol>
  );
}
