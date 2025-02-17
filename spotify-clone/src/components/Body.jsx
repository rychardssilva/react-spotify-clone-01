import { ChevronLeft, ChevronRight, Play } from 'lucide-react';


function Body() {
    return (
        <main className="flex-1 p-6 bg-amber-300 rounded-2xl ml-3">
            <div className="flex items-center gap-4">
                <button className="rounded-full bg-black/40 p-1">
                    <ChevronLeft />
                </button>
                <button className="rounded-full bg-black/40 p-1">
                    <ChevronRight />
                </button>
            </div>
            <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
            <div className="grid grid-cols-3 gap-6 mt-4"></div>
        </main>
    );
}

export default Body;