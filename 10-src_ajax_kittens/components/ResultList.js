import React from "react";


// this is a dumb component
function ResultList(props) {
  return (
    <ul className="list-group">
      {/* map over results */}
      {props.results.map(result => (
        // key is our unique identifier: REMEMBER THIS!
        <li className="list-group-item" key={result.id}>
          {/* image tag */}
          <img alt={result.title} 
          // figure this out by console log out api feed to get result.images.original.url
          className="img-fluid" src={result.images.original.url} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
