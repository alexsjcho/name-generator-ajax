document.querySelector('#generate-names').addEventListener('submit',loadNames);

    //Execute the function to query the API
    function loadNames(e){
        e.preventDefault();

    //Read the values from the form and create the variables
    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    //Build the URL
    let url = 'http://uninames.com/api/?';
    //Read the gender and append to the url
    if(gender !== ''){
        url += `gender=${gender}&`;
    //Read the amount and append to the url
    if(amount !== ''){
        url += `amount=${amount}&`;
    }

    //Ajax Call
    const xhr = new XMLHttpRequest();


    //Open the connection
    xhr.open('GET',url, true);

    //Execute the function
    xhr.onload = function(){
        if(this.status === 200){
            const names = JSON.parse(this.responseText);

            //Insert into the HTML
            let html = '<h2>Generated Names</h2>';
            html += '<ul name"list">';
            names.forEach(fucntion(name){
                html += `
                    <li> ${name.name} </li>
                `;
            });
            html += '</ul>';

            document.querySelector('#result').innerHTML = html;

        }
    }

    //Send the request
    xhr.send();

}
