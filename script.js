function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

document.addEventListener('click', function(event) {
    var menu = document.querySelector('.menu');
    var menuToggle = document.querySelector('.menu-toggle');

    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('show');
    }
});

function toggleTheme() {
    var darkTheme = document.getElementById('dark-theme');
    var lightTheme = document.getElementById('light-theme');

    // Перевірка, чи включена темна тема
    if (darkTheme.disabled) {
        // Включення темної теми та вимкнення світлої
        darkTheme.disabled = false;
        lightTheme.disabled = true;
    } else {
        // Включення світлої теми та вимкнення темної
        darkTheme.disabled = true;
        lightTheme.disabled = false;
    }
}

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

document.addEventListener('click', function(event) {
    var menu = document.querySelector('.menu');
    var menuToggle = document.querySelector('.menu-toggle');

    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('show');
    }
});

function toggleTheme() {
    var darkTheme = document.getElementById('dark-theme');
    var lightTheme = document.getElementById('light-theme');

    // Перевірка, чи включена темна тема
    if (darkTheme.disabled) {
        // Включення темної теми та вимкнення світлої
        darkTheme.disabled = false;
        lightTheme.disabled = true;
    } else {
        // Включення світлої теми та вимкнення темної
        darkTheme.disabled = true;
        lightTheme.disabled = false;
    }
}

function toggleLanguage() {
    var langButton = document.getElementById("menulinkLang");
    var themeButton = document.getElementById("menulinkTheme");
    var headerButtons = [document.getElementById("headerButtAboutus"), document.getElementById("headerButtContact")];
    var textElement = document.getElementById("kamsha");
    var NameTag = document.getElementById("Name")

    if (langButton.textContent === "EN") {
        langButton.textContent = "УКР";
        themeButton.textContent = "Світла"
        NameTag.innerHTML = "Камша Дмитро<br>Олександрович"
        headerButtons[0].innerHTML = 'Про нас'
        headerButtons[1].innerHTML = 'Контакти'
        textElement.innerHTML = `Мене звати Камша Дмитро Олександрович, і я народився 7<br>
        жовтня 2003 року в селі Скородистик Золотоніського району<br>
        Черкаської області. Моя освітня історія почалася з Ірклієвського<br>
        дитсадка, де я відвідував 1 клас. Після цього я перейшов до<br>
        Скородистицької школи Життєтворчості, де здобував освіту до<br>
        9 класу. Вже на початкових етапах мені було цікаве<br>
        Програмування, тому я вирішив продовжити свою освіту в<br>
        Черкаському державному бізнес коледжі на спеціальності<br>
        "Інженерія програмного забезпечення".
        <br><br>
        Наразі я навчаюсь на другому курсі бакалаврату. Мої інтереси<br>
        та хобі різноманітні, але найбільшим захопленням для мене є<br>
        гра в онлайн ігри, зокрема Counter-Strike, PUBG, Rust тощо. Серед<br>
        них найбільше я віддавав перевагу Counter-Strike, де навіть мав<br>
        можливість створити власну команду FIVE DEATHS та брати<br>
        участь в турнірах. Паралельно з цим я вміло використовував<br>
        свої художні здібності, які виявилися в малюванні логотипів.
        <br><br>
        Моя основна мета - стати програмістом високого рівня в сфері<br>
        веб-дизайну або веб та андроїд розробки. Мене також цікавить<br>
        можливість працювати як Python розробник, але це залежить<br>
        від моїх навичок та знань. Я вірю, що з наполегливістю та<br>
        старанням я досягну своїх мрій та реалізую свій потенціал у<br>
        світі програмування.`;
    } 
    else {
        langButton.textContent = "EN";
        themeButton.textContent = "Light"
        NameTag.innerHTML = "Kamsha Dmytro<br>Oleksandrovich"
        headerButtons[0].innerHTML = 'About Us'
        headerButtons[1].innerHTML = 'Contact'
        textElement.innerHTML = `My name is Kamsha Dmytro Oleksandrovych, and I was born on<br>
        October 7, 2003 in the village of Skorodistyk, Zolotonsky district,<br>
        Cherkasy region. My educational history began with the Irkliiv<br>
        kindergarten, where I attended the 1st grade. After that, I transferred<br>
        to the Skorodystytsky School of Life, where I studied up to the 9th<br>
        grade. Already at the initial stages, I was interested in programming, so<br>
        I decided to continue my education at the Cherkasy State Business<br>
        College, majoring in "Software Engineering".<br>
        <br>
        I am currently studying in the second year of my bachelor's degree. My<br>
        interests and hobbies are varied, but my biggest passion is playing<br>
        online games, including Counter-Strike, PUBG, Rust, etc. Among them,<br>
        I most preferred Counter-Strike, where I even had the opportunity to<br>
        create my own FIVE DEATHS team and participate in tournaments. In<br>
        parallel with this, I skillfully used my artistic abilities, which were<br>
        revealed in drawing logos.<br>
        <br>
        My main goal is to become a high-level programmer in the field of<br>
        web design or web and android development. I am also interested in<br>
        working as a Python developer, but it depends on my skills and<br>
        knowledge. I believe that with persistence and effort, I will achieve my<br>
        dreams and realize my potential in the world of programming.`;
    }
}

