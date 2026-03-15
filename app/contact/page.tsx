"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ prenom: "", nom: "", email: "", sujet: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.prenom || !form.email || !form.message) {
      alert("Merci de remplir au moins votre prénom, votre email et votre message.");
      return;
    }
    setSent(true);
  };

  return (
    <>
      <Header title="Contact" />
      <main>
        <section className="contact-section">
          <h1>Contactez-moi</h1>
          <p className="intro">Une question, une suggestion, une idée ? Je lis tous les messages avec attention.</p>

          <div className="contact-email-bloc">
            <div className="email-icon">✉️</div>
            <div>
              <span>Adresse email</span>
              <a href="mailto:contact@euhm.fr">contact@euhm.fr</a>
            </div>
          </div>

          <div className="separateur">ou via le formulaire</div>

          <div className="contact-form">
            {!sent ? (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" id="prenom" placeholder="Votre prénom" value={form.prenom} onChange={e => setForm({...form, prenom: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" placeholder="Votre nom" value={form.nom} onChange={e => setForm({...form, nom: e.target.value})} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="votre@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="sujet">Sujet</label>
                  <select id="sujet" value={form.sujet} onChange={e => setForm({...form, sujet: e.target.value})}>
                    <option value="" disabled>Choisissez un sujet</option>
                    <option value="question">Question générale</option>
                    <option value="suggestion">Suggestion d&#39;article</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Votre message..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                </div>
                <div className="form-submit">
                  <button type="submit" className="btn-submit">Envoyer le message</button>
                </div>
              </form>
            ) : (
              <div className="form-success">
                <p>✅ Merci pour votre message ! Je vous répondrai dans les meilleurs délais.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
