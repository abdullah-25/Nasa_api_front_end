import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import axios from "axios";

function NasaApi() {
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=bCu2p2uXPphEWdijbvWutadGPKpDQKyw7YvCxjiv";
  const [data, setData] = useState(null);
  let content = null;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  if (data) {
    content = (
      <div>
        <div className="name">
          <h1>{data.copyright}</h1>
          <h4 className="sub-title">Presented by NASA's image API</h4>
        </div>

        <img className="image" src={data.url} alt={data.title} />

        <div className="caption">
          <p>
            {" "}
            {data.title} - {data.date}
          </p>
        </div>
        <FormControlLabel
          className="like-button"
          label="Like"
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checkedH"
            />
          }
        />
      </div>
    );
  }

  return <div>{content}</div>;
}

export default NasaApi;
