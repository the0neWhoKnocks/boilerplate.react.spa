# TODO

- [x] Figure out what can be ripped out from the `create-react-app` boilerplate.
  - Candidates
    - `config/paths.js`
- [x] Condense WebPack configs into just one.
- [ ] Implement SSR
    - https://hackernoon.com/whats-new-with-server-side-rendering-in-react-16-9b0d78585d67
    - https://medium.com/front-end-hacking/server-side-rendering-with-react-and-express-382591bfc77c
- [ ] Clean up the multiple env's in `.babelrc` if possible.
- [ ] Menu doesn't open on mobile if JS is disabled. Utilize CSS to show it.

## Bugs

- [ ] SSR content is only being requested once on server start. Look into a
  way to cache control or have it load on page load.
- [ ] After bringing in `deasync` I'm now seeing these warning after a WebPack
  build `Critical dependency: the request of a dependency is an expression`.
