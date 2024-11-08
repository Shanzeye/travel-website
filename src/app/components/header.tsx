import Link from "next/link";

export default function Header () {
    return (

    


<header className="text-gray-900 body-font bg-blue-300">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="https://img.icons8.com/?size=50&id=Myci_fIdr5CB&format=png" alt="pic" />
      <span className="ml-3 text-2xl font-bold">TRAVEL WORLDWIDE</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-2xl font-bold justify-center">
      <Link href="/" className="mr-5 hover:text-gray-600">Home</Link>
      <Link href="/about" className="mr-5 hover:text-gray-600">About</Link>
      <Link href="/contact" className="mr-5 hover:text-gray-600">Contact</Link>
    </nav>
    
  </div>
</header>

)
}