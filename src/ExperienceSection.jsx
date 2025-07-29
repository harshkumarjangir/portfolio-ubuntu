import { motion } from 'framer-motion';

import { CheckCircle } from "lucide-react";

const ExperienceSection = ({ isDark }) => {
    return (
        <section id="experience" className="py-20 px-4">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Professional Experience
                </h2>

                <div className={`p-8 rounded-3xl ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                            <h3 className="text-2xl font-bold mb-2">Grras Solutions</h3>
                            <p className={`text-lg mb-4 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>MERN Stack Trainee</p>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>2023 - 2024</p>
                        </div>

                        <div className="md:w-2/3">
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Developed and deployed full-stack web applications using MERN stack, ensuring seamless integration between components
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Built RESTful APIs using Express.js and MongoDB, reducing data retrieval times by 30%
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Implemented JWT-based authentication and role-based access control
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Deployed applications to Vercel and Netlify, handling both client and server deployment
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
export default ExperienceSection