function loadTheFrame() {
    document.getElementById('upper-left').src = window.localStorage.getItem('upper-left');
    document.getElementById('upper-right').src = window.localStorage.getItem('upper-right');
    document.getElementById('lower-left').src = window.localStorage.getItem('lower-left');
    document.getElementById('lower-right').src = window.localStorage.getItem('lower-right');
}