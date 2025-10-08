'use client'
import React, { forwardRef, useImperativeHandle } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Slider = forwardRef(function Slider({ children }, ref) {
    const [sliderRef, instanceRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 6, spacing: 5 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 6, spacing: 10 },
            },
        },
        loop: false,
        slides: {
            perView: 4,
            spacing: 15,
        },
    })
    useImperativeHandle(ref, () => ({
        next: () => instanceRef.current?.next(),
        prev: () => instanceRef.current?.prev(),
    }))
    return (
        <div ref={sliderRef} className="keen-slider">
            {children}
        </div>
    )
})
export default Slider
