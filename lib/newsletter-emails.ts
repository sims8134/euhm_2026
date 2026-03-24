const BASE_URL = "https://euhm.fr";

export function getConfirmationEmail(confirmToken: string) {
  const confirmUrl = `${BASE_URL}/api/newsletter/confirm?token=${confirmToken}`;

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#faf5f0;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf5f0;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;padding:40px;border:1px solid #e8e0d8;">
          <tr>
            <td align="center" style="padding-bottom:24px;">
              <span style="font-size:20px;font-weight:700;letter-spacing:2px;"><span style="color:#f86613;">EUHM</span><span style="color:#333;">.FR</span></span>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:16px;">
              <h1 style="margin:0;font-size:22px;color:#333;">Confirmez votre inscription</h1>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <p style="margin:0;font-size:15px;line-height:1.6;color:#666;">Merci de vous être inscrit à la newsletter EUHM. Cliquez sur le bouton ci-dessous pour confirmer votre adresse e-mail.</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <a href="${confirmUrl}" style="display:inline-block;padding:12px 32px;background:#f86613;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:6px;">Confirmer mon inscription</a>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p style="margin:0;font-size:12px;color:#999;">Si vous ne vous êtes pas inscrit, vous pouvez ignorer cet e-mail.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();

  return { subject: "Confirmez votre inscription — EUHM", html };
}