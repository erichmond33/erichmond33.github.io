document.addEventListener('DOMContentLoaded', function() {

    // if (window.location.pathname == "/") { document.location.href = "/index.html"; }

    navbarElements();
    setTimeout(navbarFunctionality, 10);

    // A function that waits for images to load then scrolls the the #id loacated in the URL
    function scrollToId() {
        if (window.location.hash) {
            var id = window.location.hash;
            var element = document.querySelector(id);
            if (element) {
                element.scrollIntoView();
            }
        }
        console.log(id);
    }

    window.onload = function() {
        scrollToId();
    }

    // Dynamically add social meta tags to every page
    const head = document.head;
    const pageUrl = window.location.origin + window.location.pathname;

    function addMetaTag(name, content, property = false) {
        const meta = document.createElement('meta');
        if (property) {
            meta.setAttribute('property', name);
        } else {
            meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        head.appendChild(meta);
    }

    addMetaTag('twitter:card', 'summary_large_image');
    addMetaTag('twitter:image', 'https://pic.fish/' + pageUrl);
    addMetaTag('og:image', 'https://pic.fish/' + pageUrl, true);
});

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }

function navbarElements() {
    let masthead = document.getElementById('masthead');
    masthead.innerHTML = "";

    let divRow1 = document.createElement('div');
    masthead.appendChild(divRow1);

        let divColLogo = document.createElement('div');
        divColLogo.setAttribute('id', 'logo');
        divRow1.appendChild(divColLogo);

            let wilder = document.createElement('a');
            wilder.setAttribute('href', '/');
            wilder.innerHTML = "Eli Richmond";
            divColLogo.appendChild(wilder);

    let divRow2 = document.createElement('div');
    divRow2.setAttribute('class', 'row p-auto');
    masthead.appendChild(divRow2);

        let divColMediaLinks = document.createElement('div');
        divColMediaLinks.classList.add('col');
        divColMediaLinks.setAttribute('id', 'mediaLinks');
        divRow2.appendChild(divColMediaLinks);

            let contact = document.createElement('a');
            contact.setAttribute('href', '/#contact');
            contact.innerHTML = "contact";
            // divColMediaLinks.appendChild(contact);

        let divColLastName = document.createElement('div');
        divColLastName.classList.add('col');
        divColLastName.setAttribute('id', 'lastName');
        divColLastName.innerHTML = "Change";
        // divRow2.appendChild(divColLastName);

    let nav = document.createElement('nav');
    masthead.appendChild(nav);

        let divNavLinks = document.createElement('div');
        divNavLinks.setAttribute('id', 'nav-links');
        nav.appendChild(divNavLinks);

            let spacer = document.createElement('div');
            spacer.innerHTML = "|";

            let me = document.createElement('a');
            me.setAttribute('href', '/#me');
            me.setAttribute('class', 'border-right');
            me.innerHTML = "Me";
            divNavLinks.appendChild(me);
            divNavLinks.appendChild(spacer.cloneNode(true));

            let now = document.createElement('a');
            now.setAttribute('href', '/#now');
            now.innerHTML = "Now";
            divNavLinks.appendChild(now);
            divNavLinks.appendChild(spacer.cloneNode(true));

            let blog = document.createElement('a');
            blog.setAttribute('href', '/#articles');
            blog.innerHTML = "Blog";
            divNavLinks.appendChild(blog);
            divNavLinks.appendChild(spacer.cloneNode(true));
            
            let book = document.createElement('a');
            book.setAttribute('href', '/#book');
            book.innerHTML = "Book";
            divNavLinks.appendChild(book);
            divNavLinks.appendChild(spacer.cloneNode(true));

            let misc = document.createElement('a');
            misc.setAttribute('href', '/#misc');
            misc.innerHTML = "Misc";
            divNavLinks.appendChild(misc);
}

function navbarFunctionality() {
    var navLinks = document.querySelectorAll('#nav-links a');
    var sections = document.querySelectorAll('section');

    navLinks.forEach(link => { hoverability(link, sections); });
}

function hoverability(link, sections) {
    if (window.location.pathname == "" || window.location.pathname == "/" || window.location.pathname == "/index" || window.location.pathname == '/index.html' || window.location.pathname == "/Users/erichmond_33/github/erichmond33.github.io/index.html") {
        link.addEventListener("mouseover", function() {
            if (link.innerHTML == "Me") {
                sections.forEach(element => {
                    if (element.id == "me" || element.id == "masthead") {
                        element.style.display = "block";
                    } else {
                        element.style.display = "none";
                    }
                });
            }
            else if (link.innerHTML == "Now") {
                sections.forEach(element => {
                    if (element.id == "now" || element.id == "masthead") {
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
            else if (link.innerHTML == "Book") {
                sections.forEach(element => {
                    if (element.id == "book" || element.id == "masthead") {
                        element.style.display = "block";
                    } else {
                        element.style.display = "none";
                    }
                });
            }
            else if (link.innerHTML == "Misc") {
                sections.forEach(element => {
                    if (element.id == "misc" || element.id == "masthead") {
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
            document.getElementById('me').scrollIntoView();
        }
        else if (link.innerHTML == "Now") {
            document.getElementById('now').scrollIntoView();
        }
        else if (link.innerHTML == "Blog") {
            document.getElementById('articles').scrollIntoView();
        }
        else if (link.innerHTML == "Book") {
            document.getElementById('book').scrollIntoView();
        }
        else if (link.innerHTML == "Misc") {
            document.getElementById('misc').scrollIntoView();
        }
    });
}