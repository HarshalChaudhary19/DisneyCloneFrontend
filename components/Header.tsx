import Image from "next/image"
import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"
import SearchInput from "./SearchInput"
import GenreDropdown from "./GenreDropdown"
import Login from "./Login"
/*flex means put horizontally and space between is 2*/
//flex-box space justify between to get the components apart
function Header() {
  return (
    <header className="fixed w-full z-10 top-0 flex items-center justify-between p-3 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href='/' className="mr-10">
        <Image
            src="https://links.papareact.com/a943ae"
            alt="Disney Logo"
            width={120}
            height={100} 
            className="cursor-pointer invert-0 dark:invert"//have to put the link in whitelist as comuting power differs
        />  
      </Link>
      
      <div className="flex space-x-4">
        <Login/>
        <GenreDropdown/>
        <SearchInput/>
        <ThemeToggler/>
      </div>
    </header>
  )
}

export default Header
