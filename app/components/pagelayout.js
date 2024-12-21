import Character from './character';
import bgImage from '../assets/aiforest.jpeg'
import githubImage from '../assets/github.png'
import devpostImage from '../assets/devpost.png'
import ctfImage from '../assets/ctftime.png'

export default function PageLayout( { title, children } ){
    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="h-screen flex flex-row"> 
                {/* Profile Sidebar */}
                <div className="flex flex-col w-1/5 mx-[1%]">
                    <div className="flex-none rounded-lg my-[6%] h-[20%] w-[50%] mx-auto">
                        <Character></Character>
                    </div> 
                    <div className="opacity-80 flex-none text-center text-white font-sourgummy bg-black border-2 border-white rounded-lg w-full h-[65%] mb-[5%]">
                        <h1 className="text-3xl">Directory</h1>
                        <ul className="text-2xl ">
                            <li><button className="hover:text-green-400">~</button></li>
                            <li><button className="hover:text-green-400">/About</button></li>
                            <li><button className="hover:text-green-400">/Projects</button></li>
                            <li><button className="hover:text-green-400">/Blog</button></li>
                            <li><button className="hover:text-green-400">/CTFs</button></li>
                            <li><button className="hover:text-green-400">/AOC</button></li>
                            <li><button className="hover:text-green-400">/3D-Models</button></li>
                        </ul>
                    </div> 
                    <div className="flex-grow font-sourgummy w-full mb-[6%]">
                        <div className="w-full flex flex-row justify-center">
                            <button><img src={githubImage} className="bg-black rounded-lg border-2 border-white mx-2 drop-shadow-white" alt="GitHub" /></button> 
                            <button><img src={devpostImage} className="bg-black rounded-lg border-2 border-white mx-2 drop-shadow-white" alt="Devpost" /></button> 
                            <button><img src={ctfImage} className="bg-black rounded-lg border-2 border-white mx-2 drop-shadow-white" alt="CTFTime" /></button> 
                        </div>
                    </div> 
                </div>
                <div className="flex flex-col w-3/5">
                    <div className="opacity-90 rounded-lg font-acme font-light text-4xl text-neutral-900 text-center flex-none h-[6%] w-[50%] mx-auto bg-white my-[2%]">
                        |Yoshixis Web|
                    </div>
                    <div className='border-2 border-black rounded-lg font-sourgummy flex-grow p-5 bg-[#E4EFD8] mb-[2%]'>
                        <h1 className="text-center text-3xl">{title}</h1>
                        {children}
                    </div>
                </div>
                <div className="flex flex-col w-1/5 mx-[1%] justify-center items-center">
                    <div className="flex-none bg-white rounded-lg my-[7%] h-[5%] w-[50%] mx-auto">
                        Obsidian Notes
                    </div> 
                    <div className="flex-none bg-white rounded-lg w-full h-[15%]">
                        Themes
                    </div> 
                    <div className="flex-none bg-white rounded-lg w-full h-[40%] my-[6%]">
                        Games
                    </div> 
                    <div className="flex-grow bg-white rounded-lg w-full mb-[6%]">
                        88x31
                    </div> 
                </div>
            </div>

        </div>
    )
}