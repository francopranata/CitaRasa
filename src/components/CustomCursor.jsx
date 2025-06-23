import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorDotRef = useRef(null);
    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX, clientY } = e;
            if (cursorDotRef.current) {
                cursorDotRef.current.style.left = `${clientX}px`;
                cursorDotRef.current.style.top = `${clientY}px`;
            }
        };
        const addHover = () => cursorDotRef.current?.classList.add('hovered');
        const removeHover = () => cursorDotRef.current?.classList.remove('hovered');

        window.addEventListener('mousemove', moveCursor);
        const hoverables = document.querySelectorAll('a, button, [role="button"], .group, input, textarea');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            hoverables.forEach(el => {
                el.removeEventListener('mouseenter', addHover);
                el.removeEventListener('mouseleave', removeHover);
            });
        };
    }, []);

    return <div id="cursor-dot" ref={cursorDotRef}></div>;
};

export default CustomCursor;