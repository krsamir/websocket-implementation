import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;
function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/api")
      .then((res) => {
        setData(res.data?.data ?? []);
      })
      .catch((e) => {
        console.info(e);
      });
  }, []);

  return (
    <React.Fragment>
      <Container>
        {data.map((val) => (
          <ProductCard key={val.id} data={val} />
        ))}
      </Container>
    </React.Fragment>
  );
}

export default Products;
