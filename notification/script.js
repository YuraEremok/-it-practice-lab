let showNotification = () => {


    let childElement = document.querySelector('.notification');

    let wrapperTop = document.createElement('div');
    wrapperTop.classList.add('notification-main');

    let notificationList = document.createElement('ul');
    notificationList.classList.add('slides-content', 'js--slider');

    childElement.appendChild(wrapperTop);
    wrapperTop.appendChild(notificationList);

    notificationData.forEach(renderItemNotifi);

    function renderItemNotifi(element, index, arr) {
        let li = document.createElement('li');
        li.classList.add('slide');

        notificationList.appendChild(li);

        let notifiText = document.createElement('span');
        notifiText.classList.add('slide-info');

        li.appendChild(notifiText);

        notifiText.innerText = element;
    }

    let exitNotification = document.createElement('div');
    exitNotification.classList.add('exit-button');
    exitNotification.setAttribute('tabindex', '6');
    wrapperTop.appendChild(exitNotification);

    let closeButton = document.createElement('span');
    closeButton.classList.add('fa', 'fa-times', 'close-notif__icon');
    closeButton.setAttribute('aria-hidden', 'true');
    exitNotification.appendChild(closeButton);

    let buttonContent = document.createElement('div');
    buttonContent.classList.add('button-content');
    childElement.appendChild(buttonContent);

    let checkBox = document.createElement('input');
    checkBox.classList.add('notification-checkbox');
    checkBox.setAttribute('type', 'checkbox');
    buttonContent.appendChild(checkBox);

    let checkBoxLable = document.createElement('span');
    checkBoxLable.classList.add('checkbox-caption');
    checkBoxLable.innerText = 'Disable Tips';
    buttonContent.appendChild(checkBoxLable);

    let sliderNav = document.createElement('div');
    sliderNav.classList.add('slider-nav');
    buttonContent.appendChild(sliderNav);

    let btnPrev = document.createElement('button');
    btnPrev.classList.add('btn-notification', 'slide__prev', 'js-slide__prev');
    sliderNav.appendChild(btnPrev);

    let btnPrevIcon = document.createElement('span');
    btnPrevIcon.classList.add('fas', 'fa-hand-point-left');
    btnPrev.appendChild(btnPrevIcon);

    for (let i = 0; i < notificationData.length; i++) {
        let slideDot = document.createElement('span');
        slideDot.classList.add('dot');
        sliderNav.appendChild(slideDot);
    }

    let btnNext = document.createElement('button');
    btnNext.classList.add('btn-notification', 'slide__next', 'js-slide__next');
    sliderNav.appendChild(btnNext);

    let btnNextIcon = document.createElement('span');
    btnNextIcon.classList.add('fas', 'fa-hand-point-right');
    btnNext.appendChild(btnNextIcon);
}


let notificationData = [
    "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
    "Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
    "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.",
    "React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props."
]


showNotification();

window.onload = () => {
    let closeNotificationButton = document.querySelector('.exit-button');
    let notification = document.querySelector('.notification');
    let allSlides = document.querySelectorAll('.slide');
    let checkbox = document.querySelector('.notification-checkbox');
    let sliderControls = document.querySelectorAll('.dot');
    let prevSliderButton = document.querySelector('.js-slide__prev');
    let nextSliderButton = document.querySelector('.js-slide__next');
    let sliderStart = 0;

    let checked = JSON.parse(localStorage.getItem('.notification-checkbox'));
    document.querySelector('.notification-checkbox').checked = checked;

    if (allSlides) {
        allSlides[0].classList.add('slide-on');
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
            allSlides[i].classList.remove('slide-on');
            sliderControls[i].classList.remove('dot-active');
        }

        allSlides[id].classList.add('slide-on');
        sliderControls[id].classList.add('dot-active');

        sliderStart = id;
    }

    function save() {
        localStorage.setItem('.notification-checkbox', checkbox.checked);
    }
};

