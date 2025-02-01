import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const formData = await req.formData()
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "farhinrahmanp@gmail.com",
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    })

    return NextResponse.json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ message: "Error sending email" }, { status: 500 })
  }
}

