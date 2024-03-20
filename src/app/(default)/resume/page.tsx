import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

export default function Resume() {
  return (
    <iframe className="h-screen" src='resume.pdf' />
  )
}
