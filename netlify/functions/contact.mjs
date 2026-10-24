
import nodemailer from "nodemailer";

export default async (request) => {
  const headers = {
    "Content-Type": "application/json"
  };

  const json = (body, status = 200) =>
    new Response(JSON.stringify(body), { status, headers });

  if (request.method !== "POST") {
    return json({ message: "Method not allowed." }, 405);
  }

  // Limit the request size to 20 KB.
  const contentLength = Number(request.headers.get("content-length") || 0);

  if (contentLength > 20_000) {
    return json({ message: "Request is too large." }, 413);
  }

  let form;

  try {
    form = await request.json();
  } catch {
    return json({ message: "Invalid request body." }, 400);
  }

  if (!form || typeof form !== "object" || Array.isArray(form)) {
    return json({ message: "Invalid form data." }, 400);
  }

  const { name, company, email, phone, country, service, message } = form;

  const fields = { name, company, email, phone, country, service, message };

  for (const [key, value] of Object.entries(fields)) {
    if (value !== undefined &&
        (typeof value !== "string" || value.length > 5000)) {
      return json({ message: `Invalid ${key} field.` }, 400);
    }
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return json({
      message: "Name, email and message are required."
    }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return json({ message: "Please enter a valid email address." }, 400);
  }

  if (!process.env.ZOHO_SMTP_HOST ||
      !process.env.ZOHO_EMAIL ||
      !process.env.ZOHO_EMAIL_PASSWORD) {
    console.error("Email environment variables are missing.");

    return json({
      message: "Email service is not configured yet."
    }, 500);
  }

  const transporter = nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_EMAIL_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: `"ARC Steel" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,
      replyTo: email.trim(),
      subject: `Enquiry from ${name.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Company: ${company || "Not provided"}`,
        `Email: ${email.trim()}`,
        `Phone: ${phone || "Not provided"}`,
        `Country: ${country || "Not provided"}`,
        `Service: ${service || "Not provided"}`,
        "",
        "Message:",
        message.trim()
      ].join("\n")
    });

    return json({
      message: "Your enquiry has been sent successfully."
    });
  } catch (error) {
    console.error("Email sending failed:", error.message);

    return json({
      message: "Unable to send your enquiry. Please try again later."
    }, 502);
  }
};
