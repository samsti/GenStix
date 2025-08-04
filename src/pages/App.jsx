// src/pages/App.jsx

import React from "react";
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardMock from '../components/DashboardMock';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import AdminPanel from '../components/AdminPanel';
import BlogPost from '../components/BlogPost';
import LoginRegister from '../components/LoginRegister'; // <--- use this for login/register
import AIAgent from '../services/AIAgent';
import Automations from '../services/Automations';
import MetaAds from '../services/MetaAds';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../db/firebase';
import TestimonialSection from "../components/TestimonialSection";

// --- Import your dashboard as a page, not as a root ---
import Dashboard from "../dashboard/Dashboard"; // Adjust path if needed

function ProtectedRoute({ children }) {
    const [user, loading] = useAuthState(auth);
    if (loading) return (
        <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
            <div>Loading...</div>
        </div>
    );
    return user ? children : <Navigate to="/login" replace />;
}

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">404</h1>
            <p className="text-lg md:text-xl mb-6 max-w-md">
                Whatever you were trying to find here is not there anymore.
            </p>
            <Link
                to="/"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md text-sm md:text-base font-semibold hover:bg-emerald-500 transition"
            >
                Back to homepage
            </Link>
        </div>
    );
}

function App() {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        // Wait for Firebase to check auth state before showing anything
        return (
            <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <div className="relative flex flex-col min-h-screen scroll-smooth bg-black text-white font-sans">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Hero />
                            </motion.div>
                            <main className="flex-grow scroll-smooth relative z-20">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <TestimonialSection />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <Services />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <DashboardMock />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <Testimonials />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                >
                                    <Pricing />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    <FAQ />
                                </motion.div>
                                <motion.div
                                    id="contact"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    className="py-20 px-4"
                                >
                                    <ContactForm />
                                </motion.div>
                            </main>
                            <Footer />
                        </>
                    }
                />

                <Route path="/services/AIAgent" element={<AIAgent />} />
                <Route path="/services/Automations" element={<Automations />} />
                <Route path="/services/MetaAds" element={<MetaAds />} />
                <Route path="/admin" element={
                    <ProtectedRoute>
                        <AdminPanel />
                    </ProtectedRoute>
                } />
                {/* DASHBOARD ROUTE (protected) */}
                <Route path="/dashboard/*" element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
                {/* LOGIN/REGISTER (redirect to dashboard if already logged in) */}
                <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <LoginRegister />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
