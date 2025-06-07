export default function CryptosquarePage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">CryptoSquare</h1>
                <p className="text-xl text-gray-600 mb-6">
                    Application de trading de cryptomonnaies avec interface moderne et suivi en temps réel
                </p>
                
                <div className="flex gap-4 mb-8">
                    <a 
                        href="https://github.com/noupiiii/CryptoSquare" 
                        target="_blank"
                        className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Voir le code
                    </a>
                    <button className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        Demo Live
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Fonctionnalités</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            Suivi des prix en temps réel
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            Interface de trading intuitive
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            Graphiques interactifs
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            Gestion de portefeuille
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            Alertes personnalisées
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">API REST</span>
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">WebSocket</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Chart.js</span>
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Aperçu du projet</h2>
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 inline-block">
                        <div className="w-64 h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold">
                            Screenshot à venir
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">À propos du projet</h2>
                <div className="prose max-w-none">
                    <p className="text-gray-700 mb-4">
                        CryptoSquare est une application web moderne dédiée au trading de cryptomonnaies. 
                        Elle offre une interface utilisateur intuitive pour suivre les prix des crypto-actifs 
                        en temps réel et effectuer des transactions virtuelles.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Le projet met l'accent sur l'expérience utilisateur avec des graphiques interactifs, 
                        des données en temps réel via WebSocket, et une architecture scalable permettant 
                        d'intégrer facilement de nouvelles fonctionnalités.
                    </p>
                </div>
            </div>

            <div className="border-t pt-8">
                <h2 className="text-2xl font-semibold mb-4">Défis techniques relevés</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold mb-2">Temps réel</h3>
                        <p className="text-gray-700 text-sm">
                            Implémentation de WebSocket pour la mise à jour des prix en temps réel 
                            sans impact sur les performances.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold mb-2">Visualisation de données</h3>
                        <p className="text-gray-700 text-sm">
                            Création de graphiques interactifs et responsifs pour l'analyse 
                            technique des cryptomonnaies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}