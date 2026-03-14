import { useRef, useState } from 'react';
import 'animate.css';


type SubmenuItem = {
    title: string;
    path: string;
};

type MenuItem = {
    title: string;
    path?: string;
    submenu?: SubmenuItem[];
};

const menu: MenuItem[] = [
    { path: "/", title: "Accueil" },
    {
        title: "Services",
        submenu: [
            { title: "Web banking", path: "/web-banking" },
            { title: "Mobile banking", path: "/mobile-banking" },
            { title: "Paiements & Transferts", path: "/transferts" },
            { title: "Reclamations", path: "/reclamations" },
        ],
    },
    {
        title: "Produits",
        submenu: [
            { title: "Particuliers", path: "/produits/particuliers" },
            { title: "Entreprises", path: "/produits/entreprises" },
            { title: "Cartes Bancaires", path: "/produits/cartes" },
            { title: "Packages", path: "/packages" },
        ],
    },
    {
        title: "Nous connaitre",
        submenu: [
            { title: "A propos de nous", path: "/about" },
            { title: "Missions et Valeurs", path: "/mission" },
            { title: "Gouvernance", path: "/governance" },
            { title: "Carrières", path: "/carriers" },
            { title: "Actualités", path: "/actualite" },
        ],
    },
    { title: "Agences & GAB's", path: "/agences" },
    { title: "Contactez-nous", path: "/contact" },
    { title: "FAQ", path: "/faq" },
];


export default function Home() {

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);



    return (
        <div className="fixed h-screen flex w-full">

            <nav
                ref={navRef}
                className="fixed w-full flex justify-between items-center shadow-sm shadow-black/30 h-16 px-6 bg-white z-50"
            >
                <img src="/logo.png" className="w-32" alt="" />

                {/* Menu burger */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {!mobileOpen ? "☰" : "X"}
                </button>

                {/* Menu sur écran large */}
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {menu.map((item, index) => (
                        <li key={index} className="relative">
                            <button
                                onClick={() => item.submenu ? setOpenIndex(openIndex === index ? null : index) : null}
                                className="hover:text-[#2a893d] transition-colors duration-300"
                            >
                                {item.title}
                            </button>

                            {item.submenu && openIndex === index && (
                                <ul className="absolute top-12 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-sm shadow-black/30 p-4 min-w-55 gap-3 flex flex-col animate__animated animate__fadeIn">
                                    {item.submenu.map((sub, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className="text-gray-500 hover:text-[#2a893d] cursor-pointer transition-colors duration-200"
                                        >
                                            {sub.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => {
                        setMobileOpen(false);
                        setOpenIndex(null);
                    }}
                >
                    <div
                        className="absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-lg animate__animated animate__fadeInRight"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="flex flex-col gap-6">
                            {menu.map((item, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() =>
                                            item.submenu
                                                ? setOpenIndex(openIndex === index ? null : index)
                                                : null
                                        }
                                        className="w-full text-left hover:text-[#2a893d]"
                                    >
                                        {item.title}
                                    </button>

                                    {item.submenu && openIndex === index && (
                                        <ul className="mt-3 flex flex-col gap-2 pl-4 bg-white shadow-sm shadow-black/30 p-2 rounded-md">
                                            {item.submenu.map((sub, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    className="text-gray-500 hover:text-[#2a893d]"
                                                >
                                                    {sub.title}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Contenu de la page */}
            <div className="flex flex-col w-full justify-center items-center h-full pt-16 px-6">
                <img src="/svg.png" className="w-50 md:w-100 animate-pulse" alt="" />
                <span className="text-center font-bold text-2xl text-[#2a893d] animate__animated animate__fadeInUp">
                    La page demandée est momentanément indisponible.
                </span>

                <span className='text-sm font-medium text-gray-500 text-center'>
                    Nos équipes sont mobilisées pour résoudre la situation dans les plus brefs délais.
                </span>
            </div>
        </div>
    )
}