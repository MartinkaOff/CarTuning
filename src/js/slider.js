const slider = () => {
    let slider = tns({
        "container": '.slider__wrapper',
        "controlsContainer": ".slider__controls",
        "items": 3,
        "slideBy": 1,
        "gutter": 10,
        "mouseDrag": true,
        "swipeAngle": false,
        "speed": 400,
        "nav": false,
    });
}
export default slider;