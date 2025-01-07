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
      <title>Contact Form Submission</title>
      <style>
        /* Reset styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #2d3748;
          background-color: #f7fafc;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
  
        /* Container styles */
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
  
        /* Header styles */
        .header {
          background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
          color: white;
          padding: 32px 24px;
          text-align: center;
        }
  
        .header h2 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
          letter-spacing: -0.025em;
        }
  
        .header p {
          font-size: 16px;
          opacity: 0.9;
        }
  
        /* Content styles */
        .content {
          padding: 32px 24px;
          background-color: white;
        }
  
        .section {
          margin-bottom: 24px;
          padding: 20px;
          background-color: #f8fafc;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
        }
  
        .section:last-child {
          margin-bottom: 0;
        }
  
        .field {
          margin-bottom: 16px;
        }
  
        .field:last-child {
          margin-bottom: 0;
        }
  
        .label {
          font-size: 14px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
  
        .value {
          font-size: 16px;
          color: #1e293b;
          background-color: white;
          padding: 12px;
          border-radius: 4px;
          border: 1px solid #e2e8f0;
        }
  
        .message-content {
          white-space: pre-line;
          line-height: 1.8;
        }
  
        /* Divider */
        .divider {
          height: 1px;
          background-color: #e2e8f0;
          margin: 24px 0;
        }
  
        /* Footer styles */
        .footer {
          background-color: #f8fafc;
          padding: 24px;
          text-align: center;
          border-top: 1px solid #e2e8f0;
        }
  
        .timestamp {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 12px;
        }
  
        .copyright {
          font-size: 14px;
          color: #94a3b8;
        }
  
        /* Highlights and Badges */
        .priority-badge {
          display: inline-block;
          padding: 4px 12px;
          background-color: #818cf8;
          color: white;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          margin-top: 8px;
        }
  
        /* Responsive design */
        @media only screen and (max-width: 600px) {
          .container {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }
  
          .header {
            padding: 24px 16px;
          }
  
          .content {
            padding: 24px 16px;
          }
  
          .section {
            padding: 16px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Inquiry</h2>
          <p>A new message has been received through the contact form</p>
        </div>
  
        <div class="content">
          <!-- Contact Information Section -->
          <div class="section">
            <div class="field">
              <div class="label">Contact Details</div>
              <div class="value">
                <strong>${fname} ${lname}</strong>
                ${phone ? `<br>📞 ${phone}` : ""}
                <br>📧 ${email}
              </div>
            </div>
          </div>
  
          <!-- Message Content Section -->
          <div class="section">
            <div class="field">
              <div class="label">Message Content</div>
              <div class="value message-content">
                ${content}
              </div>
            </div>
          </div>
  
          <div class="priority-badge">
            New Message
          </div>
        </div>
  
        <div class="footer">
          <div class="timestamp">
            📅 Received on ${date}
          </div>
          <div class="divider"></div>
          <div class="copyright">
            © ${new Date().getFullYear()} Your Company Name<br>
            <small>This is an automated message. Please do not reply directly to this email.</small>
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
  NEW CONTACT FORM SUBMISSION
  --------------------------
  
  CONTACT DETAILS
  --------------
  Name: ${fname} ${lname}
  Email: ${email}
  ${phone ? `Phone: ${phone}\n` : ""}
  
  MESSAGE
  -------
  ${content}
  
  --------------------------
  Sent on: ${date}
  Jan Jacobi
  `;
