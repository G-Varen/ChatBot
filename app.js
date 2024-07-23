let titleHead = document.querySelector("h2");
let chatBody = document.querySelector(".chatBody");
let chatInput = document.querySelector(".chatInput");
let ipt = document.querySelector("input");
let btn = document.querySelector("button");
let form = document.querySelector("form");




let botMsg = ["Bonjour", "Je vais bien et toi?", "Alors, que puis-je faire pour toi aujourd'hui ?", "D'accord"];
// let userMsg = ["Bonjour", "Comment vas tu ?", "Juste savoir que tous se passe bien", "merci"];

// ----------------------------------- EVENTS ---------------------------------

ipt.addEventListener('focus', () => {
    writing(false);
})

ipt.addEventListener('focusout', () => {
    removeWriting(false);
})

ipt.addEventListener('input', () => {
    ipt.value.trim();
    if (ipt.value.trim().length != 0) {
        btn.classList.remove('disabled');
    } else {
        btn.classList.add('disabled');
    }
})


// ----------------------------------- FUNCTIONS ---------------------------------

const opened = () => {
    // console.log(chatBody.style.display);
    // console.log(chatInput);
    titleHead.parentElement.classList.toggle("chatBoxHeight");
    if (chatBody.style.display == "block") {
        chatBody.style.display = "none";
        chatInput.style.display = "none";
    } else {
        chatBody.style.display = "block";
        chatInput.style.display = "block";
    }
};


const msgSend = (event) => {
    event.preventDefault();

    let botMsgIndex = document.querySelectorAll('.botMsgIndex');

    chatBody.innerHTML += `<div class="d-flex justify-content-end">
    <p class="rounded bg-primary text-white px-3 py-2 msgBox">
    ${ipt.value} </p> </div>`;

    removeWriting(false);
    writing(true);

    setTimeout(() => {
        console.log('Temps ecoulé', new Date());
        removeWriting(true);
        chatBody.innerHTML += `<p class=" botMsgIndex rounded bg-white 
        px-3 py-2 msgBox">${botMsg[botMsgIndex.length]} </p> `;
    }, 1000)

    ipt.value = '';
}

const writing = (writer) => {
    if (writer) {
        chatBody.innerHTML += `<img class="bg-white rounded-5 mb-2"
        src="images/dote.gif" alt="" style="width: 70px; height: 40px; object-fit: cover;" id="Writing">`;
    } else {
        chatBody.innerHTML += `<div class="d-flex justify-content-end">
    <img class="bg-primary rounded-5 mb-2" src="images/dote.gif"
    alt="" style="width: 70px; height: 40px; object-fit: cover;" id="Writing">
    </div>`;
    }
}

const removeWriting = (writer) => {

    let writingElement = document.getElementById('Writing');
    
    if (writingElement != null) {
        console.log(writingElement);

        if (writer) {
            console.log(writingElement);
            chatBody.removeChild(writingElement);
        } else {
            console.log(writingElement);
            chatBody.removeChild(writingElement.parentNode);
        }
    }

}