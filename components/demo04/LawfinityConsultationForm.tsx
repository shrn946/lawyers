"use client";

import React, { useState } from "react";

export function LawfinityConsultationForm() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Consultation request submitted successfully!");
    setIsOpen(false);
  };

  return (
    <div id="fixed-form-container">
      <div className={`image ${isOpen ? "expanded" : ""}`} onClick={toggleForm} style={{ cursor: "pointer" }}>
        <figure className="footer-contactimage mb-0">
          <img src="/demo-04/assets/images/footer-contactimage.png" alt="floating contact" className="img-fluid" />
        </figure>
      </div>
      <div 
        className="body" 
        style={{ 
          display: isOpen ? "block" : "none",
          transition: "all 0.4s ease-in-out"
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-0">
            <input type="text" className="form_style" placeholder="Name" name="name" required />
          </div>
          <div className="form-group mb-0">
            <input type="email" className="form_style" placeholder="Email" name="emailid" required />
          </div>
          <div className="form-group mb-0">
            <input type="tel" className="form_style" placeholder="Phone" name="phone" required />
          </div>
          <div className="form-group mb-0">
            <textarea className="form_style" placeholder="Message" rows={3} name="msg" required></textarea>
          </div>
          <button type="submit" className="submit_now text-decoration-none">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default LawfinityConsultationForm;
