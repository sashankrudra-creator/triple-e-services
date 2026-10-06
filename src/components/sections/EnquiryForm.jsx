import { useEffect, useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import useForm from '../../hooks/useForm';
import { validateEnquiry } from '../../utils/validators';
import { serviceOptions } from '../../data/services';
import { useApp } from '../../context/AppContext';

const plantTypes = ['Thermal', 'Solar', 'Boiler', 'Substation & Transmission', 'Other'];

function Field({ label, name, error, children }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label htmlFor={`f-${name}`}>{label}</label>
      {children}
      {error && <span className="field__err" role="alert">{error}</span>}
    </div>
  );
}

// Front-end only: nothing is sent anywhere. Submission is simulated.
export default function EnquiryForm({ service = '', withPlant = false, onDone, idPrefix = 'f' }) {
  const init = { name: '', company: '', email: '', phone: '', service, plant: '', message: '' };
  const f = useForm(init, validateEnquiry);
  const [status, setStatus] = useState('idle');
  const { toast } = useApp();

  useEffect(() => { f.setField('service', service); /* eslint-disable-next-line */ }, [service]);

  const submit = (e) => {
    e.preventDefault();
    f.touchAll();
    if (!f.isValid || status === 'sending') return;
    setStatus('sending');
    
    const { name, company, email, phone, service, plant, message } = f.values;
    const body = `Name: ${name}\nCompany: ${company || 'N/A'}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}${plant ? `\nPlant: ${plant}` : ''}\n\nMessage:\n${message}`;
    
    window.location.href = `mailto:info@eeeservices.in?subject=${encodeURIComponent(`Website Enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    
    setTimeout(() => {
      setStatus('done');
      toast('Email client opened.');
    }, 1200);
  };

  const again = () => { f.reset({ ...init, service: '' }); setStatus('idle'); onDone?.(); };

  if (status === 'done') {
    return (
      <motion.div className="form-success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
        <CheckCircle2 size={52} aria-hidden="true" />
        <h3>Ready to send!</h3>
        <p>Your email application should have opened with the drafted enquiry. Please send it and we will reach out shortly!</p>
        <button className="btn btn--primary btn--md" onClick={again}><span>{onDone ? 'Close' : 'Send another enquiry'}</span></button>
      </motion.div>
    );
  }

  const p = (n) => ({ id: `${idPrefix}-${n}`, name: n, value: f.values[n], onChange: f.onChange, onBlur: f.onBlur });
  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="form__row">
        <Field label="Name *" name={`${idPrefix}-name`} error={f.fieldError('name')}><input {...p('name')} autoComplete="name" aria-invalid={!!f.fieldError('name')} /></Field>
        <Field label="Company" name={`${idPrefix}-company`}><input {...p('company')} autoComplete="organization" /></Field>
      </div>
      <div className="form__row">
        <Field label="Email *" name={`${idPrefix}-email`} error={f.fieldError('email')}><input type="email" {...p('email')} autoComplete="email" aria-invalid={!!f.fieldError('email')} /></Field>
        <Field label="Phone *" name={`${idPrefix}-phone`} error={f.fieldError('phone')}><input type="tel" placeholder="Phone number" {...p('phone')} autoComplete="tel" aria-invalid={!!f.fieldError('phone')} /></Field>
      </div>
      <div className={withPlant ? 'form__row' : ''}>
        <Field label="Service interested *" name={`${idPrefix}-service`} error={f.fieldError('service')}>
          <select {...p('service')} aria-invalid={!!f.fieldError('service')}>
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (<option key={s} value={s}>{s}</option>))}
          </select>
        </Field>
        {withPlant && (
          <Field label="Plant type" name={`${idPrefix}-plant`}>
            <select {...p('plant')}>
              <option value="">Select plant type</option>
              {plantTypes.map((s) => (<option key={s} value={s}>{s}</option>))}
            </select>
          </Field>
        )}
      </div>
      <Field label="Message *" name={`${idPrefix}-message`} error={f.fieldError('message')}>
        <textarea rows={4} {...p('message')} aria-invalid={!!f.fieldError('message')} />
      </Field>
      <button type="submit" className="btn btn--primary btn--lg" disabled={!f.isValid || status === 'sending'}>
        {status === 'sending' ? (<><Loader2 size={18} className="spin" aria-hidden="true" /> <span>Sending…</span></>) : (<><Send size={18} aria-hidden="true" /> <span>Send enquiry</span></>)}
      </button>
      {!f.isValid && <p className="form__hint">Fill in all required fields to enable the button.</p>}
    </form>
  );
}
