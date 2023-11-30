export default function HomePage() {
    return (
        <div className="flex flex-col justify-between h-screen">
            <section className="py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl text-gray-800 font-bold mb-8">
                        Featured Recipes
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">
                                Spaghetti Bolognese
                            </h3>
                            <p className="text-gray-600">
                                A classic Italian dish with a rich tomato and
                                meat sauce served over pasta.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">
                                Grilled Salmon
                            </h3>
                            <p className="text-gray-600">
                                Delicious and healthy grilled salmon seasoned to
                                perfection.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">
                                Chocolate Chip Cookies
                            </h3>
                            <p className="text-gray-600">
                                Soft and chewy chocolate chip cookies that
                                everyone will love.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-800 text-white p-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2023 Recipe App. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
