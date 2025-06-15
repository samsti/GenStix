import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <motion.section className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-center py-20 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold mb-4">Ready to scale your results?</h2>
            <p className="mb-6 max-w-xl mx-auto">Get your free ad audit or strategy proposal. Zero obligation, just clarity.</p>
            <a href="#contact" className="inline-block bg-white text-emerald-600 font-semibold px-6 py-3 rounded shadow hover:shadow-md transition">Get My Audit</a>
        </motion.section>
    );
}