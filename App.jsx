import React, { useState, useEffect } from "react";
import Header from "./Header";
import InputField from "./InputField";
import "bootstrap/dist/css/bootstrap.css";
import { Box } from "@material-ui/core";
import DisplayImages from "./DisplayImages";
import axios from "axios";

export default function App() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState([]);

  // Fetching Pixabay's API
  useEffect(() => {
    async function getApiData() {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${process.env.PASS}&q=${input}&image_type=photo&per_page=36`
      );
      setImage(response.data.hits);
    }

    getApiData();
  }, [input]);

  return (
    <Box>
      <Header title="Pixabay Image Finder" />
      <InputField
        input={input}
        onChange={(input) => setInput(input.target.value)}
      />
      <DisplayImages image={image} />
    </Box>
  );
}
