document.addEventListener('DOMContentLoaded', function() {


    load_page()


});

//Shoe Dog, QmXvXFihf7mbkcQzFGS6WDUhGAcDik1TK2vpqUmDDpW5FF, QmTxTYJcuULjCu7yWxYU3482uxkeShwr9Edj5nFStBhnti

function load_page() {

    const BOOK_TITLES_2022 = {
        "Video PreTraining (VPT): Learning to Act by Watching Unlabeled Online Videos" : "minecraft.jpg",
        "OPT: Open Pre-trained Transformer Language Models" : "opt.jpg",
        "LaMDA: Language Models for Dialog Applications" : "lamda.jpg",
        "Attention Is All You Need" : "attention.jpg",
        "(Imagen) Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding" : "imagen.jpg",
        "(DALLE2) Hierarchical Text-Conditional Image Generation with CLIP Latents" : "dalle2.jpg",
        "(GATO) A Generalist Agent" : "gato.jpg",
        "Thinking Fast and Slow in Ai" : "FastSlow.jpg",
    }

    const BOOK_TITLES = {
        "Attribute2Font: Creating Fonts You Want From Attributes" : "font.jpg",
        "(DALLE) Zero-Shot Text-to-Image Generation" : "dalle.jpg",
        "(GPT3) Language Models are Few-Shot Learners" : "gpt3.jpg",
        "(MNIST)" : "mnist.jpg",
    }
            
    console.log("connected");

    for (const [key, value] of Object.entries(BOOK_TITLES_2022)) {
        console.log(key, value, "2022");
        create_book_layout(key, value, "2022");
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
