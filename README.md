# SpaceX App

This app tracks SpaceX launches and was built as a tech test.

## Running locally

After cloning this repo:

```bash
$ npm install
```

There are a bunch of tests, using Vitest and React Testing Library, with MSW mocking the API responses:

```bash
$ npm test
```

The app itself uses Vite, and can be launched with:

```bash
$ npm run dev
```

By default, the app lives at http://localhost:5173/

## Decisions

### Vite

For this kind of app - collate and display stuff from an API - Next.js or server-side React is a much better fit than a client-side React SPA. Every user action leads to a loading state as new API data is fetched. Selecting a Launch fires roughly three requests: the Launch by ID; the Payloads (zero, one, or many); and the Launchpad. With Next.js the data from many different API endpoints could be collated on the server and delivered all at once to the client as a fully formed page.

I don't think server-side React is a good fit for your core product, and we'd mentioned Create React App in our interview. That's the only reason I went with Vite here, as a modern client-side React build tool.

## Next steps

I spent around 4-5 hours on this, starting with a template which has all the libraries I like configured and ready to use. Given more time, I would like to improve:

### Styling

Yeah, it looks like hot garbage. This project is definitely prettier on the inside. I used MUI since we were discussing it in our interview, and as I said it's great for prototyping. Here it gets the point across, but I'm not happy with how it looks.

MUI also causes the only a11y error on the page according to my automated checker. One of the controls for pagination on the DataGrid is missing a label.

### Error handling

Right now `src/lib/ApiClient.ts` is a thin wrapper around `fetch`, which provides a single source of truth for the API URL and throws an error on fetch failures (e.g. server errors, network errors).

The components which fire the requests don't currently handle these errors. If a `fetch` failure occurs they'll be stuck in a loading state. The fix would be to do something with the `isError` flag exposed by React Query through the custom hooks, and wrap the fetching component in an `ErrorBoundary` so that a `fetch` failure in e.g. the "Payloads" section doesn't affect the whole app.
