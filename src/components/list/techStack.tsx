import React, { useEffect, useState } from "react";

export const TechStack = ({ techStack }: { techStack: string[] }) => {
  const [animatedTechStack, setAnimatedTechStack] = useState<string[]>([]);

  useEffect(() => {
    const animationTimeouts: NodeJS.Timeout[] = [];
    techStack.forEach((tech, index) => {
      const timeout = setTimeout(() => {
        setAnimatedTechStack((prevTechStack) => [...prevTechStack, tech]);
      }, index * 200);
      animationTimeouts.push(timeout);
    });

    return () => {
      animationTimeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div>
      <ul className="flex items-center gap-2 flex-wrap">
        {animatedTechStack.map((tech, index) => (
          <div key={index} className="text-base">
            <div className="mt-3 shadow-sm px-6 py-1 border border-gray-200 w-10 rounded-lg flex items-center justify-center animate__animated animate__bounceInDown">
              <i className={`${tech} text-3xl`}></i>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
