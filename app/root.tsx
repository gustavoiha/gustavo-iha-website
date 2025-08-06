import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

import type { LinksFunction, MetaFunction } from "@remix-run/node"

import styles from "./styles.css?url"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
]

export const meta: MetaFunction = () => {
  return [
    { title: "Gustavo Iha" },
    { name: "description", content: "Nice to meet you!" },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, interactive-widget=overlays-content, minimum-scale=0.5, maximum-scale=2"
        />
        <Meta />
        <Links />
      </head>

      <body className="h-full">
        <div className="h-full wrap-anywhere whitespace-pre-line hyphens-auto text-pretty bg-black text-white font-sans subpixel-antialiased tracking-wider">
          {children}
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
