// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const roles = [
      { name: 'Developer', color: '#ff6347', fontSize: '60px' },
      { name: 'Web Designer', color: '#007bff', fontSize: '60px' },
      { name: 'Investor', color: '#ffbb33', fontSize: '60px' },
      { name: 'Trader', color: '#28a745', fontSize: '60px' }
    ];
  
    const typedText = document.querySelector('.typed-text');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function typeRole() {
      const currentRole = roles[roleIndex];
      const typingSpeed = 100; // Adjust typing speed (milliseconds)
  
      if (!isDeleting && charIndex < currentRole.name.length) {
        typedText.textContent += currentRole.name.charAt(charIndex);
        typedText.style.color = currentRole.color; // Change text color
        typedText.style.fontSize = currentRole.fontSize; // Change text font size
        charIndex++;
        setTimeout(typeRole, typingSpeed);
      } else if (isDeleting && charIndex >= 0) {
        typedText.textContent = currentRole.name.substring(0, charIndex);
        typedText.style.color = currentRole.color; // Change text color
        typedText.style.fontSize = currentRole.fontSize; // Change text font size
        charIndex--;
        setTimeout(typeRole, typingSpeed / 2); // Adjust deleting speed
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          roleIndex++;
          if (roleIndex >= roles.length) {
            roleIndex = 0; // Reset to first role
          }
        }
        setTimeout(typeRole, 1000); // Delay before starting the next role
      }
    }
  
    typeRole(); // Start the auto-typing effect
  });




  const ratings = document.querySelectorAll('.rating')
  const ratingsContainer = document.querySelector('.ratings-container')
  const sendBtn = document.querySelector('#send')
  const panel = document.querySelector('#panel')
  let selectedRating = 'Satisfied'
  
  ratingsContainer.addEventListener('click', (e) => {
      if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
          removeActive()
          e.target.parentNode.classList.add('active')
          selectedRating = e.target.nextElementSibling.innerHTML
      } else if(
          e.target.parentNode.classList.contains('rating') &&
          e.target.previousSibling &&
          e.target.previousElementSibling.nodeName === 'IMG'
      ) {
          removeActive()
          e.target.parentNode.classList.add('active')
          selectedRating = e.target.innerHTML
      }
  
  })
  
  sendBtn.addEventListener('click', (e) => {
      panel.innerHTML = `
          <i class="fas fa-heart"></i>
          <strong>Thank You!</strong>
          <br>
          <strong>Feedback: ${selectedRating}</strong>
          <p>We'll use your feedback to improve our customer support</p>
      `
  })
  
  function removeActive() {
      for(let i = 0; i < ratings.length; i++) {
          ratings[i].classList.remove('active')
      }
  }


//subcribed//

document.addEventListener('DOMContentLoaded', function () {
    const userEmailNav = document.getElementById('userEmailNav');
    const userEmailLink = document.getElementById('userEmailLink');

    // Check if user has subscribed (this is just an example, replace with your own logic)
    const hasSubscribed = localStorage.getItem('subscribed');

    if (hasSubscribed) {
        // User has already subscribed, hide the newsletter section
        document.getElementById('newsletterSection').style.display = 'none';

        // Get and display the user's email in the navigation bar
        const userEmail = localStorage.getItem('userEmail');
        userEmailNav.style.display = 'block';
        userEmailLink.textContent = userEmail;
        userEmailLink.href = '#'; // Replace '#' with actual user profile link if available
    } else {
        // User has not subscribed, show the newsletter section
        document.getElementById('newsletterSection').style.display = 'block';

        // Add event listener for form submission
        const newsletterForm = document.getElementById('newsletterForm');
        newsletterForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission
            // Perform your form submission logic here (e.g., validate inputs, submit data)

            // For this example, just set a flag indicating the user has subscribed
            localStorage.setItem('subscribed', true);

            // Get and store the user's email
            const userEmailInput = document.querySelector('input[name="name"]');
            const userEmail = userEmailInput.value.trim();
            localStorage.setItem('userEmail', userEmail);

            alert('Thank you for subscribing!');
            document.getElementById('newsletterSection').style.display = 'none'; // Hide the section after subscribing

            // Update navigation bar with user's email
            userEmailNav.style.display = 'block';
            userEmailLink.textContent = userEmail;
            userEmailLink.href = '#'; // Replace '#' with actual user profile link if available
        });
    }
});
