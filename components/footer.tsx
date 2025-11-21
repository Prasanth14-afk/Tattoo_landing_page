export default function Footer() {
    return (
        <footer className="bg-neutral-950 pt-16 md:pt-24 pb-8 md:pb-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 mb-12 md:mb-20">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-3xl md:text-4xl font-display uppercase font-bold mb-3 md:mb-4 tracking-tighter text-white">Ink & Iron</h2>
                        <p className="text-gray-400 text-xs md:text-sm font-light max-w-xs text-center md:text-left leading-relaxed">
                            Forging permanent art with precision and passion. Where ink meets soul.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/50 mb-4 md:mb-6">Contact</h3>
                        <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left">
                            <div className="group cursor-pointer">
                                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-1">Visit Us</p>
                                <p className="text-sm md:text-base text-white font-medium hover:text-gray-300 transition-colors">123 Arts District, Los Angeles, CA</p>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-1">Call Us</p>
                                <p className="text-sm md:text-base text-white font-medium hover:text-gray-300 transition-colors">+1 (555) 000-0000</p>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-1">Email Us</p>
                                <p className="text-sm md:text-base text-white font-medium hover:text-gray-300 transition-colors">booking@inkandiron.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Socials & Hours */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/50 mb-4 md:mb-6">Connect</h3>
                        <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left">
                            <div>
                                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-2">Socials</p>
                                <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
                                    <a href="#" className="text-white hover:text-gray-300 transition-colors uppercase text-xs md:text-sm tracking-wider">Instagram</a>
                                    <a href="#" className="text-white hover:text-gray-300 transition-colors uppercase text-xs md:text-sm tracking-wider">Twitter</a>
                                    <a href="#" className="text-white hover:text-gray-300 transition-colors uppercase text-xs md:text-sm tracking-wider">Facebook</a>
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-2">Hours</p>
                                <p className="text-white/80 text-xs md:text-sm mb-1">Tue - Sat: 11am - 8pm</p>
                                <p className="text-white/80 text-xs md:text-sm">Sun - Mon: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
                    <p className="text-gray-600 text-[9px] md:text-[10px] uppercase tracking-widest">
                        © 2024 Ink & Iron. All Rights Reserved.
                    </p>
                    <a href="#" className="text-gray-600 hover:text-white text-[9px] md:text-[10px] uppercase tracking-widest transition-colors">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
}
