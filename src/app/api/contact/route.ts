import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

 const { data, error } = await resend.emails.send({
  from: "JHNXN Creative Studio <onboarding@resend.dev>",
  to: "jtomiwa80@gmail.com",
  subject: `New ${service} Enquiry from ${name}`,
  html: `
    <div style="font-family:Arial,sans-serif;padding:24px;">
      <h2 style="color:#7c3aed;">New Project Enquiry</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Service:</strong> ${service}</p>

      <hr />

      <p><strong>Project Details</strong></p>

      <p>${message.replace(/\n/g, "<br/>")}</p>
    </div>
  `,
});

console.log("DATA:", data);
console.log("ERROR:", error);

if (error) {
  return NextResponse.json(
    { error },
    { status: 500 }
  );
}

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}