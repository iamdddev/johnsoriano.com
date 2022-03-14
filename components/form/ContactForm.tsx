import React from "react";
import { ContactFormProps } from ".";

export const ContactForm: React.FC<ContactFormProps> = (): React.ReactElement => {
  return (
    <div>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shr2FfH53v8StvuWA?backgroundColor=blue"
        frameBorder={0}
        width="100%"
        height="533"
        style={{
          background: "transparent",
          border: "1px solid #ccc;",
        }}
      />
    </div>
  );
};

export default ContactForm;
