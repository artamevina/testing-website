export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
              Dr. Janudin Umar, SE, SH. M.Kn
            </h2>
            <p className="text-primary-light">Melayani dengan profesionalisme dan kehangatan</p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-primary-light text-center text-sm text-primary-light">
          <p>© {new Date().getFullYear()} Notaris Violet Evargarde. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}