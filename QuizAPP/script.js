//StartBody
var body = window.document.querySelector('body');
//
//HTML LANG
var html_lang = document.querySelector('html');
html_lang.setAttribute('lang', 'pt-BR');
//
//StartHead
var meta_charset = document.createElement('meta');
meta_charset.setAttribute('charset', 'UTF-8');

var title_tag = document.createElement('title');
title_tag.innerText = 'QuizApp!';

var link_icon = document.createElement('link');
link_icon.setAttribute('rel', 'shortcut icon');
link_icon.setAttribute('href', 'QuizAppLogo.png');
link_icon.setAttribute('type', 'image/x-icon');

link_style = document.createElement('link');
link_style.setAttribute('rel', 'stylesheet');
link_style.setAttribute('href', './style.css');

link_bootstrap = document.createElement('link');
link_bootstrap.setAttribute('href', "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css");
link_bootstrap.setAttribute('rel', 'stylesheet');
link_bootstrap.setAttribute('integrity', "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1");
link_bootstrap.setAttribute('crossorigin', "anonymous")

link_materialIcons = document.createElement('link');
link_materialIcons.setAttribute('href', "https://fonts.googleapis.com/icon?family=Material+Icons");
link_materialIcons.setAttribute('rel', 'stylesheet');

document.head.append(meta_charset);
document.head.append(title_tag);
document.head.append(link_icon);
document.head.append(link_style);
document.head.append(link_bootstrap);
document.head.append(link_materialIcons);
//EndHead
//
//NavbarStart//
var app = window.document.createElement('div');
app.setAttribute('id', 'app');

body.append(app);

var nav = window.document.createElement('nav');
nav.setAttribute('class', 'navbar navbar-dark bg-dark');

app.append(nav);

nav_div = window.document.createElement('div');
nav_div.setAttribute('class', 'container-fluid');

nav.append(nav_div);

nav_logo = window.document.createElement('h1');
nav_logo.setAttribute('class', 'navbar-brand');
nav_logo.setAttribute('id', 'logo');
nav_logo.innerText = 'QuizApp!';

nav_div.append(nav_logo);

nav_darkModeButton = window.document.createElement('a');
nav_darkModeButton.setAttribute('class', 'nav-link');
nav_darkModeButton.setAttribute('id', 'button');
nav_darkModeButton.setAttribute('href', '#');

nav_div.append(nav_darkModeButton);

nav_spanDarkModeButton = window.document.createElement('span');
nav_spanDarkModeButton.setAttribute('class', 'material-icons');
nav_spanDarkModeButton.innerText = 'dark_mode';

nav_darkModeButton.append(nav_spanDarkModeButton);
//NavbarEnd
//
//Dark&LightMode START//
var button = window.document.getElementById('button');
button.setAttribute('onclick', 'darkMode()');

function darkMode() {
    var button = window.document.getElementById('button');

    var body = window.document.querySelector('body');
    body.style.backgroundColor = 'rgb(21,25,29)';
    body.style.color = 'rgb(255,255,255)';
    body.style.transition = 'all 1s';

    button.setAttribute('class', 'material-icons');
    button.innerText = 'light_mode';
    button.setAttribute('onclick', 'lightMode()')
    button.style.textDecoration = 'none';
    button.style.color = '#FFFFFF8C';
    button.style.marginTop = '8px';
    button.style.marginBottom = '14px';
}
function lightMode() {
    var button = window.document.getElementById('button');

    var body = window.document.querySelector('body');
    body.style.backgroundColor = 'rgb(250,250,250)';
    body.style.color = 'rgb(0,0,0)';
    body.style.transition = 'all 1s';

    button.setAttribute('class', 'material-icons');
    button.innerText = 'dark_mode';
    button.setAttribute('onclick', 'darkMode()')
    button.style.textDecoration = 'none';
    button.style.color = '#FFFFFF8C';
}
//Dark&LightMode END//
//
//StartGame Start//
var container = window.document.createElement('div');
container.setAttribute('id', 'container');
container.setAttribute('class', 'container container-fluid');

body.append(container);

var boxApp = window.document.createElement('div');
boxApp.setAttribute('id', 'boxApp');
boxApp.setAttribute('class', 'container container-fluid');

container.append(boxApp);

var page_ = window.document.createElement('div');
page_.setAttribute('class', 'container container-fluid');
page_.setAttribute('id', 'page_');


