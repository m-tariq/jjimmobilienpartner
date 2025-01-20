export const generateEmailTemplate = ({
  fname,
  lname,
  email,
  phone,
  content,
  date,
}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>JJ Immobilienpartner - Kontaktanfrage</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333333;
          background-color: #f5f5f5;
        }
  
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
        }
  
        .header {
          background-color: #003366;
          padding: 24px;
          text-align: center;
        }

        .logo {
          max-width: 200px;
          margin-bottom: 16px;
        }
  
        .header h2 {
          color: #ffffff;
          font-size: 22px;
          font-weight: 500;
          margin-bottom: 8px;
        }
  
        .content {
          padding: 32px 24px;
        }
  
        .section {
          margin-bottom: 24px;
          padding: 20px;
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
        }
  
        .field {
          margin-bottom: 16px;
        }
  
        .label {
          font-size: 14px;
          font-weight: 600;
          color: #666666;
          margin-bottom: 8px;
        }
  
        .value {
          font-size: 15px;
          color: #333333;
          line-height: 1.6;
        }
  
        .contact-info {
          background-color: #f8f8f8;
          padding: 16px;
          border-left: 4px solid #003366;
        }

        .message-box {
          background-color: #ffffff;
          padding: 20px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
        }
  
        .footer {
          background-color: #f8f8f8;
          padding: 24px;
          text-align: center;
          border-top: 1px solid #e0e0e0;
        }
  
        .timestamp {
          font-size: 13px;
          color: #666666;
          margin-bottom: 12px;
        }
  
        .company-info {
          font-size: 13px;
          color: #666666;
          line-height: 1.8;
        }

        @media only screen and (max-width: 600px) {
          .container {
            width: 100%;
          }
          
          .content {
            padding: 20px 16px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Neue Kontaktanfrage</h2>
        </div>
  
        <div class="content">
          <div class="section contact-info">
            <div class="field">
              <div class="label">Kontaktdetails</div>
              <div class="value">
                <strong>${fname} ${lname}</strong><br>
                ${phone ? `Telefon: ${phone}<br>` : ""}
                E-Mail: ${email}
              </div>
            </div>
          </div>
  
          <div class="section">
            <div class="field">
              <div class="label">Nachricht</div>
              <div class="message-box">
                ${content}
              </div>
            </div>
          </div>
        </div>
  
        <div class="footer">
          <div class="timestamp">
            Eingegangen am ${date}
          </div>
          <div class="company-info">
            JJ Immobilienpartner<br>
            Jan Jacobi<br>
            Immobilienverwaltung<br>
            <small>Dies ist eine automatisierte Nachricht. Bitte antworten Sie nicht direkt auf diese E-Mail.</small>
          </div>
        </div>
      </div>
    </body>
  </html>
`;

export const generatePlainTextEmail = ({
  fname,
  lname,
  email,
  phone,
  content,
  date,
}) => `
  JJ IMMOBILIENPARTNER - NEUE KONTAKTANFRAGE
  -----------------------------------------
  
  KONTAKTDETAILS
  --------------
  Name: ${fname} ${lname}
  E-Mail: ${email}
  ${phone ? `Telefon: ${phone}\n` : ""}
  
  NACHRICHT
  ---------
  ${content}
  
  -----------------------------------------
  Eingegangen am: ${date}
  
  JJ Immobilienpartner
  Jan Jacobi
  Immobilienverwaltung
  
  Dies ist eine automatisierte Nachricht.
  `;
