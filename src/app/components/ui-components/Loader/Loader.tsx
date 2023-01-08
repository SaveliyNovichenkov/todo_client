import React, { useRef } from 'react';
import styles from './Loader.module.scss'
import cn from "classnames"

export const Loader = () => {
    let currentAnimationTime = 0;
    const circleLeft = useRef<HTMLDivElement>(null);
    const circleCenter = useRef<HTMLDivElement>(null);
    const circleRight = useRef<HTMLDivElement>(null);

    function runAnimate() {

        let circles = [circleRight.current, circleCenter.current, circleLeft.current]

        const amplitude = 50; // равна базовой высоте circle
        currentAnimationTime += 0.05;

        circles.forEach((circle, index) => {
            if(circle == null) {
                return
            }
            circle.style.transform = `
            translateY(${Math.cos(currentAnimationTime - index) * amplitude}px)`

            circle.style.boxShadow = `
            ${Math.sin(currentAnimationTime - index) * amplitude / 2}px
            ${Math.sin(currentAnimationTime - index) * amplitude / 2}px
            ${Math.sin(currentAnimationTime - index) * amplitude / 2}px
            black`
        })

        requestAnimationFrame(runAnimate);
    }

    runAnimate();

    return (
        <div className={styles.body}>
        <hr className={styles.hr} />
            <hr className={cn(styles.hr, cn(styles.hr2))}/>
                <div className={styles.container} >
                    <div ref={circleLeft} className={styles.circle}></div>
                    <div ref={circleCenter} className={styles.circle}></div>
                    <div ref={circleRight} className={styles.circle}></div>
                </div>
        </div>
    );
};

