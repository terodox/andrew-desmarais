const BOXES = [
    'upper-right',
    'upper-left',
    'lower-right',
    'lower-left'
];

function loadTheFrame() {
    const searchParams = new URLSearchParams(location.search);

    BOXES.forEach(box => {
        if (searchParams.has(box)) {
            window.localStorage.setItem(box, searchParams.get(box))
        }
        document.getElementById(box).src = window.localStorage.getItem(box);
    });
}