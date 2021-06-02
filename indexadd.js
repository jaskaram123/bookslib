var allinputs = document.querySelectorAll(".input");
var btn = document.querySelector(".addbooktostr");
var section = document.querySelector('.allbooks')
class addnewbook {
  constructor(bookname, author) {
    this.bookname = bookname, 
    this.author = author
  }
  adding(bookobj) {
    var getting = localStorage.getItem("books");
    var arr;
    if (getting == null) {
      arr = [];
    } else {
      arr = JSON.parse(getting);
    }
    var tryi = 0
    arr.forEach(element => {
      if (element.bookname == bookobj.bookname && element.author == bookobj.author) {
        tryi++
        alert('book already there')
      }
    });
    if (tryi <= 0) {
      arr.push(bookobj)
    }
  localStorage.setItem('books', JSON.stringify(arr))
  }
}

btn.addEventListener("click", function () {
  let newbook = new addnewbook(allinputs[0].value, allinputs[1].value);
  newbook.adding(newbook);
});

document.getElementById('done').addEventListener('click', function () {
  window.location.replace('index.html')
})

document.addEventListener('keydown', function (e) {
  if (e.keyCode == 13) {
    let newbook = new addnewbook(allinputs[0].value, allinputs[1].value);
  newbook.adding(newbook);
    
  }
})