import { useState, useEffect, useRef } from 'react';

const useCountUp = (target, duration = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const end = target;
                    if (start === end) return;
                    let startTime = null;
                    const animation = (currentTime) => {
                        if (startTime === null) startTime = currentTime;
                        const progress = Math.min((currentTime - startTime) / duration, 1);
                        setCount(Math.floor(progress * (end - start) + start));
                        if (progress < 1) {
                            requestAnimationFrame(animation);
                        }
                    };
                    requestAnimationFrame(animation);
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.5 });

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [target, duration]);

    return [ref, count];
};

export default useCountUp;
