import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

// --- DATA ---
const featuredPlans = [
  { id: 1, type: 'Health', name: 'Health Shield', price: '₹999/mo', coverage: '₹10L', features: ['In-patient Hospitalization', 'Pre & Post Hospitalization', 'Day Care Treatments'], popular: false },
  { id: 2, type: 'Life', name: 'Life Secure', price: '₹1,499/mo', coverage: '₹50L', features: ['Life Cover up to 99 Years', 'Tax Benefits under 80C', 'Terminal Illness Cover'], popular: true },
  { id: 3, type: 'Auto', name: 'Auto Guard', price: '₹599/mo', coverage: '₹5L', features: ['Third-party Liability', 'Own Damage Cover', '24/7 Roadside Assistance'], popular: false },
];

const allPlans = [
  ...featuredPlans,
  { id: 4, type: 'Home', name: 'Home Protect', price: '₹799/mo', coverage: '₹25L', features: ['Fire & Allied Perils', 'Burglary & Theft', 'Public Liability Cover'], popular: false },
  { id: 5, type: 'Travel', name: 'Travel Safe', price: '₹299/mo', coverage: '₹2L', features: ['Medical Emergencies', 'Trip Cancellation', 'Baggage Loss/Delay'], popular: false },
  { id: 6, type: 'Business', name: 'Business Shield', price: '₹1,999/mo', coverage: '₹1Cr', features: ['Property Damage', 'Public Liability', 'Business Interruption'], popular: false },
];

const team = [
  { id: 1, name: 'Alice Smith', role: 'CEO & Founder', avatar: '👩‍💼' },
  { id: 2, name: 'Bob Jones', role: 'Chief Actuary', avatar: '👨‍💼' },
  { id: 3, name: 'Charlie Davis', role: 'Head of Customer Success', avatar: '🧑‍💻' },
  { id: 4, name: 'Diana Prince', role: 'Lead Developer', avatar: '👩‍💻' },
];

const testimonials = [
  { id: 1, name: 'Raj Patel', text: 'InsureSimplify made getting life insurance so easy. Their support team was phenomenal!', role: 'Business Owner' },
  { id: 2, name: 'Priya Sharma', text: 'I highly recommend their health plans. Quick claim settlement and transparent process.', role: 'Software Engineer' },
  { id: 3, name: 'Amit Singh', text: 'Best auto insurance I have ever had. The roadside assistance was a lifesaver.', role: 'Marketing Manager' },
];

