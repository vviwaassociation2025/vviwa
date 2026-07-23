"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { VviwaIcon, LogoHorizontal, LogoFullBanner } from "./logo";

// Custom icons for the 7 Mission Items
function InvestmentIcon() {
  return (
    <svg className="w-6 height-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function EmploymentIcon() {
  return (
    <svg className="w-6 height-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function MsmeIcon() {
  return (
    <svg className="w-6 height-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function CollaborationIcon() {
  return (
    <svg className="w-6 height-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function ComplianceIcon() {
  return (
    <svg className="w-6 height-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function InfrastructureIcon() {
  return (
    <svg className="w-6 height-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  );
}

function SustainabilityIcon() {
  return (
    <svg className="w-6 height-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  );
}
const socialPlatforms = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/14tbHYTmRuK/",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vviwa_2025?igsh=MXd5NnhldDdkY21nMA%3D%3D&utm_source=qr",
  },
];

const bylawsPages = [
  {
    title: "Eco-Development & Employment",
    items: [
      { id: "a", text: "To promote and develop Eco-friendly environment, mutual good-will and co-operation, cultural, literary, intellectual consciousness, economic co-operation and such other activities as are deemed to be of common interest to the members irrespective of caste, cadre, creed, religion, age and sex." },
      { id: "b", text: "To promote friendly relationship between employer and employee." },
      { id: "c", text: "To provide employments to the poor, downtrodden marginal community people, particularly to the people of Vichoor, Vellivoyal villagers and also nearby villagers from Manali and Manali New Town." },
      { id: "d", text: "To co-coordinate with Government officials, Local Panchayat and bring in roads, ensure proper sanitation, sewage facilities, proper street light maintenance and installation of street lights and to provide proper drinking water to the Association members." },
      { id: "e", text: "To ensure that there should not be any political Parties interference on Business or trade related activities." },
      { id: "f", text: "To ensure that there should not be any interference of fringe and antisocial elements in the business administration or any threatening in any regard." }
    ]
  },
  {
    title: "Legal Support & Community Welfare",
    items: [
      { id: "g", text: "To give legal awareness regarding the statutory compliances to the Association members i.e., PF, ESI, GST, Income Tax, etc.," },
      { id: "h", text: "To give proper legal support to the Association members." },
      { id: "i", text: "To ensure necessary arrangements to the villagers at the time of flood or any natural calamities." },
      { id: "j", text: "To establish, manage and improve facilities like library, medical clinic and ambulance to the Association members and to the people of villagers." },
      { id: "k", text: "To provide assistance to the members in the matter of disputes with neighbors and others as and when necessity arises." },
      { id: "l", text: "To conduct exhibition expo or other related exhibition expo to promote industrial manufactories." }
    ]
  },
  {
    title: "Government Liaison & Internal Administration",
    items: [
      { id: "m", text: "To meet the Government authorities to promote and develop the industrial manufacturing and also co-ordinate to get the Government subsidies and beneficial for eligible Companies." },
      { id: "n", text: "To provide guidance for pollution norms for Association members and also help them to comply government norms." },
      { id: "o", text: "In the event of any office bearer laying down office for whatever reasons, the executive committee can co-opt any member consider suitable for the office for the remaining period of the tenure or till election re-held." },
      { id: "p", text: "To ensure and promote the primary aim and objectives of the Association." },
      { id: "q", text: "May decide to expel a member of executive committee or a member of the association in case anyone is convicted or any criminal offence or prove insanity or any members action in contravention to the By-laws." },
      { id: "r", text: "Executive committee shall have power to appeal and raise funds and fulfil the formalities incumbent upon it." }
    ]
  },
  {
    title: "Funding, Operations & Meetings",
    items: [
      { id: "s", text: "To accept from Government, Non-Government, local bodies, organization and individuals grants, donations, subscriptions or any property movable/immovable for furtherance of the objectives of the Association." },
      { id: "t", text: "Executive committee may invite to their meetings not more than two specialists/experts who may be non-members of the association whose presence with the deliberations is considered useful." },
      { id: "u", text: "To retain, appoint, promote and dismiss any employees for managing and functioning of the Association and to regulate their terms and conditions of employment including remuneration." },
      { id: "v", text: "To make the rules and by-laws and get approval." },
      { id: "w", text: "Any vacancy that may arise in the Executive Committee may be filled up by the remaining committee members." },
      { id: "x", text: "Any member of the executive committee being absent for three successive meetings without proper cause shall cease to be a member of the executive committee. However he/she is eligible to be re-elected." },
      { id: "y", text: "The executive committee is to meet every month or earlier if there is any business to consider and Secretary shall convene such meetings 1/3rd shall quorum." }
    ]
  }
];

export default function HomePage() {
  // Hero Carousel State
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      title: "Vichoor Vellivoyal Industries Welfare Association",
      subtitle: "TOGETHER FOR INDUSTRIAL GROWTH AND COMMUNITY WELFARE",
      description: "Empowering industries, fostering community growth, and leading infrastructure development in North Chennai.",
      bgClass: "bg-radial-[circle_at_center,_var(--color-primary-navy)_30%,_var(--color-primary-dark)_100%]",
      badge: "ESTABLISHED WELFARE FORUM"
    },
    {
      title: "Strong Industry, Stronger Community, Sustainable Future",
      subtitle: "TOGETHER WE GROW",
      description: "Creating a harmonious ecosystem where economic progress goes hand in hand with environmental care and community well-being.",
      bgClass: "bg-radial-[circle_at_center,_#004B87_30%,_var(--color-primary-navy)_100%]",
      badge: "OUR CORE PILLAR"
    },
    {
      title: "Sustainable Today, Stronger Tomorrow",
      subtitle: "NORTH CHENNAI INDUSTRIAL HUB",
      description: "Pioneering MSME growth, training the local workforce, and establishing a world-class resilient industrial zone.",
      bgClass: "bg-radial-[circle_at_center,_#005596_30%,_#051B2E_100%]",
      badge: "VISION FOR TOMORROW"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const leaders = [
    {
      name: "DR.S.SUBRAMANI",
      designation: "President, VVIWA",
      company: "Tavron Engineers India Pvt.Ltd",
      image: "/chairman_1.jpeg"
    },
    {
      name: "MR.MANOHARAN",
      designation: "Vice President, VVIWA",
      company: "Thirurani Logistics",
      image: "/chairman_2.jpeg"
    },
    {
      name: "MR.DAMODHARAN",
      designation: "Treasurer, VVIWA",
      company: "VVIWA",
      image: "/chairman_3.jpeg"
    },
    {
      name: "MR.RIZWAN",
      designation: "Secretary, VVIWA",
      company: "HRF Infra",
      image: "/chairman_4.jpeg"
    }
  ];

  const [activeLeader, setActiveLeader] = useState(0);
  const [isLeaderPaused, setIsLeaderPaused] = useState(false);

  useEffect(() => {
    if (isLeaderPaused) return;
    const timer = setInterval(() => {
      setActiveLeader((prev) => (prev + 1) % leaders.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isLeaderPaused, leaders.length]);


  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // By-Laws Carousel State
  const [activeBylawPage, setActiveBylawPage] = useState(0);

  const prevBylawPage = () => {
    setActiveBylawPage((prev) => (prev === 0 ? bylawsPages.length - 1 : prev - 1));
  };

  const nextBylawPage = () => {
    setActiveBylawPage((prev) => (prev === bylawsPages.length - 1 ? 0 : prev + 1));
  };

  // Membership Form State
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industryType: "Manufacturing",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.companyName.trim()) errors.companyName = "Company name is required";
    if (!formData.contactPerson.trim()) errors.contactPerson = "Contact person name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s\-]{8,15}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number format";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setIsSubmitted(true);
      // Mock submit
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        industryType: "Manufacturing",
        message: ""
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-text-dark flex flex-col">
      {/* 1. Top Bar (Inspired by reference styles) */}
      {/*  <div className="bg-primary text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 44 2659 1234
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@vviwa.org
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/80 font-medium bg-white/10 px-2 py-0.5 rounded">North Chennai Hub</span>
            <a href="#membership" className="bg-secondary text-white px-3 py-1 rounded-full font-semibold hover:bg-secondary/90 transition">
              Apply for Membership
            </a>
          </div>
        </div>
      </div> */}

      {/* 2. Sticky Glassmorphic Header Navbar */}
      <header id="header" className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
          <Link href="#hero">
            <LogoHorizontal iconSize={44} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-bold text-primary-navy tracking-wider uppercase">
            <a href="#hero" className="hover:text-secondary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all">
              Home
            </a>
            <a href="#about" className="hover:text-secondary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all">
              About Us
            </a>
            <a href="#vision-mission" className="hover:text-secondary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all">
              Vision & Mission
            </a>
            <a href="#by-laws" className="hover:text-secondary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all">
              By-Laws
            </a>
            <a href="#pillars" className="hover:text-secondary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all">
              Leadership
            </a>
            <a href="#initiatives" className="hover:text-secondary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all">
              Services
            </a>
            {/* <a href="#membership" className="hover:text-secondary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all">
              Membership
            </a> */}
            <a href="#contact" className="hover:text-secondary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all">
              Contact
            </a>
          </nav>

          {/* Mobile Menu button */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-primary-navy p-1.5 focus:outline-none focus:ring-2 focus:ring-secondary rounded"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-slate-200 bg-white/95 px-4 py-4 space-y-3 font-semibold text-primary-navy text-sm shadow-inner transition duration-200">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-slate-100 hover:text-secondary">
              Home
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-slate-100 hover:text-secondary">
              About Us
            </a>
            <a href="#vision-mission" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-slate-100 hover:text-secondary">
              Vision & Mission
            </a>
            <a href="#by-laws" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-slate-100 hover:text-secondary">
              By-Laws
            </a>
            <a href="#pillars" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-slate-100 hover:text-secondary">
              Leadership
            </a>
            <a href="#initiatives" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-slate-100 hover:text-secondary">
              Services
            </a>
            {/* <a href="#membership" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-slate-100 hover:text-secondary">
              Membership
            </a> */}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-slate-100 hover:text-secondary">
              Contact
            </a>
          </div>
        )}
      </header>

      {/* 3. Hero Carousel Section */}
      <section id="hero" className="relative min-h-[500px] md:min-h-[600px] text-white overflow-hidden flex items-center">
        {/* Slides loop */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              } ${slide.bgClass}`}
          >
            {/* Mesh Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--color-secondary)_0%,_transparent_50%)] opacity-35" />
            <div className="absolute inset-0 bg-repeat bg-[linear-gradient(to_right,_rgba(255,255,255,0.05)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl animate-fade-in">
                  <span className="inline-flex items-center gap-1.5 bg-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                    {slide.badge}
                  </span>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight md:leading-none">
                    {slide.title}
                  </h2>

                  <p className="mt-4 text-xs sm:text-sm font-bold tracking-widest text-accent uppercase">
                    {slide.subtitle}
                  </p>

                  <p className="mt-6 text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    {/* <a
                      href="#membership"
                      className="bg-white text-primary hover:bg-slate-100 px-6 py-3 rounded-full text-sm font-bold shadow-lg transition-transform hover:-translate-y-0.5"
                    >
                      Apply For Membership
                    </a> */}
                    <a
                      href="#about"
                      className="border border-white/30 hover:border-white/80 hover:bg-white/5 px-6 py-3 rounded-full text-sm font-bold transition"
                    >
                      Read Objectives
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-3.5 h-3.5 rounded-full border border-white/50 transition-all ${i === activeSlide ? "bg-white w-8 border-white" : "bg-transparent hover:bg-white/20"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 4. Welcome & About Section (Inspired by Tavron layout) */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left side: content */}
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold tracking-widest text-secondary uppercase block mb-2">
                WELFARE ASSOCIATION IN CHENNAI
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy tracking-tight leading-tight">
                Vichoor Vellivoyal Industries Owners Welfare Association (VVIWA)
              </h2>
               <span className="text-[1xl] pt-1 font-medium tracking-normal text-text-muted leading-none uppercase">
                Reg.No: 90/2025
        </span>
              <div className="h-1 bg-secondary w-20 mt-4 mb-6 rounded-full" />

              <p className="text-base text-text-muted leading-relaxed font-light">
                Established as the unified voice for industrial growth and community welfare in North Chennai,
                VVIWA acts as a bridging catalyst. We represent hundreds of large, medium, and small scale enterprises
                operating within the Vichoor and Vellivoyal industrial zones.
              </p>

              <p className="mt-4 text-base text-text-muted leading-relaxed font-light">
                Our objective is simple yet profound: **Together for Industrial Growth and Community Welfare**.
                We coordinate with government institutions, implement infrastructure upgrades, ensure clean environmental practices,
                and launch skill development workshops to create local jobs and push economic development in Tamil Nadu.
              </p>

              <blockquote className="mt-8 border-l-4 border-primary bg-brand-light/70 p-4 rounded-r-xl italic text-primary-navy font-medium text-sm">
                "We represent a collaborative vision where businesses flourish and local communities progress hand in hand,
                laying the groundwork for North Chennai's most competitive industrial corridor."
              </blockquote>
            </div>

            {/* Right side: Branding Graphic Banner matching the image */}
            <div className="lg:col-span-5">
              <LogoFullBanner className="transform hover:scale-[1.02] transition-transform duration-300 shadow-xl border-slate-100" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Vision & Mission Section (Replicating Image layout) */}
      <section id="vision-mission" className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-secondary uppercase">
              STRATEGIC DIRECTIVES
            </span>
            <h2 className="text-3xl font-extrabold text-primary-navy mt-2">
              Our Core Direction & Commitment
            </h2>
            <div className="h-1 bg-secondary w-16 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* LEFT CARD: VISION CARD (Replicates blue vision box from image) */}
            <div className="lg:col-span-5 flex">
              <div className="bg-gradient-to-b from-primary to-primary-navy text-white rounded-3xl p-8 shadow-xl flex flex-col items-center justify-between text-center relative overflow-hidden flex-1 border border-primary/20">
                {/* Background graphic elements */}
                <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-white/5" />
                <div className="absolute -left-16 -bottom-16 w-32 h-32 rounded-full bg-white/5" />

                {/* Top Target Circle */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/20 mb-4 hover:rotate-12 transition-transform duration-300">
                    <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold tracking-widest uppercase">
                    Vision
                  </h3>
                  <div className="w-12 h-0.5 bg-accent/60 my-2" />
                </div>

                {/* Main Quote Content */}
                <div className="relative z-10 my-8">
                  <span className="text-6xl font-serif text-accent/25 block leading-none select-none absolute -top-8 -left-4">
                    “
                  </span>
                  <p className="text-base sm:text-lg font-light leading-relaxed px-4 tracking-wide relative z-10 text-slate-100">
                    To establish VVIWA as North Chennai's most resilient, globally competitive, sustainable and investment friendly industrial ecosystem
                  </p>
                  <span className="text-6xl font-serif text-accent/25 block leading-none select-none absolute -bottom-14 -right-4">
                    ”
                  </span>
                </div>

                {/* Bottom Illustration */}
                <div className="relative z-10 opacity-15 w-full flex justify-center mt-4">
                  <svg className="w-32 h-12" fill="currentColor" viewBox="0 0 200 40">
                    <path d="M 10 35 L 200 35 M 30 35 L 30 15 L 45 15 L 45 25 L 60 25 L 60 10 L 75 10 L 75 35 M 95 35 L 95 18 L 110 18 L 110 35 M 130 35 L 145 20 L 160 35" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
            </div>

            {/* RIGHT CARD: MISSION CARD (Replicates mission card checklist from image) */}
            <div className="lg:col-span-7 flex">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between flex-1">
                {/* Header */}
                <div className="text-center mb-6">
                  <span className="inline-block bg-primary text-white text-sm font-bold tracking-widest px-8 py-2 rounded-full uppercase">
                    — MISSION —
                  </span>
                </div>

                {/* 7 Mission List Items */}
                <div className="space-y-4">
                  {[
                    {
                      num: "1",
                      text: "Position VVIWA as a preferred investment location in TN",
                      icon: <InvestmentIcon />
                    },
                    {
                      num: "2",
                      text: "Generate employment and skill development initiatives for local communities",
                      icon: <EmploymentIcon />
                    },
                    {
                      num: "3",
                      text: "MSME growth",
                      icon: <MsmeIcon />
                    },
                    {
                      num: "4",
                      text: "Government – Industry collaboration",
                      icon: <CollaborationIcon />
                    },
                    {
                      num: "5",
                      text: "Ensure regulatory compliance and environment management",
                      icon: <ComplianceIcon />
                    },
                    {
                      num: "6",
                      text: "Improve common infrastructure and logistics",
                      icon: <InfrastructureIcon />
                    },
                    {
                      num: "7",
                      text: "Promote sustainable industrial infrastructure growth",
                      icon: <SustainabilityIcon />
                    }
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="flex items-start gap-4 p-3 rounded-xl border border-slate-100 hover:border-secondary/20 hover:bg-brand-light/50 transition duration-200"
                    >
                      {/* Left Circular Icon (White BG with primary color border) */}
                      <div className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center shrink-0 shadow-sm">
                        {item.icon}
                      </div>

                      {/* Number & Text */}
                      <div className="flex gap-2 pt-1.5 text-sm sm:text-base text-text-dark font-medium">
                        <span className="font-extrabold text-primary shrink-0">{item.num}.</span>
                        <span>{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5. Association By-Laws Section (Horizontal Carousel) */}
      <section id="by-laws" className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Gradient/Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/50 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-sky/40 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold tracking-widest text-secondary uppercase block mb-2">
              CONSTITUTION & RULES
            </span>
            <h2 className="text-3xl font-extrabold text-primary-navy mt-1">
              Association By-Laws
            </h2>
            <div className="h-1 bg-secondary w-16 mx-auto mt-3 rounded-full" />
            <p className="mt-4 text-sm text-text-muted font-light leading-relaxed">
              Vichoor Vellivoyal Industries Welfare Association (VVIWA) operates under established guidelines to promote industrial harmony, compliance, and community welfare.
            </p>
          </div>

          {/* Carousel Viewport Container */}
          <div className="relative bg-brand-light/30 border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-sm backdrop-blur-sm">
            {/* Carousel Inner Track */}
            <div className="overflow-hidden w-full relative">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translate3d(-${activeBylawPage * 100}%, 0, 0)` }}
              >
                {bylawsPages.map((page, pageIdx) => (
                  <div key={pageIdx} className="w-full shrink-0 px-2 md:px-4">
                    <div className="text-center mb-8">
                      <span className="inline-block text-xs font-bold text-primary tracking-widest uppercase bg-brand-sky px-4 py-1.5 rounded-full border border-secondary/15">
                        Part {pageIdx + 1} of 4: {page.title}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                      {page.items.map((item) => {
                        const isLastItemOnPage4 = pageIdx === 3 && item.id === "y";
                        return (
                          <div
                            key={item.id}
                            className={`bg-white border border-slate-100/80 rounded-2xl p-5 hover:shadow-md hover:border-secondary/20 transition-all duration-300 flex items-start gap-4 hover:-translate-y-0.5 shadow-sm h-full ${
                              isLastItemOnPage4 ? "lg:col-span-3 md:col-span-2 bg-gradient-to-r from-white to-brand-light/20" : ""
                            }`}
                          >
                            {/* Letter Circle Indicator with Gradient */}
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-extrabold flex items-center justify-center shrink-0 shadow-sm text-sm uppercase">
                              {item.id}
                            </div>
                            <p className="text-text-dark font-medium text-[13.5px] leading-relaxed pt-0.5">
                              {item.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left & Right Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-5 z-20">
              <button
                onClick={prevBylawPage}
                className="p-2.5 md:p-3.5 rounded-full border border-slate-200 bg-white text-primary hover:text-secondary hover:bg-brand-light hover:border-primary/20 hover:scale-105 transition-all shadow-md cursor-pointer flex items-center justify-center focus:outline-none"
                aria-label="Previous by-laws page"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-5 z-20">
              <button
                onClick={nextBylawPage}
                className="p-2.5 md:p-3.5 rounded-full border border-slate-200 bg-white text-primary hover:text-secondary hover:bg-brand-light hover:border-primary/20 hover:scale-105 transition-all shadow-md cursor-pointer flex items-center justify-center focus:outline-none"
                aria-label="Next by-laws page"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Indicators / Progress Dot Panel */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex justify-center gap-2.5">
              {bylawsPages.map((page, i) => (
                <button
                  key={i}
                  onClick={() => setActiveBylawPage(i)}
                  className={`transition-all duration-300 h-2.5 rounded-full cursor-pointer focus:outline-none ${
                    i === activeBylawPage ? "bg-primary w-8 shadow-sm" : "bg-slate-300 w-2.5 hover:bg-slate-400"
                  }`}
                  title={page.title}
                  aria-label={`Go to by-laws page ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              {bylawsPages[activeBylawPage].title}
            </span>
          </div>
        </div>
      </section>

      {/* 6. Executive Committee / Leadership Section */}
      <section id="pillars" className="py-16 md:py-20 bg-primary-navy text-white relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-dark)_20%,_transparent_70%)] opacity-80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">
              VVIWA LEADERSHIP
            </span>
            <h2 className="text-3xl font-extrabold mt-1">
              Executive Committee
            </h2>
            <div className="h-0.5 bg-accent w-16 mx-auto mt-3" />
          </div>

          {/* Carousel View */}
          <div 
            className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-colors duration-300 shadow-xl overflow-hidden max-w-2xl mx-auto"
            onMouseEnter={() => setIsLeaderPaused(true)}
            onMouseLeave={() => setIsLeaderPaused(false)}
          >
            {/* Slide Container */}
            <div className="relative min-h-[340px] md:min-h-[320px] flex items-center justify-center">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className={`w-full text-center transition-all duration-700 ease-in-out flex flex-col items-center ${
                    index === activeLeader 
                      ? "opacity-100 scale-100 translate-x-0 relative z-10" 
                      : "opacity-0 scale-95 pointer-events-none absolute inset-0 z-0"
                  }`}
                >
                  {/* Leader Image */}
                  <div className="w-40 h-40 md:w-44 md:h-44 rounded-full border-4 border-accent shadow-lg shadow-accent/20 overflow-hidden bg-slate-800 relative group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Leader Stack: Name & Designation */}
                  <div className="mt-6 flex flex-col items-center">
                    <h3 className="text-xl md:text-2xl font-extrabold tracking-wide text-white">
                      {leader.name}
                    </h3>
                    <span className="mt-2 inline-block px-3 py-1 bg-accent/15 border border-accent/30 rounded-full text-xs md:text-sm font-bold tracking-wider text-accent uppercase">
                      {leader.designation}
                    </span>
                    <p className="mt-2 text-sm text-slate-300 font-light tracking-wide italic">
                      {leader.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Left/Right Navigation Arrows */}
            <button
              onClick={() => setActiveLeader((prev) => (prev - 1 + leaders.length) % leaders.length)}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent z-20 cursor-pointer shadow-lg"
              aria-label="Previous Leader"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveLeader((prev) => (prev + 1) % leaders.length)}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent z-20 cursor-pointer shadow-lg"
              aria-label="Next Leader"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
              {leaders.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveLeader(i)}
                  className={`w-3 h-3 rounded-full border border-white/30 transition-all duration-300 cursor-pointer ${
                    i === activeLeader ? "bg-accent w-6 border-accent" : "bg-transparent hover:bg-white/20"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Welfare Initiatives & Services (Inspired by reference services section) */}
      <section id="initiatives" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-secondary uppercase">
              ASSOCIATION INITIATIVES
            </span>
            <h2 className="text-3xl font-extrabold text-primary-navy mt-2">
              Our Industrial Support Services
            </h2>
            <div className="h-1 bg-secondary w-16 mx-auto mt-3 rounded-full" />
            <p className="text-text-muted text-sm mt-4 font-light">
              Designed to help local organizations in Vichoor & Vellivoyal operate smoothly, maintain compliance, and upscale infrastructure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Common Infrastructure",
                desc: "Facilitating high-grade internal roads, proper street lighting, industrial drainage systems, and water supply grids.",
                icon: (
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              {
                title: "Logistics Optimization",
                desc: "Working on smooth connectivity to local Chennai ports, setting up shared container storage yards, and optimizing logistics routes.",
                icon: (
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                )
              },
              {
                title: "Regulatory Compliance",
                desc: "Providing guidance on pollution control boards (TNPCB), fire safety norms, municipal tax regulations, and factory safety acts.",
                icon: (
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                title: "MSME Growth Programs",
                desc: "Facilitating central & state financial subsidies, introducing technology partners, and organizing marketing and export opportunities.",
                icon: (
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                )
              },
              {
                title: "Government Liaison",
                desc: "Representing industry grievances before electricity boards, SIPCOT, taxation departments, and district administration offices.",
                icon: (
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                )
              },
              {
                title: "Skill & Workforce Development",
                desc: "Organizing vocational training, fire safety drills, technical workshops, and direct placement drives for local communities.",
                icon: (
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.832.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              }
            ].map((srv, idx) => (
              <article
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-secondary/20 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-white transition duration-300 shadow-sm">
                  {srv.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-navy mb-3 group-hover:text-primary transition duration-300">
                  {srv.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-light">
                  {srv.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Interactive Membership Application Form */}


      {/* 9. Contact Us Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-secondary uppercase">
              REACH OUR SECRETARIAT
            </span>
            <h2 className="text-3xl font-extrabold text-primary-navy mt-2">
              Contact & Location Information
            </h2>
            <div className="h-1 bg-secondary w-16 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Contact details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:border-secondary/20 transition">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary-navy text-sm uppercase tracking-wide">Registered Office Address</h4>
                  <p className="text-sm text-text-muted mt-2 leading-relaxed font-light">
                    VVIWA Association Building,<br />
                    No. 38/42, Arulmurugan nagar, Vichoor,<br />
                    Manali New Town, Chennai - 600103,<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:border-secondary/20 transition">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary-navy text-sm uppercase tracking-wide">Phone & Hotlines</h4>
                  <p className="text-sm text-text-muted mt-2 font-light">
                    {/* Landline: +91 44 2659 1234<br /> */}
                    Mobile Helpline: +91 94440 26415 / +91 80560 91909
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:border-secondary/20 transition">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary-navy text-sm uppercase tracking-wide">Email Communications</h4>
                  <p className="text-sm text-text-muted mt-2 font-light">
                    Support : vviwaassociation2025@gmail.com<br />
                    {/* Secretary Desk: secretary@vviwa.org<br /> */}
                  </p>
                </div>
              </div>
            </div>

            {/* Mock map container matching clean, styled aesthetic of reference */}
            <div className="lg:col-span-7 flex">
              <div className="bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden relative flex-1 min-h-[300px] shadow-inner flex flex-col justify-between p-6">
                {/* Visual Representation of Map styling */}
                <div className="absolute inset-0 bg-sky-100/60 flex items-center justify-center">
                  {/* Grid Lines mimicking Map */}
                  <div className="absolute inset-0 opacity-20 bg-repeat bg-[radial-gradient(circle_at_center,_#005C9E_1px,_transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                  <div className="absolute top-1/2 left-1/4 w-40 h-2 bg-slate-300/80 rounded-full transform -rotate-12" />
                  <div className="absolute top-1/3 left-1/2 w-48 h-3 bg-slate-300/80 rounded-full transform rotate-45" />
                  <div className="absolute top-1/4 right-1/4 w-32 h-2.5 bg-slate-300/80 rounded-full transform -rotate-45" />

                  {/* Highlighted Pin Area */}
                  <div className="relative flex flex-col items-center animate-bounce">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg border-2 border-white text-white">
                      <VviwaIcon size={24} />
                    </div>
                    <span className="bg-primary-navy text-white text-[10px] font-bold px-2 py-0.5 rounded shadow mt-1 uppercase whitespace-nowrap">
                      VVIWA SECRETARIAT
                    </span>
                  </div>
                </div>

                <div className="relative z-10 bg-white/90 backdrop-blur rounded-2xl p-4 shadow border border-slate-200 w-full sm:max-w-xs mt-auto">
                  <h5 className="font-bold text-primary-navy text-xs uppercase">Secretariat Hours</h5>
                  <p className="text-[11px] text-text-muted mt-1 font-light">
                    Monday to Saturday: 09:30 AM - 06:00 PM<br />
                    Sunday: Closed
                  </p>
                  <a
                    href="https://maps.app.goo.gl/FGXhVHLKzPXzo3tp9?g_st=iwb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-secondary font-bold hover:underline inline-flex items-center gap-1 mt-2.5"
                  >
                    Open in Google Maps
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer Section (Inspired by reference template footer) */}
      <footer className="bg-primary-dark text-white border-t border-white/5 py-12 md:py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> */}
            {/* Column 1: Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1">
                  <VviwaIcon size={32} />
                </div>
                <span className="text-lg font-extrabold tracking-wider uppercase">VVIWA</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Vichoor Vellivoyal Industries Welfare Association is dedicated to helping businesses grow and enhancing local communities in North Chennai since establishment.
              </p>
              <div className="flex items-center gap-3 pt-2">
                {socialPlatforms.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition"
                    aria-label={`Visit our ${social.name}`}
                  >
                    <span className="text-[10px] uppercase font-bold text-slate-200">
                      {social.name[0]}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2 mb-4">
                Useful Navigation
              </h4>
              <ul className="space-y-2 text-xs font-light text-slate-300">
                <li><a href="#hero" className="hover:text-accent transition">Home Page</a></li>
                <li><a href="#about" className="hover:text-accent transition">Who We Are</a></li>
                <li><a href="#vision-mission" className="hover:text-accent transition">Vision & Objectives</a></li>
                <li><a href="#by-laws" className="hover:text-accent transition">Association By-Laws</a></li>
                <li><a href="#pillars" className="hover:text-accent transition">Executive Committee</a></li>
                <li><a href="#initiatives" className="hover:text-accent transition">Welfare Services</a></li>
              </ul>
            </div>

            {/* Column 3: Initiatives */}
            {/* <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2 mb-4">
                Key Initiatives
              {/* </h4> */}
              {/* <ul className="space-y-2 text-xs font-light text-slate-300">
                <li><a href="#initiatives" className="hover:text-accent transition">Infrastructure Upgrades</a></li>
                <li><a href="#initiatives" className="hover:text-accent transition">MSME Subsidy Aid</a></li>
                <li><a href="#initiatives" className="hover:text-accent transition">Pollution Board Liaison</a></li>
                <li><a href="#initiatives" className="hover:text-accent transition">Vocational Training</a></li>
                <li><a href="#membership" className="hover:text-accent transition">Membership Registrations</a></li>
              </ul> */}
           

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2 mb-4">
                Secretariat
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
                VVIWA Association Building,<br />
                No. 7/4, F-1, R K Flat, 4th Street, Kumaran Colony,<br />
                Vadapalani, Chennai-600034,<br />
                Tamil Nadu, India
              </p>
              <p className="text-xs text-slate-300 font-light">
                <strong>Phone:</strong> +91 94440 26415 / +91 80560 91909<br />
                <strong>Email:</strong> vviwaassociation2025@gmail.com
              </p>
            </div>
             </div> 

          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-slate-400">
            <p>
              © {new Date().getFullYear()} <strong>VVIWA</strong> (Vichoor Vellivoyal Industries Welfare Association). All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
