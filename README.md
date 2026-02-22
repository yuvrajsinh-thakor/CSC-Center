# Bhagwati CSC Centre — Website

## File Structure
```
bhagwati-csc/
├── index.html
├── css/style.css
├── js/
│   ├── services.js      <- service data & prices
│   ├── script.js        <- main site logic
│   └── admin-auth.js    <- login / session / lockout
├── admin/index.html     <- password-protected admin panel
└── assets/images/logo.png
```

## Admin Panel Security
- URL: admin/index.html
- Default password: Admin@1234
- 5 wrong attempts = 15-minute lockout
- Session expires when browser tab is closed
- Change password from inside admin panel

## Quick Customisation
- WhatsApp: edit PHONE in js/script.js
- UPI ID: edit index.html pay section
- Address: edit index.html contact section
- Logo: replace assets/images/logo.png