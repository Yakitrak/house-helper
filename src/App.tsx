import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./App.css";

function App() {
  const [search, setSearch] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const getUrls = () => {
    const baseGoogleMapsUrl = "https://www.google.co.uk/maps";

    const kayWorkAddress = encodeURI("UCL, Torrington Place, London");
    const nettaWorkAddress = encodeURI("33 Holborn, London EC1N 2HT");

    const urlNettaWork = `${baseGoogleMapsUrl}/dir/?api=1&origin=${search}&destination=${kayWorkAddress}&travelmode=transit`;
    const urlKayWork = `${baseGoogleMapsUrl}/dir/?api=1&origin=${search}&destination=${nettaWorkAddress}&travelmode=transit`;
    const urlNearbyGyms = `${baseGoogleMapsUrl}/search/gyms/${search}`;
    const urlNearbyShops = `${baseGoogleMapsUrl}/search/shops/${search}`;

    return [urlNettaWork, urlKayWork, urlNearbyShops, urlNearbyGyms];
  };

  const handleSearch = () => {
    const urls = getUrls();
    urls.forEach((url, index) => {
      if (index === 0) {
        window.open(url, "_blank")!.focus();
      } else {
        window.open(url, "_blank");
      }
    });
  };

  return (
    <div className="App">
      <Typography variant="h4" component="div" gutterBottom>
        Hey Kaynetta
      </Typography>

      <TextField
        id="outlined-name"
        value={search}
        onChange={handleChange}
        placeholder="Search address..."
      />

      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}

export default App;
