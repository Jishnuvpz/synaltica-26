// ============================================
// SYNALTICA '26 - Registration System
// Google Apps Script Backend
// ============================================

const CONFIG = {
  SPREADSHEET_ID: '112HhidqPgxaU4sQ-7KwRt7SnVe-bAK2gbXlL--eO5JQ',
  SHEET_NAME: 'Sheet1',
  ADMIN_EMAIL: '24127031@srcas.ac.in',
  EVENT_DATE: 'February 13, 2026',
  EVENT_NAME: 'SYNALTICA \'26'
};

// Serve the HTML form
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Form')
    .setTitle('SYNALTICA \'26 - Registration Portal')
    .setFaviconUrl('https://img.icons8.com/fluency/48/000000/rocket.png')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Main form submission handler
function handleSubmit(form) {
  try {
    // Validate input
    const validationErrors = validateForm(form);
    if (validationErrors.length > 0) {
      return { 
        status: 'error', 
        message: validationErrors.join(', ') 
      };
    }

    const sheet = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID)
      .getSheetByName(CONFIG.SHEET_NAME);
    
    // Check for duplicate email
    const emailCheck = isDuplicateEmail(sheet, form.email);
    if (emailCheck.isDuplicate) {
      return { 
        status: 'error', 
        message: `This email is already registered for "${emailCheck.event}". Please use a different email or contact support.` 
      };
    }
    
    // Check for duplicate mobile number
    const mobileCheck = isDuplicateMobile(sheet, form.mobileNumber);
    if (mobileCheck.isDuplicate) {
      return { 
        status: 'error', 
        message: `This mobile number is already registered for "${mobileCheck.event}". Please use a different number or contact support.` 
      };
    }

    // Add data to sheet
    const timestamp = new Date();
    const formattedTimestamp = Utilities.formatDate(
      timestamp, 
      Session.getScriptTimeZone(), 
      'dd-MM-yyyy HH:mm:ss'
    );
    
    sheet.appendRow([
      formattedTimestamp,
      form.email.trim().toLowerCase(),
      form.event || '',
      form.teamName || '',
      form.leaderName || '',
      form.memberCount || '',
      form.member2Name || '',
      form.member3Name || '',
      form.collegeName || '',
      form.mobileNumber || ''
    ]);

    // Format the new row
    const lastRow = sheet.getLastRow();
    const range = sheet.getRange(lastRow, 1, 1, 10);
    range.setFontSize(10);
    range.setBorder(true, true, true, true, false, false);
    
    // Alternate row colors for better readability
    if (lastRow % 2 === 0) {
      range.setBackground('#f8f9fa');
    }
    
    // Send confirmation email
    try {
      sendConfirmationEmail(form);
    } catch (emailError) {
      Logger.log('Email sending failed: ' + emailError);
    }

    // Send admin notification
    try {
      sendAdminNotification(form);
    } catch (adminError) {
      Logger.log('Admin notification failed: ' + adminError);
    }

    return { 
      status: 'success', 
      message: `🎉 Registration successful! A confirmation email has been sent to ${form.email}` 
    };

  } catch (error) {
    Logger.log('Submission error: ' + error.toString());
    Logger.log('Stack trace: ' + error.stack);
    return { 
      status: 'error', 
      message: 'Registration failed due to a system error. Please try again or contact support.' 
    };
  }
}

// Form validation
function validateForm(form) {
  const errors = [];
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email || !emailRegex.test(form.email)) {
    errors.push('Invalid email address');
  }
  
  // Event validation
  if (!form.event || form.event.trim() === '') {
    errors.push('Event selection is required');
  }
  
  // Team name validation
  if (!form.teamName || form.teamName.trim().length < 2) {
    errors.push('Team name must be at least 2 characters');
  }
  
  // Leader name validation
  if (!form.leaderName || form.leaderName.trim().length < 2) {
    errors.push('Leader name is required');
  }
  
  // Member count validation
  const memberCount = parseInt(form.memberCount);
  if (isNaN(memberCount) || memberCount < 1 || memberCount > 3) {
    errors.push('Member count must be between 1 and 3');
  }
  
  // Additional member validation
  if (memberCount >= 2 && (!form.member2Name || form.member2Name.trim().length < 2)) {
    errors.push('Member 2 name is required');
  }
  
  if (memberCount >= 3 && (!form.member3Name || form.member3Name.trim().length < 2)) {
    errors.push('Member 3 name is required');
  }
  
  // Mobile number validation (Indian format)
  const mobileRegex = /^[6-9]\d{9}$/;
  if (!form.mobileNumber || !mobileRegex.test(form.mobileNumber)) {
    errors.push('Invalid mobile number (should be 10 digits starting with 6-9)');
  }
  
  // College name validation
  if (!form.collegeName || form.collegeName.trim().length < 3) {
    errors.push('College name is required');
  }
  
  return errors;
}

