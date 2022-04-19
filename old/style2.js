document.addEventListener('DOMContentLoaded', function() {


    load_books()


    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn > img')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
        }
    }


});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

////////////////////
// CONTRACT CALL
///////////////////
async function load_books() {

    //Initiate web3 instance
    web3 = new Web3("https://rinkeby.infura.io/v3/7ec28e58b24e4996a5d49b71e781a3b4");//http://localhost:7545");//

    const contract = create_contract();

    var all_books = await contract.methods._readAll().call();

    for (let x=all_books.length - 1; x>=0; x--) {

        if (all_books[x][0] != "") {
            console.log(all_books[x][0], all_books[x][1], all_books[x][2], all_books[x][3])
            preloadBooks(all_books[x][0], all_books[x][1], all_books[x][2], all_books[x][3])
        };
    }
}

/*///////////////////
/// Creating the Contract
//////////////////////*/
function create_contract() {
    //Connect to the contract
    const abi = [{"inputs":[{"internalType":"string","name":"_title","type":"string"},{"internalType":"string","name":"_img","type":"string"},{"internalType":"string","name":"_text","type":"string"},{"internalType":"string","name":"_date","type":"string"}],"name":"_createBook","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_deleteBook","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_readAll","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"text","type":"string"},{"internalType":"string","name":"date","type":"string"}],"internalType":"struct bookStorage.Book[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"books","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"text","type":"string"},{"internalType":"string","name":"date","type":"string"}],"stateMutability":"view","type":"function"}]
    const address = '0xc36ecA308b6b5C0e095460ea4303Ec05E8cB3401'//0x8B4BC70F423fBB9c93324B9a0c4AA1FA1a50A2d8'//'//
    const contract = new web3.eth.Contract(abi, address)
    return contract;
}


/*///////////////////
/// Creating the Book Element
///////////////////*/

function preloadBooks(book_title, book_img, book_text, book_date) {
    var col = document.createElement("div");
    col.setAttribute("style", "display:none;")
    var link1 = document.createElement("a");
    link1.setAttribute("href", `https://gateway.pinata.cloud/ipfs/${book_text}`);
    var img = document.createElement("img");
    img.setAttribute("src", `https://ipfs.io/ipfs/${book_img}`);
    var link2 = document.createElement('a');
    link2.setAttribute("href", `https://gateway.pinata.cloud/ipfs/${book_text}`);

    document.querySelector("body").appendChild(col);
    col.appendChild(link1);
    col.appendChild(img);
    col.appendChild(link2)

 }
