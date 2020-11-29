import { useEffect, useState } from "react";
import React from "react";
import Pagination from "@material-ui/lab/Pagination";
const NestedArraypagination = () => {
  const [allPost, setAllPost] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const chunk = (array, length) => {
    const chunkarr = [];
    let i = 0;
    const n = array.length;
    while (i < n) {
      chunkarr.push(array.slice(i, (i += length)));
    }

    return chunkarr;
  };
  const getAllPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        const nested = chunk(json, 10);
        setAllPost(nested);
      });
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  const handlePagination = (event, value) => {
    setPageNumber(value);
  };
  return (
    <div>
      <pre>
        {allPost[pageNumber - 1]?.map((val) => {
          return (
            <ul key={val.id}>
              <li style={{ listStyle: "none" }}>
                {val.id}:{val.title}
              </li>
            </ul>
          );
        })}
      </pre>
      <Pagination
        count={100}
        page={pageNumber}
        onChange={handlePagination}
        count={10}
        variant='outlined'
        shape='rounded'
      />
    </div>
  );
};

export default NestedArraypagination;
