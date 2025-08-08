import { Link } from 'react-router-dom';
// import { Facebook, Instagram, Tiktok } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1b1a19] text-[#f8f1f0] px-6 md:px-20 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                {/* Company Info */}
                <div className="max-w-sm">
                    <h2 className="text-2xl font-bold mb-3">Temmack</h2>
                    <p className="text-sm text-muted-foreground">
                        Simplicity that leaves a mark. We help brands unlock
                        clarity, scale up through strategy, and win digitally.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="text-sm space-y-1">
                        <li>
                            <Link to="/about" className="hover:underline">
                                Who We Are
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:underline">
                                What We Do
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="hover:underline">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/faq" className="hover:underline">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Legal */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Legal</h3>
                    <ul className="text-sm space-y-1">
                        <li>
                            <Link
                                to="/privacy-policy"
                                className="hover:underline"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/terms-and-conditions"
                                className="hover:underline"
                            >
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    {/* <div className="flex gap-4">
                        <a
                            href="https://www.facebook.com/share/1FLg8nQce9/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-5 h-5 hover:text-[#cb1010]" />
                        </a>
                        <a
                            href="https://www.instagram.com/temmack_solutions?igsh=a3IyMmJjaTA1eHI0"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5 hover:text-[#cb1010]" />
                        </a>
                        <a
                            href="https://tiktok.com/@theaicopyguy"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                        >
                            <Tiktok className="w-5 h-5 hover:text-[#cb1010]" />
                        </a>
                    </div> */}
                </div>
            </div>

            <div className="mt-12 text-center text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Temmack. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
