document.addEventListener("DOMContentLoaded", function() {

    let button = document.createElement('button');
    let buttonText = document.createTextNode("Sing!");
    button.appendChild(buttonText);
    document.body.appendChild(button); 

    button.addEventListener('click', function() {
        let friends = ['Adrian', 'Blake', 'Cole', 'Mary', 'Josh']; 

        for (var i = 0; i < friends.length; i++) {
            let friendsDiv = document.createElement('div');
            friendsDiv.className = 'friends'; 
            let h3 = document.createElement('h3');
            let h3Text = document.createTextNode(friends[i]);
            h3.appendChild(h3Text);
            document.body.appendChild(friendsDiv); 
            let lines = document.getElementsByClassName('friends');
            lines[i].appendChild(h3); 

            for (let number = 99; number > 0; number--) {
                let song =document.createElement('p');

                if(number !== 0) {
                    song.innerText = (friends[i] + ": " + number + " Lines of code in the file, " + number + " lines of code; "
                    + friends[i] + " strikes one out, clears it all out, " + (number - 1) + " more lines of code in the file");
                }
                else {
                    song.innerText = (friends[i] + ": " + number + " Line of code in the file, " + number + " line of code; "
                    + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
                };
                lines[i].appendChild(song);
            }
        }
    })
})