import React from "react";
import { ContactFormProps } from ".";

export const ContactForm: React.FC<ContactFormProps> = (): React.ReactElement => {
  return (
    <div className="px-10 py-10">
      <iframe className="airtable-embed h-[40em] bg-transparent" src="https://airtable.com/embed/shr2FfH53v8StvuWA?backgroundColor=transparent" frameBorder={0} width="100%" />
    </div>
  );
};

export default ContactForm;
