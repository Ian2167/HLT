import { motion } from 'framer-motion';
import slide2 from '../assets/slide2.png';

const Problem = () => {
    return (
        <section id="problem" className="relative h-screen flex items-center justify-center bg-background overflow-hidden">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={slide2} alt="Problem Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-accent uppercase tracking-widest text-sm mb-2">The Agitation</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Silent Failure.</h3>
                    <div className="h-1 w-20 bg-accent mb-8"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-2xl border-l-4 border-accent"
                >
                    <p className="text-xl text-gray-300 font-light leading-relaxed mb-6">
                        "I'll call you back." <br />
                        <span className="text-white font-medium">But you don't.</span>
                    </p>
                    <p className="text-gray-400 mb-4">
                        Missed calls turn into lost jobs. Leads go quiet. The owner guesses what is happening while premium clients move on to the next vendor on the list.
                    </p>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-center gap-3">
                            <span className="text-red-500">✕</span> Unanswered Line messages
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-red-500">✕</span> Forgotten follow-ups
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-red-500">✕</span> Inconsistent booking flow
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Problem;
