import Image from 'next/image';

export default function Home() {
  const rounded = "rounded-sm"; // Set the desired roundedness class to 4px

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-10 animate-fade-in">
      <nav className="w-full flex justify-between p-4 fixed top-0 bg-opacity-80 animate-fade-in">
        <div className="flex gap-4">
          <a href="#" className="text-white animate-text-fade-in">Home</a>
          <a href="#" className="text-white animate-text-fade-in">Members</a>
          <a href="#" className="text-white animate-text-fade-in">Socials</a>
        </div>
        <span className="text-white font-bold animate-text-fade-in">PSFX</span>
      </nav>

      <div className="flex flex-col md:flex-row items-center mt-20 animate-fade-in">
        <div className="relative w-64 h-64 animate-slide-in-left">
          <Image 
            src="/pasifixc.png" 
            alt="pasifixc" 
            layout="fill" 
            className={`object-cover ${rounded}`} 
          />
        </div>
        <div className="ml-8 text-center md:text-left">
          <h1 className="text-4xl font-bold animate-text-fade-in">;PASIFIXC</h1>
          <p className="text-gray-300 mt-4 text-sm animate-text-fade-in">
            人生、死ぬこと、それらが全部理解する前に私たちを通り過ぎるだろうまで、
            落ち着いてそのことを話す
          </p>
        </div>
      </div>
    </div>
  );
}
