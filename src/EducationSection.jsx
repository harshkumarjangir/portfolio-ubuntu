import { BookOpen } from "lucide-react";

const EducationSection = ({ isDark }) => {
    return (
        <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Education
                </h2>

                <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="flex items-start">
                        <div className="mr-6">
                            <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center`}>
                                <BookOpen className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Bachelor of Computer Application</h3>
                            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>S. S. Jain Subodh P. G. (Autonomous) College</p>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>2021 - 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection