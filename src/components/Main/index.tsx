

const Main = () => {
    return (
        <div
            className="h-screen w-screen flex justify-center items-center relative"
            style={{
                backgroundImage: 'url("images/bg.jpg")',
            }}
        >
            <div class="start inset-y-0 left-0 text-2xl font-mono">
                <h1>
                    FAÇA JÁ SUA ENCOMENDA<br />E TENHA SUA CANECA<br />PERSONALIZADA
                </h1>
                <p>
                    CANECAS PINTADAS A MÃO !
                </p>
            </div>

            <div>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span
                            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                            VENHA CONFERIR
                    </span>
                </button>

            </div>

        </div>
    );
};

export default Main;

