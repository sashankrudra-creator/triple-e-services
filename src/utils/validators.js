const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEnquiry(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  if (!v.email.trim()) e.email = 'Please enter your email.';
  else if (!EMAIL.test(v.email.trim())) e.email = 'Enter a valid email address.';
  if (!v.phone.trim()) e.phone = 'Please enter your phone number.';
  else if (v.phone.replace(/[\s\-+()]/g, '').length < 10) e.phone = 'Enter a valid phone number (min 10 digits).';
  if (!v.service) e.service = 'Please choose a service.';
  if (!v.message.trim()) e.message = 'Please tell us a little about your requirement.';
  else if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
  return e;
}
