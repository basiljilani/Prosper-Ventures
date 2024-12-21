import React from 'react';
import { useInView } from 'react-intersection-observer';
import { MissionVisionCard } from './MissionVisionCard';

const content = {
  mission: "To empower individuals, businesses, and communities by delivering innovative technology solutions that enhance efficiency, drive growth, and enable seamless digital experiences. We are dedicated to breaking down technological barriers and building accessible, impactful tools that inspire progress and foster connectivity in an increasingly digital world.",
  vision: "Our vision is to be a global leader in technological innovation, recognized for transformative solutions that enhance industries and elevate lives. We aspire to set new standards in digital excellence, driving sustainable progress and shaping a future where technology is a powerful force for positive change and limitless potential."
};

export const MissionVision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-navy-900" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MissionVisionCard
            title="Our Mission"
            content={content.mission}
            index={0}
          />
          <MissionVisionCard
            title="Our Vision"
            content={content.vision}
            index={1}
          />
        </div>
      </div>
    </section>
  );
};