// --- COMPONENTS ---

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ['Home', 'Plans', 'About', 'Contact'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => setCurrentPage('Home')}>
          Insure<span>Simplify</span>
        </div>
        <div className="nav-links desktop-nav">
          {navLinks.map(link => (
            <button
              key={link}
              className={`nav-btn ${currentPage === link ? 'active' : ''}`}
              onClick={() => setCurrentPage(link)}
            >
              {link}
            </button>
          ))}
        </div>
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          {navLinks.map(link => (
            <button
              key={link}
              className={`nav-btn ${currentPage === link ? 'active' : ''}`}
              onClick={() => {
                setCurrentPage(link);
                setIsMobileMenuOpen(false);
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-col">
        <h4>InsureSimplify</h4>
        <p>Simplifying insurance for everyone. We believe in transparency, trust, and customer-first approach.</p>
        <div className="social-links">
          <span>📱</span> <span>💼</span> <span>🐦</span> <span>📸</span>
        </div>
      </div>
      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Plans</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Insurance Types</h4>
        <ul>
          <li><a href="#">Health Insurance</a></li>
          <li><a href="#">Life Insurance</a></li>
          <li><a href="#">Auto Insurance</a></li>
          <li><a href="#">Business Insurance</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Contact Info</h4>
        <ul>
          <li>📍 123 Finance Street, Mumbai</li>
          <li>📞 +91 98765 43210</li>
          <li>✉️ hello@insuresimplify.com</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} InsureSimplify. All rights reserved.</p>
    </div>
  </footer>
);

const PlanCard = ({ plan }) => (
  <div className={`plan-card type-${plan.type.toLowerCase()}`}>
    {plan.popular && <div className="badge popular-badge">Popular</div>}
    <div className="plan-header">
      <span className="plan-type">{plan.type}</span>
      <h3>{plan.name}</h3>
      <div className="plan-price">
        <span className="price">{plan.price}</span>
      </div>
      <div className="plan-coverage">Coverage: {plan.coverage}</div>
    </div>
    <ul className="plan-features">
      {plan.features.map((feature, idx) => (
        <li key={idx}>✓ {feature}</li>
      ))}
    </ul>
    <button className="btn btn-primary btn-block">Get Quote</button>
  </div>
);

// --- PAGES ---

const HomePage = ({ setCurrentPage }) => (
  <div className="page home-page animated slideUp">
    <section className="hero">
      <div className="hero-content">
        <h1 className="animated pulse">Simplify Your Insurance Journey</h1>
        <p>Protect what matters most with our transparent, affordable, and comprehensive insurance plans tailored just for you.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => setCurrentPage('Plans')}>Explore Plans</button>
          <button className="btn btn-outline" onClick={() => setCurrentPage('Contact')}>Get a Quote</button>
        </div>
      </div>
    </section>

    <section className="stats-bar">
      <div className="stat-item">
        <h3>10,000+</h3>
        <p>Customers</p>
      </div>
      <div className="stat-item">
        <h3>50+</h3>
        <p>Plans</p>
      </div>
      <div className="stat-item">
        <h3>98%</h3>
        <p>Satisfaction</p>
      </div>
      <div className="stat-item">
        <h3>24/7</h3>
        <p>Support</p>
      </div>
    </section>

    <section className="featured-plans section-padding">
      <div className="container">
        <h2 className="section-title">Featured Plans</h2>
        <div className="grid grid-3">
          {featuredPlans.map(plan => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>

    <section className="why-choose-us section-padding bg-light">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="grid grid-4">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Easy Claims</h3>
            <p>Our digital claims process ensures quick and hassle-free settlements.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎧</div>
            <h3>24/7 Support</h3>
            <p>Our dedicated support team is available round the clock to assist you.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Affordable Rates</h3>
            <p>Get the best coverage at highly competitive premiums.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Trusted Network</h3>
            <p>Access to thousands of network hospitals and garages nationwide.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="testimonials section-padding">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="grid grid-3">
          {testimonials.map(t => (
            <div key={t.id} className="testimonial-card glass">
              <p className="quote">"{t.text}"</p>
              <div className="customer-info">
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="cta-banner">
      <h2>Ready to Get Started?</h2>
      <p>Join thousands of satisfied customers who have secured their future with us.</p>
      <button className="btn btn-primary btn-large" onClick={() => setCurrentPage('Contact')}>Contact Us Today</button>
    </section>
  </div>
);

const PlansPage = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Health', 'Life', 'Auto', 'Home', 'Travel', 'Business'];

  const filteredPlans = filter === 'All' ? allPlans : allPlans.filter(p => p.type === filter);

  return (
    <div className="page plans-page section-padding animated fadeIn">
      <div className="container">
        <h2 className="page-title">Our Insurance Plans</h2>
        
        <div className="filters">
          {filters.map(f => (
            <button 
              key={f} 
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-3">
          {filteredPlans.map(plan => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div className="page about-page animated fadeIn">
    <section className="about-hero">
      <div className="container text-center">
        <h1>About InsureSimplify</h1>
        <p>Democratizing access to high-quality insurance since 2020.</p>
      </div>
    </section>

    <section className="company-story section-padding">
      <div className="container">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>Founded with a vision to make insurance accessible and understandable for everyone, InsureSimplify started as a small team of passionate industry veterans. We realized that traditional insurance processes were cumbersome, confusing, and often felt stacked against the customer. </p>
          <p>Today, we leverage cutting-edge technology to offer tailored insurance products that provide genuine value and peace of mind. We are committed to transparency, rapid claim settlements, and stellar customer support.</p>
        </div>
      </div>
    </section>

    <section className="mission-vision section-padding bg-light">
      <div className="container grid grid-2">
        <div className="mv-card">
          <h3>Our Mission</h3>
          <p>To provide simple, affordable, and comprehensive insurance solutions that protect our customers' most valuable assets and secure their future.</p>
        </div>
        <div className="mv-card">
          <h3>Our Vision</h3>
          <p>To be the world's most trusted and customer-centric insurance platform, pioneering innovations in risk management.</p>
        </div>
      </div>
    </section>

    <section className="team-section section-padding">
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="grid grid-4">
          {team.map(member => (
            <div key={member.id} className="team-card">
              <div className="avatar">{member.avatar}</div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', plan: 'Health', message: '' });
  const [toast, setToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    setFormState({ name: '', email: '', phone: '', plan: 'Health', message: '' });
    setTimeout(() => setToast(false), 3000);
  };

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

  return (
    <div className="page contact-page section-padding animated fadeIn">
      <div className="container">
        <h2 className="page-title text-center">Contact Us</h2>
        <div className="contact-layout grid grid-2">
          
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>We'd love to hear from you. Please fill out the form or reach out using the details below.</p>
            
            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <strong>Office Address</strong>
                <p>123 Finance Street, Bandra Kurla Complex, Mumbai, 400051</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p>+91 98765 43210 (Mon-Fri, 9am-6pm)</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>support@insuresimplify.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" value={formState.name} onChange={handleChange} required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" value={formState.email} onChange={handleChange} required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" value={formState.phone} onChange={handleChange} required placeholder="+91 99999 99999" />
              </div>
              <div className="form-group">
                <label>Plan Interest</label>
                <select name="plan" value={formState.plan} onChange={handleChange}>
                  <option value="Health">Health Insurance</option>
                  <option value="Life">Life Insurance</option>
                  <option value="Auto">Auto Insurance</option>
                  <option value="Home">Home Insurance</option>
                  <option value="Travel">Travel Insurance</option>
                  <option value="Business">Business Insurance</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={formState.message} onChange={handleChange} required rows="4" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      
      {toast && (
        <div className="toast slideUp">
          ✅ Message sent successfully! We will get back to you soon.
        </div>
      )}
    </div>
  );
};

// --- MAIN APP ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch(currentPage) {
      case 'Home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'Plans': return <PlansPage />;
      case 'About': return <AboutPage />;
      case 'Contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