// Check for duplicate email
function isDuplicateEmail(sheet, email) {
  try {
    const data = sheet.getDataRange().getValues();
    const emailColumn = 1; // Column B (0-indexed)
    const eventColumn = 2; // Column C (0-indexed)
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][emailColumn].toString().toLowerCase() === email.trim().toLowerCase()) {
        return {
          isDuplicate: true,
          event: data[i][eventColumn].toString()
        };
      }
    }
    return { isDuplicate: false };
  } catch (error) {
    Logger.log('Error checking email duplicates: ' + error);
    return { isDuplicate: false };
  }
}

// Check for duplicate mobile number
function isDuplicateMobile(sheet, mobileNumber) {
  try {
    const data = sheet.getDataRange().getValues();
    const mobileColumn = 9; // Column J (0-indexed)
    const eventColumn = 2; // Column C (0-indexed)
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][mobileColumn].toString() === mobileNumber.toString()) {
        return {
          isDuplicate: true,
          event: data[i][eventColumn].toString()
        };
      }
    }
    return { isDuplicate: false };
  } catch (error) {
    Logger.log('Error checking mobile duplicates: ' + error);
    return { isDuplicate: false };
  }
}

// Send confirmation email to participant
function sendConfirmationEmail(form) {
  const subject = `✅ ${CONFIG.EVENT_NAME} - Registration Confirmation`;
  
  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #5E3BEE, #4A2EB3); color: white; padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0; }
        .header h1 { margin: 0; font-size: 32px; font-weight: 800; }
        .header p { margin: 10px 0 0 0; font-size: 16px; opacity: 0.95; }
        .content { background: #f9f9f9; padding: 40px 30px; border-radius: 0 0 12px 12px; }
        .success-icon { font-size: 64px; text-align: center; margin: 20px 0; }
        .info-box { background: white; padding: 25px; margin: 25px 0; border-radius: 10px; border-left: 5px solid #5E3BEE; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .info-box h3 { margin-top: 0; color: #5E3BEE; font-size: 20px; }
        .info-row { padding: 12px 0; border-bottom: 1px solid #eee; display: flex; }
        .info-row:last-child { border-bottom: none; }
        .label { font-weight: 600; color: #5E3BEE; min-width: 150px; }
        .value { color: #333; flex: 1; }
        .alert-box { background: #fff3cd; padding: 20px; border-radius: 8px; border-left: 5px solid #ffc107; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; padding-top: 25px; border-top: 2px solid #ddd; color: #666; font-size: 14px; }
        .footer a { color: #5E3BEE; text-decoration: none; }
        ul { padding-left: 20px; }
        ul li { margin: 8px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏆 ${CONFIG.EVENT_NAME}</h1>
          <p>Registration Confirmed!</p>
        </div>
        <div class="content">
          <div class="success-icon">✅</div>
          <p><strong>Dear ${form.leaderName},</strong></p>
          <p>Thank you for registering for <strong>${CONFIG.EVENT_NAME}</strong>! We're thrilled to have your team participate in this exciting tech symposium.</p>
          
          <div class="info-box">
            <h3>📋 Registration Details</h3>
            <div class="info-row">
              <span class="label">Event:</span>
              <span class="value">${form.event}</span>
            </div>
            <div class="info-row">
              <span class="label">Team Name:</span>
              <span class="value">${form.teamName}</span>
            </div>
            <div class="info-row">
              <span class="label">Team Leader:</span>
              <span class="value">${form.leaderName}</span>
            </div>
            <div class="info-row">
              <span class="label">Team Size:</span>
              <span class="value">${form.memberCount} Member${form.memberCount > 1 ? 's' : ''}</span>
            </div>
            ${form.member2Name ? `<div class="info-row"><span class="label">Member 2:</span><span class="value">${form.member2Name}</span></div>` : ''}
            ${form.member3Name ? `<div class="info-row"><span class="label">Member 3:</span><span class="value">${form.member3Name}</span></div>` : ''}
            <div class="info-row">
              <span class="label">College:</span>
              <span class="value">${form.collegeName}</span>
            </div>
            <div class="info-row">
              <span class="label">Contact:</span>
              <span class="value">${form.mobileNumber}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${form.email}</span>
            </div>
          </div>
          
          <p><strong>⚡ What's Next?</strong></p>
          <ul>
            <li>Keep an eye on your email for event updates and guidelines</li>
            <li>Prepare your team for an amazing competition</li>
            <li>Join our event group for announcements (link will be shared soon)</li>
            <li>Mark your calendar for ${CONFIG.EVENT_DATE}</li>
          </ul>
          
          <div class="alert-box">
            <strong>⚠️ Important:</strong> Please save this email for your records. You may need to present this confirmation at the venue.
          </div>
          
          <div class="footer">
            <p><strong>Questions?</strong> Contact us at <a href="mailto:24127065@srcas.ac.in">24127065@srcas.ac.in</a></p>
            <p>Best of luck with your preparations!</p>
            <p style="margin-top: 20px; color: #999; font-size: 12px;">${CONFIG.EVENT_NAME} Team<br>Department of Computer Science with Data Analytics<br>Sri Ramakrishna College</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  
  MailApp.sendEmail({
    to: form.email,
    subject: subject,
    htmlBody: htmlBody
  });
}

// Send notification to admin
function sendAdminNotification(form) {
  if (!CONFIG.ADMIN_EMAIL) return;
  
  const subject = `🔔 New ${CONFIG.EVENT_NAME} Registration - ${form.event}`;
  const body = `
New registration received!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 REGISTRATION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Event: ${form.event}
Team: ${form.teamName}
Leader: ${form.leaderName}
Members: ${form.memberCount}
${form.member2Name ? `Member 2: ${form.member2Name}\n` : ''}${form.member3Name ? `Member 3: ${form.member3Name}\n` : ''}
College: ${form.collegeName}
Email: ${form.email}
Mobile: ${form.mobileNumber}

Registered at: ${new Date().toLocaleString()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
View full spreadsheet: 
https://docs.google.com/spreadsheets/d/${CONFIG.SPREADSHEET_ID}
  `;
  
  MailApp.sendEmail({
    to: CONFIG.ADMIN_EMAIL,
    subject: subject,
    body: body
  });
}

// Get registration statistics
function getRegistrationStats() {
  try {
    const sheet = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID)
      .getSheetByName(CONFIG.SHEET_NAME);
    const data = sheet.getDataRange().getValues();
    
    const eventCounts = {};
    for (let i = 1; i < data.length; i++) {
      const event = data[i][2];
      eventCounts[event] = (eventCounts[event] || 0) + 1;
    }
    
    return {
      totalRegistrations: data.length - 1,
      eventBreakdown: eventCounts,
      lastRegistration: data[data.length - 1][0]
    };
  } catch (error) {
    Logger.log('Error getting stats: ' + error);
    return null;
  }
}

// Initialize sheet with headers
function initializeSheet() {
  const sheet = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID)
    .getSheetByName(CONFIG.SHEET_NAME);
  
  const headers = [
    'Timestamp',
    'Email',
    'Event',
    'Team Name',
    'Team Leader',
    'Member Count',
    'Member 2 Name',
    'Member 3 Name',
    'College Name',
    'Mobile Number'
  ];
  
  sheet.getRange(1, 1, 1, headers.length)
    .setValues([headers])
    .setFontWeight('bold')
    .setBackground('#5E3BEE')
    .setFontColor('#FFFFFF')
    .setHorizontalAlignment('center')
    .setFontSize(11);
  
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}
