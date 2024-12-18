import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Resume",
};

export default function Resume() {
	const tz = Date.now();
	return <iframe className="h-screen" src={`resume.pdf?v=${tz}`} />;
}
