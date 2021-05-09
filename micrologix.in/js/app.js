(function() {
    let socials = document.querySelectorAll('.social div')
    socials.forEach(function(social, index) {
        social.style.animation = `movein .5s cubic-bezier(0.51, 0.92, 0.24, 1.5) forwards ${index/7+.5}s`
    })


    let links = document.querySelectorAll('.right-nav .links div ')
    links.forEach(function(links, index) {
        links.style.animation = ` navbar .5s cubic-bezier(0.51, 0.92, 0.24, 1.5) forwards ${index/7+.4}s  `
    })
    let logos = document.querySelectorAll('.leftnav div')
    logos.forEach(function(leftnav, index) {
        leftnav.style.animation = `navbar .5s cubic-bezier(0.51, 0.92, 0.24, 1.5) forwards ${index/7+.3}s`
    })
    let downloads = document.querySelectorAll('.download div')
    downloads.forEach(function(download, index) {
        download.style.animation = `navbar .5s cubic-bezier(0.51, 0.92, 0.24, 1.5) forwards ${index/7+.3}s`
    })
    var counter = 1;
    setInterval(function() {
        document.getElementById('radio' + counter).checked = true;
        counter++;

        if (counter > 4) {
            counter = 1;

        }
    }, 10000);


    const number = document.querySelector(".num1 h2")
    let num = 0;
    setInterval(() => {
        if (num == 42) {
            clearInterval();
        } else {
            num += 1;
            number.textContent = num + "%";
        }
    }, 30);
    const number1 = document.querySelector(".num2 h2")
    let num1 = 0;
    setInterval(() => {
        if (num1 == 62) {
            clearInterval();
        } else {
            num1 += 1;
            number1.textContent = num1 + "%";
        }
    }, 20);
    const number2 = document.querySelector(".num3 h2")
    let num2 = 1500;
    setInterval(() => {
        if (num2 == 1856) {
            clearInterval();
        } else {
            num2 = num2 + 1;
            number2.textContent = num2 + "+";
        }
    }, 9);
    const number3 = document.querySelector(".num4 h2")
    let num3 = 0;
    setInterval(() => {
        if (num3 == 39) {
            clearInterval();
        } else {
            num3 += 1;
            number3.textContent = num3 + "+";
        }
    }, 50);

    let progress = document.querySelectorAll('.progress div.eleminate')
    let section = document.querySelector('.progress')
    let triggerStart = window.innerHeight / 1;
    let progressOffSetTop = section.offsetTop;

    document.addEventListener('scroll', (e) => {
        if (window.scrollY > (progressOffSetTop - triggerStart)) {
            progress[0].classList.add('work');
            progress[0].classList.remove('eleminate');
            progress[1].classList.add('work');
            progress[1].classList.remove('eleminate');
        } else {
            progress[0].classList.remove('work');
            progress[0].classList.add('eleminate');
            progress[1].classList.remove('work');
            progress[1].classList.add('eleminate');

        }

    }, 5)
}())