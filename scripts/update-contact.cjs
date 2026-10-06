const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'routes', 'contact.tsx');
let file = fs.readFileSync(filePath, 'utf8');

file = file.replace(
  'RS Travel Contact Number & Travel Agency Islamabad | Blue Area',
  'Contact RS Travel and Tours Islamabad — Phone, WhatsApp & Office Location'
);
file = file.replace(
  "RS Travel Islamabad contact number, WhatsApp & Blue Area office address. Get instant visa assistance, air ticketing & tour packages from Islamabad's top travel agency.",
  'Official contact details for RS Travel and Tours in Blue Area, Islamabad. Call 051-2000147, WhatsApp +92 344 5979486 or visit Office #6 Mezzanine Floor, Ratta Mansion.'
);
file = file.replace(
  'travel agency islamabad contact number, RS Travel Islamabad contact number, travel agency Blue Area Islamabad, visa consultant Islamabad contact, RS Travel WhatsApp, RS Travel Blue Area Islamabad, RS Travel address, travel agency in islamabad contact number',
  'RS Travel contact number, RS Travel Islamabad phone, RS Travel Blue Area office address, RS Travel WhatsApp number, visa consultant Islamabad contact number, RS Travel directions Blue Area'
);

fs.writeFileSync(filePath, file, 'utf8');
console.log('Successfully updated contact.tsx');
