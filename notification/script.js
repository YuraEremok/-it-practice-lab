let notificationData = [
    "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
    "Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
    "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.",
    "React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props."
]

let showNotification = () => {
    let parentElem = document.querySelector('#notification');

    let wrapperTop = document.createElement('div');
    wrapperTop.classList.add('notification__row_top');

    let notifiList = document.createElement('ul');
    notifiList.classList.add('slides', 'js--slider');

    parentElem.appendChild(wrapperTop);
    wrapperTop.appendChild(notifiList);

    notificationData.forEach(renderItemNotifi);

    function renderItemNotifi(element, index, arr) {
        let li = document.createElement('li');
        li.classList.add('slide');

        notifiList.appendChild(li);

        let notifiText = document.createElement('span');
        notifiText.classList.add('slide__content');

        li.appendChild(notifiText);

        notifiText.innerText = element;
    }

    let closeNotifi = document.createElement('div');
    closeNotifi.classList.add('exit-button');
    closeNotifi.setAttribute('tabindex', '6');
    wrapperTop.appendChild(closeNotifi);

    let closeNitifiIcon = document.createElement('span');
    closeNitifiIcon.classList.add('fa', 'fa-times', 'close-notif__icon');
    closeNitifiIcon.setAttribute('aria-hidden', 'true');
    closeNotifi.appendChild(closeNitifiIcon);

    let wrapperDown = document.createElement('div');
    wrapperDown.classList.add('notification__row_down');
    parentElem.appendChild(wrapperDown);

    let checkBox = document.createElement('input');
    checkBox.classList.add('notification-checkbox');
    checkBox.setAttribute('type', 'checkbox');
    wrapperDown.appendChild(checkBox);

    let checkBoxLable = document.createElement('span');
    checkBoxLable.classList.add('checkbox-caption');
    checkBoxLable.innerText = 'Disable Tips';
    wrapperDown.appendChild(checkBoxLable);

    let sliderNav = document.createElement('div');
    sliderNav.classList.add('slider-nav');
    wrapperDown.appendChild(sliderNav);

    let btnPrev = document.createElement('button');
    btnPrev.classList.add('btn-notif', 'slide__prev', 'js-slide__prev');
    sliderNav.appendChild(btnPrev);

    let btnPrevIcon = document.createElement('span');
    btnPrevIcon.classList.add('fas', 'fa-hand-point-left');
    btnPrev.appendChild(btnPrevIcon);

    for (let i = 0; i < notificationData.length; i++) {
        let slideDot = document.createElement('span');
        slideDot.classList.add('slide__dot');
        sliderNav.appendChild(slideDot);
    }

    let btnNext = document.createElement('button');
    btnNext.classList.add('btn-notif', 'slide__next', 'js-slide__next');
    sliderNav.appendChild(btnNext);

    let btnNextIcon = document.createElement('span');
    btnNextIcon.classList.add('fas', 'fa-hand-point-right');
    btnNext.appendChild(btnNextIcon);
}

showNotification();

window.onload = () => {
    let closeNotificationButton = document.querySelector('.exit-button');
    let notification = document.querySelector('.notification');
    let allSlides = document.querySelectorAll('.slide');
    let checkbox = document.querySelector('.notification-checkbox');
    let sliderControls = document.querySelectorAll('.slide__dot');
    let prevSliderButton = document.querySelector('.js-slide__prev');
    let nextSliderButton = document.querySelector('.js-slide__next');
    let sliderStart = 0;

    let checked = JSON.parse(localStorage.getItem('.notification-checkbox'));
    document.querySelector('.notification-checkbox').checked = checked;

    if (allSlides) {
        allSlides[0].classList.add('slide_active');
    }

    if (checkbox.checked === true) {
        dontOpen();
    } else {
        setTimeout(openNotification, 1000);
    }

    if (prevSliderButton && nextSliderButton && closeNotificationButton) {
        prevSliderButton.addEventListener('click', shiftSlide.bind(prevSliderButton, 'prev'));
        nextSliderButton.addEventListener('click', shiftSlide.bind(nextSliderButton, 'next'));

        closeNotificationButton.addEventListener('click', function (evt) {
            evt.preventDefault();
            notification.classList.remove('show-notif');
            save();
        });
    }

    function openNotification() {
        notification.classList.add('show-notif');
    }

    function dontOpen() {
        notification.classList.remove('show-notif');
    }

    function shiftSlide(direction) {
        event.preventDefault();

        let currentSlideId = sliderStart;
        let lastSlideIndex = sliderControls.length - 1;
        let slideId;

        if (direction === 'prev') {
            if (currentSlideId > 0) {
                slideId = currentSlideId - 1;
            } else {
                slideId = lastSlideIndex;
            }
        }

        if (direction === 'next') {
            if (currentSlideId !== lastSlideIndex) {
                slideId = currentSlideId + 1;
            } else {
                slideId = 0;
            }
        }
        changeSlide(slideId);
    }

    for (let i = 0; i < sliderControls.length; i++) {
        sliderControls[i].addEventListener('click', changeSlide.bind(sliderControls[i], i));
    }

    function changeSlide(id) {
        event.preventDefault();

        for (let i = 0; i < allSlides.length; i++) {
            allSlides[i].classList.remove('slide_active');
            sliderControls[i].classList.remove('slide__dot_active');
        }

        allSlides[id].classList.add('slide_active');
        sliderControls[id].classList.add('slide__dot_active');

        sliderStart = id;
    }

    function save() {
        localStorage.setItem('.notification-checkbox', checkbox.checked);
    }
};

