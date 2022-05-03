document.addEventListener('DOMContentLoaded', function() {


    load_page()


});

//Shoe Dog, QmXvXFihf7mbkcQzFGS6WDUhGAcDik1TK2vpqUmDDpW5FF, QmTxTYJcuULjCu7yWxYU3482uxkeShwr9Edj5nFStBhnti

function load_page() {

    const BOOK_TITLES_2022 = {
        "Never Eat Alone": "neverEatAlone.jpeg",
        "The Courage To Be Disliked" : "theCourageToBeDisliked.jpeg",
        "Hell Yeah or No: What's Worth Doing" : "hellYeahOrNo.jpeg",
        "River Out of Eden: A Darwinian View of Life" : "riverOutOfEden.jpeg",
        "You Don't Know JS Yet: Get Started" : "youDon'tKnowJsYet.jpeg",
        "A Thousand Brains" : "aThousandBrains.jpeg",
        "Will" : "will.jpeg",
        "hello, startup" : "helloStartup.jpeg",
        "Anything You Want" : "anythingYouWant.jpeg",
        "The Founders" : "theFounders.jpeg",
        "Hard Drive" : "hardDrive.jpeg",
        "How To Defi: Advanced" : "howToDefi.jpeg"
    }

    const BOOK_TITLES_2021 = {
        "Hatching Twitter" : "hatchingTwitter.jpeg",
        "Why Greatness Can't Be Planned" : "whyGreatnessCantBePlanned.jpeg",
        "The Catalyst Leader" : "theCatalystLeader.jpeg",
        "The Social Animal" : "theSocialAnimal.jpeg",
        "How To Live" : "howToLive.jpeg",
        "“Surely You’re Joking, Mr. Feynman!”: Adventures of a Curious Character" : "feynman.jpeg",
        "Play Nice But Win" : "playNiceButWin.jpeg",
        "My Life at Apple" : "myLifeAtApple.jpeg",
        "Power Play" : "powerPlay.jpeg",
        "Benjamin Franklin: An American Life" : "benFrank.jpeg",
        "Genius Makers" : "geniusMakers.jpeg",
        "Invent and Wander" : "inventAndWander.jpeg",
        "12 Rules for Life" : "rules.jpeg",
        "Liftoff" : "liftoff.jpeg",
        "The Future of the Mind" : "futureMind.jpeg",
    }

    const BOOK_TITLES = {
        "iWoz: Computer Geek to Cult Icon" : "iWoz.jpeg",
        "The Bite in the Apple: A Memoir of My Life with Steve Jobs" : "theBiteInTheApple.jpeg",
        "How to Create a Mind" : "howToCreateAMind.jpeg",
        "Zero To One" : "zeroToOne.jpeg",
        "Deep Learning For Dummies" : "DlForDummies.jpeg",
        "The History of Money" : "theHistoryOfMoney.jpeg",
        "Can't Hurt Me" : "cantHurtMe.jpeg",
        "The Hitchhiker's Guide to the Galaxy" : "hitchhikersGuide.jpeg",
        "Shoe Dog" : "shoeDog.jpeg",
        "The Brain Book: Development, Function, Disorder, Health" : "brainBook.jpeg",
        "Losing My Virginity: How I Survived, Had Fun, and Made a Fortune Doing Business My Way" : "virgin.jpeg",
        "Sapiens" : "sapiens.jpeg",
        "The Everything Store" : "theEverythingStore.jpeg",
        "The Lean Startup" : "theLeanStartup.jpeg",
        "The Code Breaker" : "theCodeBreaker.jpeg",
        "Greenlights" : "greenlights.jpeg",
        "Create the Future + the Innovation Handbook" : "future.jpeg",
        "Way of the Wolf" : "wayOfTheWolf.jpeg",
        "The Wolf of Wall Street" : "wolfOfWallstreet.jpeg",
        "Arnold: The Education of a Bodybuilder" : "arnold.jpeg",
        "Blockchain Revolution" : "blochchainRevolution.jpeg",
        "Bill Gates Speaks" : "billGatesSpeaks.jpeg",
        "E=MC2: Simple Physics" : "emc2.jpeg",
        "Tesla: Inventor of the Modern" : "tesla.jpeg",
        "My Einstein: Essays by Twenty-Four of the World's Leading Thinkers on the Man, His Work, and His Legacy" : "myEinstien.jpeg",
        "Midas Touch" : "midasTouch.jpeg",
        "Real Estate Investing 101" : "realEstateInvesting.jpeg",
        "How to win Friends & Influence People" : "winFriends.jpeg",
        "The Lessons of History" : "lessonsOfHistory.jpeg",
        "Think and Grow Rich" : "thinkAndGrowRich.jpeg",
        "Creative Selection: Inside Apple's Design Process During the Golden Age of Steve Jobs" : "creativeSelection.jpeg",
        "The Math Book: From Pythagoras to the 57th Dimension, 250 Milestones in the History of Mathematics" : "mathBook.jpeg",
        "Artificial Intelligence: An Illustrated History" : "ai.jpeg",
        "Total Recall" : "totalRecall.jpeg",
        "The Innovators" : "theInnovators.jpeg",
        "The Future Is Faster Than You Think" : "theFuture.jpeg",
        "Trump: The Art of the Deal" : "trump.jpeg",
        "Electronics All-in-One For Dummies" : "electronics.jpeg",
        "The Intelligent Investor" : "investor.jpeg",
        "The Brain That Changes Itself" : "brainChanges.jpeg",
        "Steve Jobs" : "steveJobs.jpeg",
        "The Boz" : "theBoz.jpeg",
        "Brave New World" : "braveNewWorld.jpeg",
        "Elon Musk And The Quest For A Fantastic Future" : "elon.jpeg",
        "Rich Dad Poor Dad" : "richDadPoorDad.jpeg",
        " 1984" : "1984.jpeg",
        "How To Win At The Sport Of Business" : "mark.jpeg",
    }
            
    console.log("connected");

    for (const [key, value] of Object.entries(BOOK_TITLES_2022)) {
        console.log(key, value, "2022");
        create_book_layout(key, value, "2022");
    }

    for (const [key, value] of Object.entries(BOOK_TITLES_2021)) {
        console.log(key, value, "2021");
        create_book_layout(key, value, "2021");
    }

    for (const [key, value] of Object.entries(BOOK_TITLES)) {
        console.log(key, value, "unknown");
        create_book_layout(key, value, "unknown");
    }
}

