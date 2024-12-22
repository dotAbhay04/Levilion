import React, { useRef } from 'react'
import Animated from './Animated'
import gsap from 'gsap';
import Buttons from './Buttons';


const Story = () => {

    const frameRef = useRef(null);

    const handleMouseLeave = () => {
        const element = frameRef.current;
        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: 'power1.inOut'
        })
    }
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const X = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((X - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut'
        })
    }

    return (
        <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
            <div className='flex size-full flex-col items-center py-10 pb-24'>
                <p className='font-general text-sm uppercase md:text-[15px]'>The Multiversal universe</p>
                <div className='relative size-full'>
                    <Animated
                        title="The t<b>a<b/>le of <br/> <b>a<b/> hidd<b>e<b/>n wo<b>r<b/>ld"
                        sectionId="#story"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />
                    <div className='story-img-container'>
                        <div className='story-img-mask'>
                            <div className='story-img-content'>
                                <img
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    src="/img/entrance.webp" alt="Entrance"
                                    className='object-contain' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center md:justify-end md:px-8 -mt-32 md:-mt-24">
                    <div className="flex flex-col items-center md:items-start max-w-lg">
                        <p className="mt-3 text-center text-violet-50 md:text-left uppercase">
                            Where realities converge, lies Levilion and the boundless pillar. Discover its secrets and shape your fate.
                        </p>
                        <Buttons
                            id="relm-button"
                            title="Discover your fate"
                            containerClass="mt-5"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Story
