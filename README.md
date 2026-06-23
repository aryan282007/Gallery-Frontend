# Gallery React App

A small React app built with Vite created as a learning exercise to practice React hooks like `useState` and `useEffect`.

This project fetches photos from the Picsum API and renders them in a responsive gallery.

## Features

- Fetches image data from `https://picsum.photos/v2/list`
- Uses React state and `useEffect` to load and update page data
- Supports pagination with `Prev` and `Next` buttons
- Disables the `Prev` button on the first page
- Uses a reusable `Card` component to render images

## Available scripts

From the project root (`Gallery/`):

- `npm install` — install dependencies
- `npm run dev` — start the Vite dev server
- `npm run build` — build the production bundle
- `npm run preview` — locally preview the production build

## Notes

- The app currently fetches `25` images per page.
- The `Prev` button is disabled when `index === 1` to prevent invalid page navigation.
- The gallery uses Axios for API requests and Tailwind CSS classes for styling.

## File structure

- `src/App.jsx` — main app logic and pagination controls
- `src/components/Card.jsx` — gallery item component
- `src/App.css` — component styles
- `src/main.jsx` — React entry point

## Troubleshooting

- If the API request fails, check your network connection.
- Ensure dependencies are installed by running `npm install`.
- If Vite does not start, verify the project is opened from the `Gallery` folder and not a parent workspace.