var gameTitle = window.document.createElement('div');
gameTitle.setAttribute('class', 'container container-fluid');
gameTitle.setAttribute('id', 'gameTitle');
gameTitle.innerText = 'QuizApp!';

boxApp.append(page_);
page_.append(gameTitle);

var start = window.document.createElement('div');
start.setAttribute('id', 'start');
start.setAttribute('class', 'container');

var startButton = window.document.createElement('button');
startButton.setAttribute('id', 'startButton');
startButton.setAttribute('onclick', 'startGame()');
startButton.innerText = 'Start!';

page_.append(start);
start.append(startButton);

function startGame() {
    var box = window.document.getElementById('boxApp');
    var page = window.document.getElementById('page_')

    box.removeChild(page);

    var levels_ = window.document.createElement('div');
    levels_.setAttribute('id', 'level_');
    levels_.setAttribute('class', 'container container-fluid');

    var questions_ = window.document.createElement('div');
    questions_.setAttribute('id', 'question_');
    questions_.setAttribute('class', 'container container-fluid');

    var text = window.document.createElement('p');
    text.innerHTML = 'Qual é o resultado da soma das raizes reais da função f(x)=x<sup>2</sup>+16x+39?';

    box.append(levels_);
    levels_.append(questions_);
    questions_.append(text);

    var options_ = window.document.createElement('div');
    options_.setAttribute('id', 'options');

    var answerButton_0 = window.document.createElement('button');
    answerButton_0.setAttribute('class', 'answers');
    answerButton_0.setAttribute('onclick', 'allRight()');
    answerButton_0.innerText = '-16';

    var answerButton_1 = window.document.createElement('button');
    answerButton_1.setAttribute('class', 'answers');
    answerButton_1.setAttribute('onclick', 'unRight()');
    answerButton_1.innerText = '13';

    var answerButton_2 = window.document.createElement('button');
    answerButton_2.setAttribute('class', 'answers');
    answerButton_2.setAttribute('onclick', 'unRight()');
    answerButton_2.innerText = '-3';

    var answerButton_3 = window.document.createElement('button');
    answerButton_3.setAttribute('class', 'answers');
    answerButton_3.setAttribute('onclick', 'unRight()');
    answerButton_3.innerText = '8';

    levels_.append(options_);
    options_.append(answerButton_0);
    options_.append(answerButton_1);
    options_.append(answerButton_2);
    options_.append(answerButton_3);

    var result_ = window.document.createElement('div');
    result_.setAttribute('id', 'result');

    var result_text = window.document.createElement('h4');
    result_text.setAttribute('id', 'resultText');

    levels_.append(result_);
    result_.append(result_text);
}
function allRight() {
    var level = window.document.getElementById('level_');
    var result = window.document.getElementById('resultText');
    result.innerHTML = 'Resposta Correta!!!';
    result.style.color = 'rgb(0,255,0)';

    // var button_all = window.document.querySelector('[onclick = "allRight()"]');
    // button_all.style.backgroundColor = 'rgb(0,255,0)';
    // button_all.style.color = 'rgb(255,255,255)';

    // button_un = window.document.querySelector('[onclick = "unRight()"]');
    // button_un.style.backgroundColor = 'rgb(240,240,2504)';
    // button_un.style.color = 'rgb(0,0,0)';

    var next_ = window.document.createElement('button');
    next_.setAttribute('class', 'material-icons');
    next_.setAttribute('id', 'nextArrow');
    next_.setAttribute('onclick', 'nextQuestion_1()');
    next_.innerText = 'redo';

    level.append(next_);
}
function unRight() {
    var level = window.document.getElementById('level_');
    var result = window.document.getElementById('resultText');
    result.innerHTML = 'Resposta Incorreta!!!';;
    result.style.color = 'rgb(255,0,0)';

    // var button_un = window.document.querySelector('[onclick = "unRight()"]');
    // button_un.style.backgroundColor = 'rgb(255,0,0)';
    // button_un.style.color = 'rgb(255,255,255)';

    // var button_all = window.document.querySelector('[onclick = "allRight()"]');
    // button_all.style.backgroundColor = 'rgb(240,240,240)';
    // button_all.style.color = 'rgb(0,0,0)';

    level.append(result);


    var next = window.document.getElementById('nextArrow');

    level.removeChild(next);
}
function nextQuestion_1() {
    var box = window.document.getElementById('boxApp');
    var level = window.document.getElementById('level_');

    box.removeChild(level);

    var levels_2 = window.document.createElement('div');
    levels_2.setAttribute('id', 'level_2');
    levels_2.setAttribute('class', 'container container-fluid');

    var questions_ = window.document.createElement('div');
    questions_.setAttribute('id', 'question_');
    questions_.setAttribute('class', 'container container-fluid');

    var text = window.document.createElement('p');
    text.innerHTML = 'Qual é a raiz de &pi; ?';

    box.append(levels_2);
    levels_2.append(questions_);
    questions_.append(text);

    var options_ = window.document.createElement('div');
    options_.setAttribute('id', 'options');

    var answerButton_0 = window.document.createElement('button');
    answerButton_0.setAttribute('class', 'answers');
    answerButton_0.setAttribute('onclick', 'unRight_Two()');
    answerButton_0.innerText = '0,78';

    var answerButton_1 = window.document.createElement('button');
    answerButton_1.setAttribute('class', 'answers');
    answerButton_1.setAttribute('onclick', 'unRight_Two()');
    answerButton_1.innerText = '1,14';

    var answerButton_2 = window.document.createElement('button');
    answerButton_2.setAttribute('class', 'answers');
    answerButton_2.setAttribute('onclick', 'allRight_Two()');
    answerButton_2.innerText = '1,77';

    var answerButton_3 = window.document.createElement('button');
    answerButton_3.setAttribute('class', 'answers');
    answerButton_3.setAttribute('onclick', 'unRight_Two()');
    answerButton_3.innerText = '3,14';

    levels_2.append(options_);
    options_.append(answerButton_0);
    options_.append(answerButton_1);
    options_.append(answerButton_2);
    options_.append(answerButton_3);

    var result_ = window.document.createElement('div');
    result_.setAttribute('id', 'result');

    var result_text = window.document.createElement('h4');
    result_text.setAttribute('id', 'resultText');

    levels_2.append(result_);
    result_.append(result_text);
}
function allRight_Two() {
    var levelTwo = window.document.getElementById('level_2');

    var result = window.document.getElementById('resultText');
    result.innerHTML = 'Resposta Correta!!!';
    result.style.color = 'rgb(0,255,0)';

    // var button_all = window.document.querySelector('[onclick = "allRight()"]');
    // button_all.style.backgroundColor = 'rgb(0,255,0)';
    // button_all.style.color = 'rgb(255,255,255)';

    // button_un = window.document.querySelector('[onclick = "unRight()"]');
    // button_un.style.backgroundColor = 'rgb(240,240,2504)';
    // button_un.style.color = 'rgb(0,0,0)';

    var next_Two = window.document.createElement('button');
    next_Two.setAttribute('class', 'material-icons');
    next_Two.setAttribute('id', 'nextArrow');
    next_Two.setAttribute('onclick', 'nextQuestion_2()');
    next_Two.innerText = 'redo';

    levelTwo.append(next_Two);
}
function unRight_Two() {
    var levelTwo = window.document.getElementById('level_2');

    var result = window.document.getElementById('resultText');
    result.innerHTML = 'Resposta Incorreta!!!';;
    result.style.color = 'rgb(255,0,0)';

    // var button_un = window.document.querySelector('[onclick = "unRight()"]');
    // button_un.style.backgroundColor = 'rgb(255,0,0)';
    // button_un.style.color = 'rgb(255,255,255)';

    // var button_all = window.document.querySelector('[onclick = "allRight()"]');
    // button_all.style.backgroundColor = 'rgb(240,240,240)';
    // button_all.style.color = 'rgb(0,0,0)';

    levelTwo.append(result);

    var next_Two = window.document.getElementById('nextArrow');

    levelTwo.removeChild(next_Two);
}
function nextQuestion_2(){
    alert('Fase 3 Em Desenvolvimento!');
    console.error('Fase 3 Em Desenvolvimento!!!');
}
//AppEnd
//
//Footer
var footer = window.document.createElement('nav');
footer.setAttribute('class', 'navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark');

body.append(footer);
//FooterEnd
//
//Scripts
var script_bootstrapCdn = window.document.createElement('script');
script_bootstrapCdn.setAttribute('src', "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js");
script_bootstrapCdn.setAttribute('integrity', "sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW");
script_bootstrapCdn.setAttribute('crossorigin', "anonymous");

body.append(script_bootstrapCdn);
//