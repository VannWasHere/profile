export default function NavigationBar() {
    return (
        <div className="flex justify-center mt-5">
            <nav className="w-1/3 backdrop-blur-md bg-gray-500/30 p-2 rounded-xl">
                <ul className="text-gray-200 flex justify-around">
                    {[
                        ['About Me', '#about-me'],
                        ['Skills', '#my-skills'],
                        ['Projects', '#my-projects'],
                        ['Reach Me', '#reach-me'],
                    ].map(([title, url]) => (
                        <a key={title}
                        className="tracking-wider hover:transition-all hover:text-gray-500"
                        href={url}>{title}</a>  
                    ))
                    }
                </ul>
            </nav>
        </div>
    );
}