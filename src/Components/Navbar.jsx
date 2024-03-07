import A from '../assets/Images/userAsset/A.png'

export default function Navbar(){
    return(
        <header className='flex w-full p-3 md:p-8 align-middle justify-between'>
            <div className="logo flex flex-row items-baseline md:gap-2 ml-0 gap-1">
                <img src={A} className='md:w-10 w-8' alt="#" />
                <h2 className="logoText md:text-3xl text-2xl m-[-8px]">Shish Jha</h2>
            </div>

            <nav className="flex">
                <ul className='flex flex-row md:gap-4 gap-3 text-xl'>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contactMe">Contact Me</a></li>
                </ul>
                
            </nav>
        </header>


    )
    
}