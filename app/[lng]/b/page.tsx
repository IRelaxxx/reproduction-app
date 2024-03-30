import { headers } from "next/headers";

export default function PageB() {
  const h = headers();
  return h.get("origin");
}
