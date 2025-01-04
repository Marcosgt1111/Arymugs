const Header = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="ml-4">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="px-4 py-2 border rounded"
                        />
                    </div>
                    <nav className="ml-4">
                        <a href="#" className="px-4 py-2 text-gray-700">Live Code</a>
                        <a href="#" className="px-4 py-2 text-gray-700">Bibliotech</a>
                    </nav>
                </div>
                <div className="flex items-center">
                    <a href="#" className="px-4 py-2 text-gray-700">Home</a>
                </div>
            </div>
        </header>
    );
};

export default Header;