export const metadata = {
  title: 'BHF - TS NextJS App Router Monorepo boiler',
  description: 'A monorepo boiler for Typescript apps using NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
