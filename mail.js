const firebaseConfig = {
  apiKey: "AIzaSyAgAg7DIBm6a5sEJzZAAmUEEbyc7wcBYsY",
  authDomain: "contactform-2bb89.firebaseapp.com",
  databaseURL: "https://contactform-2bb89-default-rtdb.firebaseio.com",
  projectId: "contactform-2bb89",
  storageBucket: "contactform-2bb89.appspot.com",
  messagingSenderId: "538495884684",
  appId: "1:538495884684:web:33cf59f6c6d83c50d5caa9"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
e.preventDefault();

var name = getElementVal("name");
var emailid = getElementVal("emailid");
var msgContent = getElementVal("msgContent");

saveMessages(name, emailid, msgContent);

//   enable alert
document.querySelector(".alert").style.display = "block";

//   remove the alert
setTimeout(() => {
  document.querySelector(".alert").style.display = "none";
}, 3000);

//   reset the form
document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
var newContactForm = contactFormDB.push();

newContactForm.set({
  name: name,
  emailid: emailid,
  msgContent: msgContent,
});
};

const getElementVal = (id) => {
return document.getElementById(id).value;
};
          

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
