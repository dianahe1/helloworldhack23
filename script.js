 // Requiring fs module in which
    
// const element = document.getElementById("submitBtn");
// element.addEventListener("click", signUp);

// function signUp(){

//     completeMessage.innerHTML = "Thank you for submitting this form!";
//     document.getElementById("completeMessage").style.color = 'black';
// }

window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        completeMessage.innerHTML = "Thank you for submitting this form!";
      })
    });
});



    
// This variable stores all the data.
//     let data = '\r Name: ' + fname + lname + email;
    
//     // Convert the text to BLOB.
//     const textToBLOB = new Blob([data], { type: 'text/plain' });
//     const sFileName = 'formData.txt';	   // The file to save the data.

//     let newLink = document.createElement("a");
//     newLink.download = sFileName;

//     if (window.webkitURL != null) {
//         newLink.href = window.webkitURL.createObjectURL(textToBLOB);
//     }
//     else {
//         newLink.href = window.URL.createObjectURL(textToBLOB);
//         newLink.style.display = "none";
//         document.body.appendChild(newLink);
//     }

//     newLink.click(); 

// }
    
// writeFile function is defined.