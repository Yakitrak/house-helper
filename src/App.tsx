import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./App.css";
import { locations, googleMapsUrl } from "./constants";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const { kayWork, nettaWork, aadarWork } = locations;
  const [search, setSearch] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const fetchAddressLonLat = async () => {
    const url = `https://nominatim.openstreetmap.org/search/${search}?format=json&addressdetails=1&limit=1&polygon_svg=1`;
    const result = await fetch(url);
    const resultJson = await result.json();
    if (resultJson && resultJson[0].lon && resultJson[0].lat) {
      return { lon: resultJson[0].lon, lat: resultJson[0].lat };
    } else {
      return { lon: undefined, lat: undefined };
    }
  };
  const openTabs = async (urls: string[]) => {
    urls.forEach((url) => {
      window.open(url, "_blank", "toolbar=0,location=0,menubar=0");
    });
  };

  const handleSearch = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    document.title = search;
    const { lon, lat } = await fetchAddressLonLat();
    const urls = [
      `${googleMapsUrl}/dir/?api=1&origin=${search}&destination=${kayWork}&travelmode=transit`,
      `${googleMapsUrl}/dir/?api=1&origin=${search}&destination=${nettaWork}&travelmode=transit`,
      `${googleMapsUrl}/dir/?api=1&origin=${search}&destination=${aadarWork}&travelmode=transit`,
      `${googleMapsUrl}/search/gym/@${lat},${lon},17z`,
      `${googleMapsUrl}/search/shops/@${lat},${lon},17z`,
    ];

    await openTabs(urls);
  };

  return (
    <Form className="app" onSubmit={handleSearch}>
      <div className="title">House Helper</div>

      <Row>
        <Col md="12">
          <InputGroup size="lg" className="mb-3">
            <Form.Control
              aria-label="search"
              aria-describedby="search"
              id="search"
              value={search}
              placeholder="Search new address..."
              onChange={handleChange}
            />
            <Button variant="primary" id="search" type="submit">
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Form>
  );
}

export default App;
