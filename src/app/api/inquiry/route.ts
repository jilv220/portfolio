import { transporter } from "@/config/transporter";
import { Inquiry } from "@/schemas/inquiryForm";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data: Inquiry = await request.json();

  const info = await transporter
    .sendEmailWithTemplate({
      From: process.env.SITE_EMAIL!,
      To: process.env.SITE_EMAIL!,
      TemplateAlias: "inquiry",
      TemplateModel: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    })
    .catch((e: Error) => e);

  if (info instanceof Error) {
    return NextResponse.json(
      {
        error: info.message,
      },
      {
        status: 400,
      }
    );
  }

  return NextResponse.json(
    {
      success: "email enqueued",
    },
    {
      status: 202,
    }
  );
}
