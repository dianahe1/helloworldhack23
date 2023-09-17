 // Requiring fs module in which
    
const element = document.getElementById("submitBtn");
element.addEventListener("click", signUp);

function signUp(){
    var fname = document.getElementById("fname").value;
    console.log(fname); 
    var lname = document.getElementById("lname").value;
    console.log(lname); 


    
// This variable stores all the data.
    let data = '\r Name: ' + fname + lname;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 

}
    
// writeFile function is defined.

