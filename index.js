document.addEventListener('DOMContentLoaded', () => {
    const emojiBox = document.querySelectorAll('.emoji');
    let selectedBox = null; 

    const handleMouseOver = (event) => {
        if (event.target !== selectedBox) {
            event.target.style.backgroundColor = 'lightcoral';
        }
    };

    const handleMouseOut = (event) => {
        if (event.target !== selectedBox) {
            event.target.style.backgroundColor = '';
        }
    };

    const handleClick = (event) => {
        if (selectedBox) {
            selectedBox.style.backgroundColor = ''; 
            selectedBox.addEventListener('mouseover', handleMouseOver);
            selectedBox.addEventListener('mouseout', handleMouseOut);
        }
        
        selectedBox = event.target;
        selectedBox.style.backgroundColor = 'lightcoral'; 
        selectedBox.removeEventListener('mouseover', handleMouseOver);
        selectedBox.removeEventListener('mouseout', handleMouseOut);
    };

    const handleSendFeedback = () => {
        if (selectedBox) {
            emojiBox.forEach((val) => {
                val.style.display = 'none';
            });

            let sendFeedback = document.querySelector('.button');
            sendFeedback.style.display = 'none';

            let finalmsg = document.querySelector('.FeedbackMsg');
            let addFeedback = document.querySelector('#selectBox');
            addFeedback.innerHTML = selectedBox.textContent;
            console.log(addFeedback.innerHTML);
            

            finalmsg.style.display = 'flex';
            finalmsg.style.flexDirection = 'column'; 
            finalmsg.style.justifyContent = 'center'; 
            finalmsg.style.alignItems = 'center';
            finalmsg.style.position = 'absolute';
            finalmsg.style.top = '50%';
            finalmsg.style.left = '50%';
            finalmsg.style.transform = 'translate(-50%, -50%)';
        }
    };

    
    emojiBox.forEach((box) => {
        box.addEventListener('mouseover', handleMouseOver);
        box.addEventListener('mouseout', handleMouseOut);
        box.addEventListener('click', handleClick);
    });

    
    let sendFeedback = document.querySelector('.button');
    sendFeedback.addEventListener('click', handleSendFeedback);
});
