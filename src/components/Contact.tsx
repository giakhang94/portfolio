import { CONTACT } from "../constants/constant";
const Contact = (): React.JSX.Element => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get In Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.email}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
      </div>
    </div>
  );
};

export default Contact;
