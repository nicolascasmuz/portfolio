const express = require("express");
const cors = require("cors");
const path = require("path");
const resend_1 = require("./lib/resend");

const port = process.env.REACT_APP_PORT || 3500;
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());

// ENVÍA INFO POR MAIL
app.post("/send-mail", async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  const msg = {
    from: "onboarding@resend.dev",
    to: "lagran7producciones@gmail.com",
    subject: `Tienes una consulta de ${nombre}`,
    html: `<h4>${mensaje}</h4><p>Email: ${email}</p>`,
  };

  resend_1.resend.emails.send(msg);

  try {
    res.status(200).json({ msg });
  } catch {
    res.status(401).json({ error: true });
  }
});

app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, console.log(`initialized on http://localhost:${port}`));
