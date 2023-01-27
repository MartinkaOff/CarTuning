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
        "nav": false
    });
    let sliderBlock = tns({
        "container": '.sliderBlock',
        "controlsContainer": ".slider-controls",
        "items": 1,
        "speed": 1000,
        "mouseDrag": true,
        "nav": false
    });
    let slideServices = tns({
        "container": '.services__slider',
        "controlsContainer": ".slider-controls-services",
        "items": 1,
        "speed": 1000,
        "mouseDrag": true,
        "nav": false
    });
}
export default slider;