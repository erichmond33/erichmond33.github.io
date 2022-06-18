document.addEventListener('DOMContentLoaded', function() {

    if (window.location.pathname == "/") { document.location.href = "/index.html"; }

    navbarElements();
    setTimeout(navbarFunctionality, 50);


});

function navbarElements() {
    let masthead = document.getElementById('masthead');

    let divRow1 = document.createElement('div');
    divRow1.setAttribute('class', 'row p-auto');
    masthead.appendChild(divRow1);

        let divColLogo = document.createElement('div');
        divColLogo.classList.add('col');
        divColLogo.setAttribute('id', 'logo');
        divRow1.appendChild(divColLogo);

            let wilder = document.createElement('a');
            wilder.setAttribute('href', '/index.html');
            wilder.innerHTML = "Wilder";
            divColLogo.appendChild(wilder);

    let divRow2 = document.createElement('div');
    divRow2.setAttribute('class', 'row p-auto');
    masthead.appendChild(divRow2);

        let divColMediaLinks = document.createElement('div');
        divColMediaLinks.classList.add('col');
        divColMediaLinks.setAttribute('id', 'mediaLinks');
        divRow2.appendChild(divColMediaLinks);

            let contact = document.createElement('a');
            contact.setAttribute('href', '../index.html#contact');
            contact.innerHTML = "contact";
            divColMediaLinks.appendChild(contact);

        let divColLastName = document.createElement('div');
        divColLastName.classList.add('col');
        divColLastName.setAttribute('id', 'lastName');
        divColLastName.innerHTML = "Change";
        divRow2.appendChild(divColLastName);

    let nav = document.createElement('nav');
    masthead.appendChild(nav);

        let divNavLinks = document.createElement('div');
        divNavLinks.setAttribute('id', 'nav-links');
        nav.appendChild(divNavLinks);

            let me = document.createElement('a');
            me.setAttribute('href', '../index.html#meInTenSeconds');
            me.innerHTML = "Me";
            divNavLinks.appendChild(me);

            let now = document.createElement('a');
            now.setAttribute('href', '../index.html#whatImDoingNow');
            now.innerHTML = "Now";
            divNavLinks.appendChild(now);

            let blog = document.createElement('a');
            blog.setAttribute('href', '../index.html#articles');
            blog.innerHTML = "Blog";
            divNavLinks.appendChild(blog);

            let misc = document.createElement('a');
            misc.setAttribute('href', '../index.html#myRealEducation');
            misc.innerHTML = "Misc";
            divNavLinks.appendChild(misc);
}

function navbarFunctionality() {
    var navLinks = document.querySelectorAll('#nav-links a');
    var sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        if (window.location.pathname == "" || window.location.pathname == "/" || window.location.pathname == "/index" || window.location.pathname == '/index.html' || window.location.pathname == "/Users/erichmond_33/github/erichmond33.github.io/index.html") {
            link.addEventListener("mouseover", function() {
                if (link.innerHTML == "Me") {
                    sections.forEach(element => {
                        if (element.id == "meInTenSeconds" || element.id == "masthead") {
                            element.style.display = "block";
                        } else {
                            element.style.display = "none";
                        }
                    });
                }
                else if (link.innerHTML == "Now") {
                    sections.forEach(element => {
                        if (element.id == "whatImDoingNow" || element.id == "masthead") {
                            element.style.display = "block";
                        } else {
                            element.style.display = "none";
                        }
                    });
                }
                else if (link.innerHTML == "Blog") {
                    sections.forEach(element => {
                        if (element.id == "articles" || element.id == "masthead") {
                            element.style.display = "block";
                        } else {
                            element.style.display = "none";
                        }
                    });
                }
                else if (link.innerHTML == "Misc") {
                    sections.forEach(element => {
                        if (element.id == "myRealEducation" || element.id == "masthead") {
                            element.style.display = "block";
                        } else {
                            element.style.display = "none";
                        }
                    });
                }
            });

            link.addEventListener("mouseout", function() {
                sections.forEach(element => {
                    element.style.display = "block";
                });
            });
        }

        link.addEventListener("click", function() {
            sections.forEach(element => {
                element.style.display = "block";
            });
            if (link.innerHTML == "Me") {
                document.getElementById('meInTenSeconds').scrollIntoView();
            }
            else if (link.innerHTML == "Now") {
                document.getElementById('whatImDoingNow').scrollIntoView();
            }
            else if (link.innerHTML == "Blog") {
                document.getElementById('articles').scrollIntoView();
            }
            else if (link.innerHTML == "Misc") {
                document.getElementById('myRealEducation').scrollIntoView();
            }
        });
    })
}