function toggleLanguagePage2(){
    var langButton = document.getElementById("menulinkLang");
    var themeButton = document.getElementById("menulinkTheme");
    var text = document.getElementById("page2text");
    var NameTag = document.getElementById("Name");
    var backbtn = document.getElementById("back");
    var Status = document.getElementById("status");
    var main = document.getElementById("menulinkMain")
    var preferredLanguage = localStorage.getItem('preferredLanguage');
    

    if (langButton.textContent === "EN") {
        langButton.textContent = "УКР";
        themeButton.textContent = "Світла";
        NameTag.innerHTML = "Камша Дмитро<br>Олександрович";
        Status.innerHTML = "Про нас";
        backbtn.textContent = "НАЗАД";
        main.textContent = "Головна"
        text.innerHTML = `MicroScript - це інноваційна компанія, що спеціалізується<br>
        на розробці та впровадженні програмного забезпечення для<br>
        автоматизації бізнес-процесів. Заснована у 2010 році, ми вже<br>
        більше десяти років працюємо над створенням ефективних<br>
        рішень для клієнтів з усього світу.<br>
        Наша команда складається з досвідчених програмістів,<br>
        аналітиків та інженерів, які працюють разом, щоб забезпечити<br>
        нашим клієнтам найкращі рішення у сфері програмної<br>
        інженерії. Ми використовуємо сучасні технології та передові<br>
        методи розробки, щоб створювати продукти, які відповідають<br>
        потребам наших клієнтів та допомагають їм досягати своїх<br>
        бізнес-цілей.<br>
        Наші продукти використовуються в різних сферах, включаючи<br>
        фінанси, логістику, медицину та багато інших. Ми пишаємося<br>
        тим, що наші рішення допомагають компаніям оптимізувати<br>
        свої процеси, збільшувати ефективність та забезпечувати<br>
        конкурентні переваги на ринку.<br>
        Наша місія - надавати найкращі рішення у сфері програмної<br>
        інженерії, щоб допомагати нашим клієнтам досягати успіху в<br>
        їхніх справах. Ми прагнемо до постійного вдосконалення та<br>
        інновацій, щоб залишатися лідером у нашій галузі.<br>
        Дякуємо, що обрали MicroScript. З нами ваш бізнес завжди буде<br>
        у надійних руках!`
    }
    else {
        langButton.textContent = "EN";
        themeButton.textContent = "Light"
        NameTag.innerHTML = "Kamsha Dmytro<br>Oleksandrovich";
        Status.innerHTML = "About Us";
        backbtn.textContent= "BACK";
        main.textContent = "The main"
        text.innerHTML = `MicroScript is an innovative company specializing in the development<br>
        and implementation of software for business process automation.<br>
        Founded in 2010, we have been working on creating effective<br>
        solutions for clients from all over the world for more than ten years.<br>
        Our team consists of experienced programmers, analysts and<br>
        engineers who work together to provide our clients with the best<br>
        software engineering solutions. We use modern technology and<br>
        advanced design methods to create products that meet our customers'<br>
        needs and help them achieve their business goals.<br>
        Our products are used in various fields including finance, logistics,<br>
        medicine and many others. We are proud that our solutions help<br>
        companies optimize their processes, increase efficiency and provide<br>
        competitive advantages in the market.<br>
        Our mission is to provide the best software engineering solutions to<br>
        help our customers succeed in their business. We are committed to<br>
        continuous improvement and innovation to remain a leader in our<br>
        industry.<br>
        Thank you for choosing MicroScript. With us, your business will always<br>
        be in safe hands!
        `
    }
}

