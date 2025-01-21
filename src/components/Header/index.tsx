import Image from 'next/image';

const Header = () => {
    return (
        <header className="shadow p-4 flex justify-between items-center bg-red-300">
                <div className="flex items-center">
                    <div>
                        <Image src="/assets/arymugs_logo.svg" alt="logo" width={60} height={60} />
                    </div>
                    <div className="ml-4">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="px-4 py-2 border rounded"
                        />
                    </div>
                    <nav className="">
                        <a href="#" className="px-4 py-2 text-gray-700">Produtos</a>
                        <a href="#" className="px-4 py-2 text-gray-700">Favoritos</a>
                        <a href="#" className="px-4 py-2 text-gray-700">Carrinho</a>
                    </nav>
                </div>
                <div className="flex items-center">
                    <button
                        className="bg-transparent hover:bg-pink-600 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                        Entrar
                    </button>
                    <button
                        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 border border-white rounded">
                        Criar conta
                    </button>
                </div>
        </header>
    );
};

export default Header;