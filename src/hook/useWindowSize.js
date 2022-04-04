import { useLayoutEffect, useState } from "react"

export const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({ width: 0, heigth: 0 })

    const handleSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    useLayoutEffect(() => {
        handleSize()
        window.addEventListener('resize', handleSize);

        return () => window.removeEventListener('resize', handleSize)
    }, [])

    return windowSize

}