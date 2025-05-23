document.addEventListener('DOMContentLoaded', function() {


    load_page()


});

function load_page() {

    const BOOK_TITLES_2025 = {
        "Why \"A\" Students Work for \"C\" Students" : "c_students.jpg",
        "Oblivion" : "oblivion.jpg",
        "Deluxe: How Luxury Lost Its Luster" : "deluxe.jpg",
        "Gym Launch Secrets" : "gym_launch.jpg",
        "This Is Strategy" : "this_is_strategy.jpg"
    }

    const BOOK_TITLES_2024 = {
        "Meaningful Work" : "meaningful.jpg",
        "Useful Not True" : "useful.jpg",
        "Hackers & Painters" : "hackers.jpg",
        "The Pale King" : "pale_king.jpg",
        "The Daily Pressfield" : "daily_pressfield.jpg",
        "Building macOS apps with SwiftUI" : "building_macOS.jpg",
        "Seth Godin's Startup School" : "startup_school.jpg",
        "The Bootstrapper's Bible" : "bootstrappers_bible.jpg",
        "Happy" : "happy.jpg",
        "Every Love Story Is a Ghost Story" : "ghost.jpg",
        "The Alchemist" : "alchemist.jpg",
        "The Celebrity CEO" : "celebrity_ceo.jpg"
    }

    const BOOK_TITLES_2023 = {
        "The Authentic Swing" : "swing.jpg",
        "Infinite Jest" : "jest.jpg",
        "Make: Bootstrapper's Handbook" : "make.jpg",
        "Brand Seduction" : "brand.jpg",
        "The Millionaire Fastlane" : "fastlane.jpg",
        "Although Of Course You End Up Becoming Yourself" : "dfw.jpg",
        "Revolution in The Valley" : "revo.jpg",
        "Elon Musk" : "elon.jpg",
        "The Art of Profitability" : "artOfProfit.jpg",
        "You Can Negotiate Anything" : "negotiate.jpg",
        "The Song of Significance" : "significance.jpg",
        "Startup Playbook" : "startup.jpg",
        "The Pmarca Blog Archives" : "pmarca.jpg",
        "Nothing & Everything" : "nothingAndEverything.jpg",
        "The E-Myth Revisited" : "emyth.jpg",
        "The Dip" : "theDip.jpg",
        "The Inevitable" : "inevitable.jpg",
        "When the Heavens Went on Sale" : "heavens.jpg",
        "Models" : "models.jpg",
        "Choose Yourself!" : "chooseYourself.jpg",
        "The Infinite Game" : "game.jpg",
        "Everything Is F*cked" : "everything.jpg",
        "Impromptu" : "impromptu.jpg",
        "Steve Jobs: The Journey Is the Reward" : "steve.jpg",
        "I am a Strange Loop" : "loop.jpg",
        "So Good They Can't Ignore You" : "soGood.jpg",
        "The Contrarian" : "peter.jpg",
        "Never Finished" : "neverFinished.jpg",
        "The Creative Act" : "creative.jpg",
        "Tao Te Ching (Stephen Mitchell)" : "tao.jpg"
    }

    const BOOK_TITLES_2022 = {
        "Govt Cheese" : "govtCheese.jpg",
        "The 4-Hour Workweek" : "fourHourWorkWeek.jpg",
        "Sum" : "sum.jpg",
        "Nobody Wants to Read Your Sh*t" : "nobody.jpg", 
        "Learning SQL" : "sql.jpg",
        "The War of Art" : "art.jpg",
        "The Knowledge" : "knowledge.jpg",
        "Do the Work" : "work.jpg",
        "Turning Pro" : "pro.jpg",
        "Tools Of Titans" : "tools.jpg",
        "The Subtle Art of Not Giving a F*ck" : "theSubtleArt.jpg",
        "The Practice" : "thePractice.jpg",
        "12 More Rules For Life" : "12more.jpeg",
        "Six Easy Pieces" : "sixEasyPieces.jpg",
        "How to Avoid a Climate Disaster" : "climate.jpg",
        "Purple Cow" : "purpleCow.jpeg",
        "Super Founders" : "superFounders.jpg",
        "The Difference Between God and Larry Ellison" : "larry.jpeg",
        "Build" : "build.jpeg",
        "Ai 2041" : "ai2041.jpg",
        "Your Music and People" : "yourMusicAndPeople.jpeg",
        "The Idea Factory" : "IdeaFactory.jpeg",
        "The Consciousness Instinct" : "conciousness.jpg",
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
        "Ignition" : "ignition.jpeg",
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
        "1984" : "1984.jpeg",
        "How To Win At The Sport Of Business" : "mark.jpeg",
        "Teenagers: Preparing for the Real World" : "teenagers.jpg"
    }
            
    console.log("connected");

    for (const [key, value] of Object.entries(BOOK_TITLES_2025)) {
        console.log(key, value, "2025");
        create_book_layout(key, value, "2025");
    }

    for (const [key, value] of Object.entries(BOOK_TITLES_2024)) {
        console.log(key, value, "2024");
        create_book_layout(key, value, "2024");
    }

    for (const [key, value] of Object.entries(BOOK_TITLES_2023)) {
        console.log(key, value, "2023");
        create_book_layout(key, value, "2023");
    }

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
