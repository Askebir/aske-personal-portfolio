import { useMemo } from "react";

export const Hero = () => {
  const particles = useMemo(
    () =>
      [...Array(30)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      })),
    [],
  );

  return (
    <section className="relative min-h-screen flex  items-center overflow-hidden ">
      {/* bg */}
      <div className="absolute  inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background  "></div>
      </div>
      {/* Green Dots */}
      <div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full opacity-60"
              style={{
                backgroundColor: "#20b2A6",
                left: particle.left,
                top: particle.top,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
