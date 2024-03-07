import A from '../assets/Images/userAsset/A.png'

export default function Navbar(){
    return(
        <header className='flex w-full p-4 md:p-8 align-middle justify-between'>
            <div className="logo flex flex-row items-baseline gap-2">
                <img src={A} className='w-10 ' alt="#" />
                <h2 className="logoText text-3xl m-[-8px]">Shish Jha</h2>
            </div>

            <nav className="flex">
                <ul className='flex flex-row gap-4'>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contactMe">Contact Me</a></li>
                </ul>
                
            </nav>
        </header>


    )
    
}