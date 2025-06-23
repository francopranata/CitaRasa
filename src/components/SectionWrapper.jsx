import React, { useEffect, useRef } from 'react';

const SectionWrapper = ({ id, children, className }) => {
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        if (element) {
            observer.observe(element);
        }
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (<section ref={ref} id={id} className={`py-24 sm:py-28 ${className} fade-in-section`}>{children}</section>);
}

export default SectionWrapper;