function toggleLanguagePage3(){
    var langButton = document.getElementById("menulinkLang");
    var themeButton = document.getElementById("menulinkTheme");
    var text = document.getElementById("page3text");
    var write = document.getElementById("write")
    var NameTag = document.getElementById("Name");
    var backbtn = document.getElementById("back");
    var Status = document.getElementById("status");
    var maps = document.getElementById("maps")
    var main = document.getElementById("menulinkMain")
    var preferredLanguage = localStorage.getItem('preferredLanguage');

    if (langButton.textContent === "EN") {
        langButton.textContent = "УКР";
        themeButton.textContent = "Світла";
        NameTag.innerHTML = "Камша Дмитро<br>Олександрович";
        Status.innerHTML = "Контакти";
        backbtn.textContent = "НАЗАД";
        write.textContent = "Написати";
        maps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5192.180965651678!2d32.0585801849047!3d49.40719453847033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14bc250dcf895%3A0xba464a0e8d80c83c!2z0KfQtdGA0LrQsNGB0YzQutC40Lkg0LTQtdGA0LbQsNCy0L3QuNC5INCx0ZbQt9C90LXRgS3QutC-0LvQtdC00LY!5e0!3m2!1suk!2sua!4v1713424989314!5m2!1suk!2sua" width="500" height="390" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        main.textContent = "Головна"

        text.innerHTML = `Якщо у вас виникли будь-які питання або вам потрібна<br>
        додаткова інформація, будь ласка, зв'яжіться з нами. Ми<br>
        завжди раді допомогти!<br>
        <br>
        Адреса: [вставити адресу]<br>
        Телефон: [вставити номер телефону]<br>
        Електронна пошта: [вставити електронну пошту]<br>
        Години роботи: [вставити години роботи]<br>
        <br>
        Також ви можете зв'язатися з нами за допомогою форми<br>
        зворотнього зв'язку нижче.<br>
        <br>
        Ми очікуємо на ваше повідомлення і відповімо вам<br>
        якнайшвидше. Дякуємо за інтерес до нашої компанії!`

    }
    else {
        langButton.textContent = "EN";
        themeButton.textContent = "Light"
        NameTag.innerHTML = "Kamsha Dmytro<br>Oleksandrovich";
        Status.innerHTML = "Contact";
        backbtn.textContent= "BACK";
        write.textContent = "Write";
        maps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.1662287203767!2d32.05174781659551!3d49.40576205526203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14bc250dcf895%3A0xba464a0e8d80c83c!2sCherkasy%20State%20Business%20College!5e0!3m2!1sen!2sua!4v1714644281211!5m2!1sen!2sua" width="500" height="390" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        main.textContent = "The main"

        text.innerHTML = `If you have any questions or need more information, please contact us.<br>
        We are always happy to help!<br>
        <br>
        Address: [insert address]<br>
        Phone: [insert phone number]<br>
        Email: [insert email]<br>
        Hours of Operation: [insert hours of operation]<br>
        <br>
        You can also contact us using the feedback form below.<br>
        <br>
        We look forward to hearing from you and will get back to you as soon<br>
        as possible. Thank you for your interest in our company!`
    }
}