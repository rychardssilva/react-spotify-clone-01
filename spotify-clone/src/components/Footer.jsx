import { Play, Shuffle, SkipBack, SkipForward, Repeat, MicVocal, Computer, LayoutList, Volume2, Maximize2 } from 'lucide-react';

 
 function Footer (){
    return(
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center ">
        <div className='flex items-center gap-2 flex-1'>
          <img src="album.jpg" width={56} height={56} alt="Capa do album ASTROWORLD do Travis Scott" />
          <div className='flex flex-col'>
            <strong className='font-normal'>Can't Say</strong>
            <span className='text-xs text-zinc-400'>Travis Scott and Don Toliver</span>
          </div>
        </div>
        <div className='flex flex-col items-center flex-4'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200'/>
            <SkipBack  size={20} className='text-zinc-200'/>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black '>
              <Play/>
            </button>
            <SkipForward size={20} className='text-zinc-200'/>
            <Repeat size={20} className='text-zinc-200'/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-500'>0.31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600' >
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>2.14</span>
          </div>
        </div>
        
        <div className='flex items-center gap-4'>
          <MicVocal size = {20}/>
          <LayoutList size = {20}/>
          <Computer size = {20}/>
          <div className='flex items-center gap-2'>
            <Volume2 size = {20}/>
          </div>
          <div className='h-1 rounded-full w-24 bg-zinc-600' >
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
          </div>
          <Maximize2 size = {20}/>
        </div>

      </footer>
    );
}

export default Footer;