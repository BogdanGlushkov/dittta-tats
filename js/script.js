$(document).ready(function () {

    $('#menu_btn').click(function () {
        $('.menu').toggle( "slide" );
        $('.overlay').show(400);
    });

    // $('.header__btn-menu-close').click(function () {
    //     $('.header__btn-menu-open').show();
    //     $('.menu ul').hide();
    //     $('.header__btn-menu-close').hide();
    //     $('.header__logo').show();
    //     $('header').css("padding-top", "65px");
    // });

});

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop - 40,
        behavior: 'smooth'
    })
}

var button_portfolio = document.querySelector('#Портфолио_кнопка');
var button_rewievs = document.querySelector('#Отзывы_кнопка');
var button_contacts = document.querySelector('#Контакты_кнопка');
var button_schedule = document.querySelector('#Запись_кнопка');
var button_portfolio_footer = document.querySelector('#Портфолио_кнопка_футер');
var button_rewievs_footer = document.querySelector('#Отзывы_кнопка_футер');
var button_contacts_footer = document.querySelector('#Контакты_кнопка_футер');
var button_schedule_footer = document.querySelector('#Запись_кнопка_футер');
var button_schedule_gl = document.querySelector('#Запись_открыта_кнопка');

var portfolio = document.querySelector('#Портфолио');
var rewievs = document.querySelector('#Отзывы');
var contacts = document.querySelector('#Контакты');
var schedule = document.querySelector('#Запись');

// 

function BringBack() {
    $('.menu').toggle("slide");
    $('.overlay').hide(400);
}

button_portfolio.addEventListener('click', () => {
    BringBack();
    scrollTo(portfolio);
})

button_rewievs.addEventListener('click', () => {
    BringBack();
    scrollTo(rewievs);
})

button_contacts.addEventListener('click', () => {
    BringBack();
    scrollTo(contacts);
})

button_schedule.addEventListener('click', () => {
    BringBack();
    scrollTo(schedule);
})

button_portfolio_footer.addEventListener('click', () => {
    scrollTo(portfolio);
})

button_rewievs_footer.addEventListener('click', () => {
    scrollTo(rewievs);
})

button_contacts_footer.addEventListener('click', () => {
    scrollTo(contacts);
})

button_schedule_footer.addEventListener('click', () => {
    scrollTo(schedule);
})

button_schedule_gl.addEventListener('click', () => {
    scrollTo(schedule);
})