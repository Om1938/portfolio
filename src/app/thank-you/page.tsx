import React from "react";
import { Metadata } from "next";
import ThankYouClient from "@/components/sections/ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | Om Prakash Das | Professional Portfolio",
  description:
    "Thank you for contacting Om Prakash Das. Your message has been received and will be responded to shortly.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
