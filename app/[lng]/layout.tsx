import { PropsWithChildren } from "react";

export async function generateStaticParams() {
  return ["en", undefined].map((lang) => ({ lang }));
}

export default function Layout({
  children,
  params,
}: PropsWithChildren<{ params: { lng: string } }>) {
  return (
    <html lang={params.lng}>
      <head />
      <body>{children}</body>
    </html>
  );
}
