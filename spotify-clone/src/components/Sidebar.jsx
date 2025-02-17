

import { Library, Search } from 'lucide-react';
import Playlists from './Playlists';

function Sidebar() {
    return (
        <aside className="w-100 bg-zinc-950 p-6 rounded-2xl ml-2 h-[100vh] overflow-y-auto  ">
            <nav className="space-y-5">
                <a href="" className="flex gap-3 text-xs font-semibold text-zinc-200">
                    <Library />
                    Your Library
                </a>
                <a href="" className="flex gap-3 text-xs font-semibold text-zinc-200">
                    <Search />
                    Search
                </a>
            </nav>
            <nav className="mt-10 pt-6 border-t border-zinc-800 text-white flex flex-col gap-3  text-xl ">
                    <Playlists/>
            </nav>
        </aside>
    );
}



export default Sidebar;