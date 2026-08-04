import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  // Échoue explicitement si la configuration SMTP manque, au lieu de partir
  // dans le vide : sans ça, un .env incomplet produit un faux succès.
  if (!process.env.SMTP_HOST || !process.env.SMTP_FROM) {
    console.error("[email] Configuration SMTP manquante — aucun envoi effectué.");
    throw new Error("smtp_not_configured");
  }

  const info = await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject,
    html,
  });

  // Trace systématique : sujet, destinataire et réponse brute du serveur.
  // C'est cette ligne qui permet de diagnostiquer un problème de remise.
  console.log(
    `[email] "${subject}" -> ${to} | accepté: ${info.accepted.length} | refusé: ${info.rejected.length} | ${info.response}`
  );

  // Un destinataire refusé par le serveur ne doit pas passer pour un succès.
  if (info.rejected.length > 0) {
    throw new Error(`smtp_rejected: ${info.rejected.join(", ")}`);
  }

  return info;
}