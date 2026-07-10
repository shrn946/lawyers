"use client";

import React, { useState } from "react";

interface LawfinityContactFormProps {
  type: "appointment" | "message";
}

export function LawfinityContactForm({ type }: LawfinityContactFormProps) {
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [practiceArea, setPracticeArea] = useState("Practice Area");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === "appointment") {
      alert(`Appointment requested successfully!\nPractice Area: ${practiceArea}`);
    } else {
      alert(`Message sent successfully!\nSubject: ${subject}`);
    }
    // Clear form
    setFname("");
    setPhone("");
    setEmail("");
    setSubject("");
    setPracticeArea("Practice Area");
    setMessage("");
  };

  return (
    <form id="contactpage" onSubmit={handleSubmit} className="position-relative">
      <div className="form-group input1 float-left">
        <input
          type="text"
          className="form_style"
          placeholder="Name"
          name="fname"
          id="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>
      <div className="form-group float-left">
        <input
          type="tel"
          className="form_style"
          placeholder="Phone"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="form-group input1 float-left">
        <input
          type="email"
          className="form_style"
          placeholder="Email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {type === "appointment" ? (
        <div className="form-group float-left">
          <select
            className="form-control"
            value={practiceArea}
            onChange={(e) => setPracticeArea(e.target.value)}
            style={{ color: practiceArea === "Practice Area" ? "#6c757d" : "inherit" }}
          >
            <option disabled value="Practice Area">
              Practice Area
            </option>
            <option value="Immigration Law">Immigration Law</option>
            <option value="Business Law">Business Law</option>
            <option value="Criminal Law">Criminal Law</option>
          </select>
        </div>
      ) : (
        <div className="form-group float-left">
          <input
            type="text"
            className="form_style"
            placeholder="Subject"
            name="subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
      )}

      <div className="form-group message">
        <textarea
          className="form_style"
          placeholder="Message"
          rows={3}
          name="msg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>

      <button id="submit" type="submit" className="appointment">
        {type === "appointment" ? "Book Appointment" : "Send Now"}
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </form>
  );
}

export default LawfinityContactForm;
