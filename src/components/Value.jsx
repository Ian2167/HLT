import { motion } from 'framer-motion';
import slide4 from '../assets/slide4.png';
import { ArrowRight, TrendingUp, ShieldCheck, Users } from 'lucide-react';

const Value = () => {
    return (
        <section id="value" className="relative h-screen flex items-center justify-center bg-background overflow-hidden">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={slide4} alt="Value Background" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-accent uppercase tracking-widest text-sm mb-4">The Value</h2>
                    <h3 className="text-5xl md:text-6xl font-bold text-white mb-8">What is at Risk?</h3>
                    <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
                        Your reputation. Your growth. The trust of your most premium clients.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {[
                        { icon: TrendingUp, title: "Revenue", text: "More booked jobs from the leads you already pay for." },
                        { icon: ShieldCheck, title: "Control", text: "A simple pipeline showing exactly what is happening in your business." },
                        { icon: Users, title: "Trust", text: "Become the vendor that property managers and premium clients keep reusing." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            viewport={{ once: true }}
                            className="bg-surface/50 backdrop-blur-sm border border-white/5 p-6 rounded-lg text-center hover:bg-surface/80 transition-all"
                        >
                            <item.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                            <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                            <p className="text-gray-400 text-sm">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-bold rounded-full text-lg transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    >
                        Install The System
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Value;
