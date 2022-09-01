// contact me button

let contactButton = document.getElementById('contact_me'),
    contactPage = document.querySelector('#contact-me-container div'),
    contactBg = document.getElementById('contact-me-container');

contactButton.addEventListener('click', function () {
    contactBg.classList.add('showContactsContainer');
    contactPage.classList.add('showContacts');
});


// about me button

let aboutMe = document.getElementById('about-me-container'),
    aboutMeButton = document.getElementById('about_me'),
    aboutP = document.querySelectorAll('#aboutText p');

aboutMeButton.addEventListener('click', function () {
    aboutMe.classList.add('showAbout');
    contactBg.classList.add('showContactsContainer');
    for (let i = 0; i < aboutP.length; i++) {
        aboutP[i].classList.add('showP');
    }
});

contactBg.addEventListener('click', function () {
    for (let i = 0; i < aboutP.length; i++) {
        aboutP[i].classList.remove('showP');
    }
    aboutMe.classList.remove('showAbout');
    contactPage.classList.remove('showContacts');
    contactBg.classList.remove('showContactsContainer');
    contactBg.classList.remove('showContactsContainer');
});

// script for skill groups

let arr = document.querySelectorAll('.skillCatagory'),
    skillType = document.querySelectorAll('#skill-groups>li'),
    skillIcons = document.querySelectorAll('.skill-icons li'),
    skillText = document.getElementsByClassName('skill-text'),
    lastSkill = undefined;

skillType[0].addEventListener('click', function () { display(0); });
skillType[1].addEventListener('click', function () { display(1); });
skillType[2].addEventListener('click', function () { display(2); });
skillType[3].addEventListener('click', function () { display(3); });

display(0);

function display(i) {
    arr[i].style.opacity = '1';
    skillType[i].style.fontWeight = '600';
    skillType[i].style.color = 'var(--themeColor)';
    skillText[i].style.opacity = '1';
    skillIcons[i].style.transform = 'scale(1)';

    if (lastSkill != undefined) {
        arr[lastSkill].style.opacity = '0';
        skillType[lastSkill].style.fontWeight = 'normal';
        skillType[lastSkill].style.color = 'white';
        skillText[lastSkill].style.opacity = '0';
        skillIcons[lastSkill].style.transform = 'scale(1)';
    }
    lastSkill = i;
}

// script for project hover tiles

let arr2 = document.querySelectorAll('#projectlist li'),
    lastj = undefined;


arr2[0].addEventListener('click', function () { incWidth(0); });
arr2[1].addEventListener('click', function () { incWidth(1); });
arr2[2].addEventListener('click', function () { incWidth(2); });
arr2[3].addEventListener('click', function () { incWidth(3); });
arr2[4].addEventListener('click', function () { incWidth(4); });

incWidth(0);
function incWidth(j) {
    if (j == lastj) {
        return;
    }
    arr2[j].classList.add('cardWidth');
    arr2[j].classList.add('pro-psedo-slide');
    arr2[lastj]?.classList.remove('pro-psedo-slide');
    arr2[lastj]?.classList.remove('cardWidth');
    // arr2[lastj].style.width = "min(var(--cardWidth), 10%)";
    lastj = j;
}


//script for setting button

let settings = document.getElementById('settings'),
    colors = document.querySelectorAll('#color-panel > li'),
    root = document.querySelector(':root');

settings.addEventListener('click', function () { settingsClick(); });


opened = true;
function settingsClick() {
    colorPanel = document.getElementById('color-panel');
    if (opened) {
        settings.classList.remove('fa-gear');
        settings.classList.add('fa-xmark', 'no-border');
        colorPanel.classList.add('panel-click');
        opened = false;
    }
    else {
        settings.classList.remove('fa-xmark', 'no-border');
        settings.classList.add('fa-gear');
        colorPanel.classList.remove('panel-click');
        opened = true;
    }
}

//theme setting

colors[0].addEventListener('click', function () { changeTheme(0); });
colors[1].addEventListener('click', function () { changeTheme(1); });
colors[2].addEventListener('click', function () { changeTheme(2); });
colors[3].addEventListener('click', function () { changeTheme(3); });
colors[4].addEventListener('click', function () { changeTheme(4); });
colors[5].addEventListener('click', function () { changeTheme(5); });

colorArr = ['magenta', 'orange', 'deeppink', 'springgreen', 'turquoise', 'yellow'];
darkColorArr = ['hsl(300, 50%, 25%)', 'hsl(39, 50%, 25%)', 'hsl(328, 50%, 27%)', 'hsl(150, 50%, 25%)', 'hsl(174, 36%, 28%)', 'hsl(60, 50%, 25%)'];


let lastColor = undefined;
let randNum = Math.floor(Math.random() * (colors.length - 1));

changeTheme(randNum);
function changeTheme(i) {
    if (i == lastColor) {
        return;
    }
    root.style.setProperty('--themeColor', colorArr[i]);
    root.style.setProperty('--themeColorBack', darkColorArr[i]);
    colors[i].classList.add('display');
    colors[lastColor]?.classList.remove('display');
    lastColor = i;
}