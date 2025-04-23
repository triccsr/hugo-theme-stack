/**
 * Slide up/down
 * Code from https://dev.to/bmsvieira/vanilla-js-slidedown-up-4dkn
 * @param target 
 * @param duration 
 */
let slideUp = (target: HTMLElement, duration = 500) => {
    target.classList.add('transiting');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    ///target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = "0";
    target.style.paddingTop = "0";
    target.style.paddingBottom = "0";
    target.style.marginTop = "0";
    target.style.marginBottom = "0";
    window.setTimeout(() => {
        target.classList.remove('show')
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('transiting');
    }, duration);
}

let slideDown = (target: HTMLElement, duration = 500) => {
    target.classList.add('transiting');
    target.style.removeProperty('display');

    target.classList.add('show');

    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = "0";
    target.style.paddingTop = "0";
    target.style.paddingBottom = "0";
    target.style.marginTop = "0";
    target.style.marginBottom = "0";
    target.offsetHeight;
    ///target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('transiting');
    }, duration);
}

let slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}

let slideRight = (target: HTMLElement, duration = 500) => {
    target.classList.add('transiting');
    target.style.transitionProperty = 'width, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    ///target.style.boxSizing = 'border-box';


    target.style.width = target.offsetWidth + 'px';
    target.offsetWidth;
    target.style.width = "0";
    target.style.paddingLeft = "0";
    target.style.paddingRight = "0";
    target.style.marginLeft = "0";
    target.style.marginRight = "0";
    target.style.overflow = 'hidden';

    window.setTimeout(() => {
        // target.style.display = 'none';
        target.classList.remove('show')
        target.style.removeProperty('width');
        target.style.removeProperty('padding-left');
        target.style.removeProperty('padding-right');
        target.style.removeProperty('margin-left');
        target.style.removeProperty('margin-right');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('transiting');
    }, duration);
}

let slideLeft = (target: HTMLElement, duration = 500) => {
    target.classList.add('transiting');
    target.style.removeProperty('display');

    target.classList.add('show');

    let width = target.offsetWidth;
    target.style.overflow = 'hidden';
    target.style.width = "0";
    target.style.paddingLeft = "0";
    target.style.paddingRight = "0";
    target.style.marginLeft = "0";
    target.style.marginRight = "0";
    target.style.flexShrink = "0";
    target.offsetWidth;
    ///target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "width, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.width = width + 'px';
    target.style.removeProperty('padding-left');
    target.style.removeProperty('padding-right');
    target.style.removeProperty('margin-left');
    target.style.removeProperty('margin-right');
    window.setTimeout(() => {
        target.style.removeProperty('width');
        target.style.removeProperty('flex-shrink');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('transiting');
    }, duration);
}

let slideToggleRightMenu = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideLeft(target, duration);
    } else {
        return slideRight(target, duration);
    }
}

export default function () {
    const toggleMenu = document.getElementById('toggle-menu');
    if (toggleMenu) {
        toggleMenu.addEventListener('click', () => {
            if (document.getElementById('main-menu').classList.contains('transiting')) return;
            document.body.classList.toggle('show-menu');
            slideToggle(document.getElementById('main-menu'), 300);
            toggleMenu.classList.toggle('is-active');
        });
    }
    const toggleRightMenu = document.getElementById('toggle-right-menu');
    if (toggleRightMenu) {
        toggleRightMenu.addEventListener('click', () => {
            if (document.getElementById('right-menu').classList.contains('transiting')) return;
            document.body.classList.toggle('show-right-menu');
            slideToggleRightMenu(document.getElementById('right-menu'), 300);
            toggleRightMenu.classList.toggle('is-active');
        });
    }
}