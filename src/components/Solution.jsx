import { motion } from 'framer-motion';
import slide3 from '../assets/slide3.png';
import { CheckCircle2 } from 'lucide-react';

const Solution = () => {
    return (
        <section id="solution" className="relative min-h-screen flex items-center justify-center bg-background py-20">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={slide3} alt="Solution Background" className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent uppercase tracking-widest text-sm mb-2"
                    >
                        The Mechanism
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white"
                    >
                        Protection & Precision
                    </motion.h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Instant Response", desc: "Every lead gets a fast reply, regardless of time.", delay: 0.2 },
                        { title: "Missed Call Text-Back", desc: "Never lose a lead to a busy signal again.", delay: 0.3 },
                        { title: "Automated Follow-Up", desc: "Consistent nurturing until they book or decline.", delay: 0.4 }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: item.delay }}
                            viewport={{ once: true }}
                            className="glass-panel p-8 rounded-xl hover:border-accent/30 transition-colors group"
                        >
                            <div className="bg-surface2 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="text-accent w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;
