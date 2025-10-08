import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-6">
        {/* LATIHAN 1 - NAVBAR */}
        <div>LATIHAN 1</div>
        <nav className="flex justify-between p-4 bg-gray-100">
          {/* Kiri - Logo */}
          <div className="font-bold text-lg mb-2">MyLogo</div>

          {/* Kanan - Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <hr />

        {/* LATIHAN 2 - GRID GALERI */}
        <div>LATIHAN 2</div>
        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
        </div>
        <hr />

        {/* LATIHAN 3 - PRICING TABLE */}
        <div>LATIHAN 3</div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-200 p-6 rounded">
            Basic
            <br />
            Rp 50.000
          </div>
          <div className="bg-blue-200 p-6 rounded">
            Pro
            <br />
            Rp 100.000
          </div>
          <div className="bg-gray-200 p-6 rounded">
            Premium
            <br />
            Rp 200.000
          </div>
        </div>
        <hr />

        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        <div>LATIHAN 4</div>
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 gap-4">
          <header className="bg-gray-300 p-4 md:col-span-3">Header</header>
          <aside className="bg-gray-200 p-4">Sidebar</aside>
          <main className="bg-white p-4 border md:col-span-2">Content</main>
          <footer className="bg-gray-300 p-4 md:col-span-3">Footer</footer>  
        </div>

        <hr />

        {/* LATIHAN 5 - CARD PRODUCT */}
        <div>LATIHAN 5</div>
        <div className="p-4 flex flex-col sm:flex-row items-center border col-span-1">
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="h-20 w-20 sm:w-32 sm:h-32 mr-4"
          />
          <div>
            <h3 className="font-bold">Nama Produk</h3>
            <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
