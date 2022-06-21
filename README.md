# house-helper

Quick App to help us find a place with location constraints. Required locations are not dynamic, corrently stored in `.env` file accessed from `src/constants.ts` as its a quick project to help search.

App opens with a search input where pressing enter will open up 4 tabs:

1. Directions from location to my office
2. Directions from location to partners office
3. Nearby Gyms from location
4. Nearby Shops from location

# Development

Use Node 16.1.0

```
nvm install 16.10.0
nvm use 16.10.0
```

Tools:

- [Google Maps API](https://developers.google.com/maps/documentation/urls/get-started)
- [Nominatim Open Street Maps](https://nominatim.openstreetmap.org/search/Unter%20den%20Linden%201%20Berlin?format=json&addressdetails=1&limit=1&polygon_svg=1)

Start by `yarn start`

# Publish

Hosted on GH pages on [kjainwal.com/house-helper/](https://www.kjainwal.com/house-helper/). Publish by doing `yarn deploy`.
