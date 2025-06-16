// src/App.jsx
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardMock from '../components/DashboardMock';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Highlight from '../components/Highlight';
import BlogSection from '../components/BlogSection';
import AdminPanel from '../components/AdminPanel';
import BlogPost from '../components/BlogPost';
import Login from '../components/Login';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../db/firebase';

function ProtectedRoute({ children }) {
    const [user, loading] = useAuthState(auth);
    if (loading) return <div className="text-center py-20">Loading...</div>;
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
    const [user] = useAuthState(auth);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="flex flex-col min-h-screen scroll-smooth bg-white text-gray-900 font-sans">
                            <Navbar />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Hero />
                            </motion.div>
                            <main className="flex-grow scroll-smooth">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    <Highlight />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <Services animated />
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
                                    <BlogSection />
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
                        </div>
                    }
                />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <AdminPanel />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/login"
                    element={user ? <Navigate to="/admin" replace /> : <Login />}
                />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;