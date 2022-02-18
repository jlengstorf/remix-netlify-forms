import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';

export function meta() {
  return { title: 'New Remix App' };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        <style>
          {`
            .visually-hidden {
              clip: rect(0 0 0 0);
              clip-path: inset(50%);
              height: 1px;
              overflow: hidden;
              position: absolute;
              white-space: nowrap;
              width: 1px;
            }
          `}
        </style>
        <form
          method="post"
          name="Test Form"
          data-netlify="true"
          action="/thanks/"
          className="visually-hidden"
        >
          <label>
            Name
            <input name="name" type="text" />
          </label>

          <label>
            Email
            <input name="email" type="email" />
          </label>

          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  );
}
