import Modal from '../ui/Modal';
import EnquiryForm from './EnquiryForm';

export default function QuoteModal({ open, service, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title="Request a quote" labelId="quote-title">
      <p className="modal__lead">Tell us about your plant or project. We will get back to you shortly.</p>
      {open && <EnquiryForm service={service} withPlant onDone={onClose} idPrefix="q" />}
    </Modal>
  );
}