/*///////////////////
/// Creating the Book Element
///////////////////*/

function create_book_layout(book_title, book_img, book_date) {
    //Create the row
    //var row = document.createElement("div");
    //row.setAttribute("class", "row");
    //Create the col
    var col = document.createElement("div");
    col.setAttribute("class", "col-lg-3 col-md-3 col-sm-4 col-xs-5 col-5 mx-sm-0 mx-auto mt-auto");
    //Create the thumbnail
    var thumbnail= document.createElement("div");
    thumbnail.setAttribute("class", "thumbnail text-center");
    thumbnail.setAttribute("style", "border:none;");
    //Create the img_group
    var img_group = document.createElement("div");
    img_group.setAttribute("class", "img-group");
    //Create the download
    var download = document.createElement("span");
    download.setAttribute("class", "p-2 position-absolute start-100 translate-middle badge rounded-pill bg-dark");
    //Create the download icon
    var icon = document.createElement("i");
    icon.setAttribute("class", "bi bi-download");
    //Create the img
    var img = document.createElement("img");
    img.setAttribute("class", "img-fluid");
    img.setAttribute("src", `books/${book_img}`);
    //Create the title for book
    var title = document.createElement("div");
    title.setAttribute("style", "height:60px;overflow: hidden; text-overflow: ellipsis;");
    //Create the h5
    var h5 = document.createElement("h5");
    h5.innerHTML = book_title;



    //Appending everything in the right order
    document.querySelector(`#year${book_date}`).appendChild(col);

    col.appendChild(thumbnail);
    thumbnail.appendChild(img_group);
    img_group.appendChild(img);
    
    thumbnail.appendChild(title);
    title.appendChild(h5);
    h5.innerHTML= book_title;
    
 }
