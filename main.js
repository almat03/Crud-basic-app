// target element of the dom
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let data = {};

// eventlistener to see if someone click
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

// function that see if input is blank (=> error) or writed ( OK --> accessData() function)
let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank!";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};

// bring data in the text area than create the post
let acceptData = () => {
  data["text"] = input.value;
  //console.log(data);
  createPost();
};

//create a template literal with the html than reset the input
let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
      <span class="options">
        <i onClick='editPost(this)' class="fas fa-edit"></i>
        <i onClick='deletePost(this)' class="fas fa-trash-alt"></i>
      </span>
  </div>
  `;
  input.value = "";
};
// delete the post ( the parent of the parent of the this)
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
