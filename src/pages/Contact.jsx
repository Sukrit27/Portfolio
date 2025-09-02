import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4">
            {/* Background same as home */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(147,51,234,0.15),transparent_50%)]"></div>

            <section className="relative z-10 w-full max-w-3xl mx-auto text-center py-16">
                {/* Title */}
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4">
                    Contact Me
                </h2>
                <p className="text-gray-400 mb-8">Don’t hesitate to reach out 🚀</p>

                {/* Description */}
                <p className="text-gray-300 max-w-xl mx-auto mb-12 leading-relaxed">
                    Let’s connect! You can reach me directly through the details below.
                </p>

                {/* Contact Info */}
                <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div className="flex items-center gap-4 bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-lg shadow-cyan-500/10 p-6">
                        <Phone className="w-6 h-6 text-cyan-400" />
                        <div>
                            <h3 className="text-lg font-semibold text-cyan-400">Phone</h3>
                            <p className="text-gray-300">+91 9051640303</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-lg shadow-blue-500/10 p-6">
                        <Mail className="w-6 h-6 text-blue-400" />
                        <div>
                            <h3 className="text-lg font-semibold text-blue-400">Email</h3>
                            <p className="text-gray-300">sukritghosh03@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-lg shadow-gray-500/10 p-6">
                        <Github className="w-6 h-6 text-gray-300" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-300">GitHub</h3>
                            <a
                                href="https://github.com/Sukrit27"
                                target="_blank"
                                className="text-gray-400 hover:text-white transition"
                            >
                                Sukrit27
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-lg shadow-blue-500/10 p-6">
                        <Linkedin className="w-6 h-6 text-blue-400" />
                        <div>
                            <h3 className="text-lg font-semibold text-blue-400">LinkedIn</h3>
                            <a
                                href="https://www.linkedin.com/in/sukrit-ghosh-bab1a1259/"
                                target="_blank"
                                className="text-gray-400 hover:text-white transition"
                            >
                                sukrit-ghosh
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-lg shadow-pink-500/10 p-6 md:col-span-2">
                        <Instagram className="w-6 h-6 text-pink-400" />
                        <div>
                            <h3 className="text-lg font-semibold text-pink-400">Instagram</h3>
                            <a
                                href="https://www.instagram.com/_sukrit_1?igsh=ZnE2YmpnbDlweWJw&utm_source=qr"
                                target="_blank"
                                className="text-gray-400 hover:text-white transition"
                            >
                                _sukrit_1
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
