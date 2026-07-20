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
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <a href="#pillars" className="hover:text-secondary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all">
              Pillars
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
            <a href="#pillars" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-slate-100 hover:text-secondary">
              Pillars
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
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
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
        {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-3.5 h-3.5 rounded-full border border-white/50 transition-all ${
                i === activeSlide ? "bg-white w-8 border-white" : "bg-transparent hover:bg-white/20"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div> */}
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
                Vichoor Vellivoyal Industries Welfare Association (VVIWA)
              </h2>
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

      {/* 6. Core Pillars / Slogans Section (Replicating bottom banner of the image) */}
      <section id="pillars" className="py-16 md:py-20 bg-primary-navy text-white relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-dark)_20%,_transparent_70%)] opacity-80" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">
              STRATEGIC FOUNDATIONS
            </span>
            <h2 className="text-3xl font-extrabold mt-1">
              The Three Core Pillars of VVIWA
            </h2>
            <div className="h-0.5 bg-accent w-16 mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition duration-300 group flex flex-col justify-between items-center text-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition duration-300">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">
                Strong Industry, Stronger Community, Sustainable Future
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light mt-2">
                Advocating industrial development that directly aids community welfare and maintains structural safety.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition duration-300 group flex flex-col justify-between items-center text-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition duration-300">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">
                Together We Grow
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light mt-2">
                Fostering an inclusive network where small businesses and multi-national corporations grow collaboratively.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition duration-300 group flex flex-col justify-between items-center text-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition duration-300">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">
                Sustainable Today, Stronger Tomorrow
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light mt-2">
                Pioneering eco-friendly initiatives and standardizing modern environment management across all factory floors.
              </p>
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
                    VVIWA Association Building, Block A,<br />
                    Vichoor Industrial Estate, Ponneri High Road,<br />
                    Vichoor, Chennai - 600103,<br />
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
                    Landline: +91 44 2659 1234<br />
                    Mobile Helpline: +91 98400 98765 / +91 94440 12345
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
                    General Inquiries: info@vviwa.org<br />
                    Secretary Desk: secretary@vviwa.org<br />
                    Membership Support: members@vviwa.org
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
                    href="https://maps.google.com/?q=Vichoor+Chennai"
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
                {/* Social icons */}
                {["facebook", "twitter", "linkedin"].map((soc) => (
                  <a
                    key={soc}
                    href={`https://${soc}.com`}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition"
                    aria-label={`Visit our ${soc}`}
                  >
                    <span className="text-[10px] uppercase font-bold text-slate-200">{soc[0]}</span>
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
                <li><a href="#pillars" className="hover:text-accent transition">Our 3 Core Pillars</a></li>
                <li><a href="#initiatives" className="hover:text-accent transition">Welfare Services</a></li>
              </ul>
            </div>

            {/* Column 3: Initiatives */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2 mb-4">
                Key Initiatives
              </h4>
              <ul className="space-y-2 text-xs font-light text-slate-300">
                <li><a href="#initiatives" className="hover:text-accent transition">Infrastructure Upgrades</a></li>
                <li><a href="#initiatives" className="hover:text-accent transition">MSME Subsidy Aid</a></li>
                <li><a href="#initiatives" className="hover:text-accent transition">Pollution Board Liaison</a></li>
                <li><a href="#initiatives" className="hover:text-accent transition">Vocational Training</a></li>
                <li><a href="#membership" className="hover:text-accent transition">Membership Registrations</a></li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2 mb-4">
                Secretariat
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
                Block A, Vichoor Industrial Estate,<br />
                Ponneri High Road, Vichoor,<br />
                Chennai - 600103, India
              </p>
              <p className="text-xs text-slate-300 font-light">
                <strong>Phone:</strong> +91 44 2659 1234<br />
                <strong>Email:</strong> info@vviwa.org
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
