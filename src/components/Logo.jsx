import logo from  "../assets/clock.jpg"

export default function Logo() {
  return (
    <div className="flex justify-center items-center gap-6">
      {/* Logo Image */}
      <img 
        src={logo} 
        alt="Galactic Counter Logo" 
        className="h-14 w-auto md:h-16 lg:h-20" // Scales on mobile & desktop
      />
      {/* Title */}
      <h1 className="text-[1.2rem] md:text-4xl text-[ --color-space-silver] text-center mx-10">
        Analyze your text in real-time.
      </h1>
    </div>
    
  );
}
