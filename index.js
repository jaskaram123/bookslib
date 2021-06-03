var bodyflow = document.querySelector('body')
var menu = document.querySelector('.menu')
var section = document.querySelector('.allbooks')

menu.addEventListener('click',function () {
    menu.classList.toggle('menuvisible')
    bodyflow.classList.toggle('hide')
})

var bottomline = document.querySelector('.searchbook')
var searchinput = document.querySelector('.searchinput')

searchinput.addEventListener('click', function () {
    bottomline.classList.add('m')
    searchinput.addEventListener('blur', function () {
        bottomline.classList.remove('m')
    })
})

class disp{
    preview(){
        section.innerHTML = ''
        var books = localStorage.getItem('books')
        let arr
        if (books == null) {
          arr = [];
        } else {
          arr = JSON.parse(books);
        }
        if (books == '[]' || books == null) {
            var a = document.createElement('h2')
            var b = document.createElement('a')
            b.innerText = 'Add Book'
            a.innerText = `Let's add new book!`
            a.setAttribute('style', 'text-align:center')
            // b.setAttribute('style', 'display:block;margin: 0 auto')
            b.setAttribute('href','addbook.html')
            b.classList.add('link','fontb','font')

            document.body.insertBefore(a, section)
            document.body.insertBefore(b, section)
        }
        arr.forEach(element => {
          section.innerHTML += `<div class="book">
          <div class="cover transition">
            <img src="Images/icons8-book.svg" alt="" />
          </div>
          <div class="label transition">
            <h3 class="fontb">${element.bookname}</h3>
            <p class="fontb">- ${element.author}</p>
          </div>
          <div class="remove transition" id='${arr.indexOf(element)}' onclick="delet(this.id)">
            <img src="Images/icons8-delete-bin.svg" alt="" />
          </div>
        </div>`
        });
    }
}

let displ = new disp()
displ.preview()

function delet(val) {
    var books = localStorage.getItem('books')
    let arr
    if (books == null) {
      arr = [];
    } else {
      arr = JSON.parse(books);
    }
    arr.splice(val,1)
    localStorage.setItem('books', JSON.stringify(arr))

    displ.preview()
}

document.getElementById('search').addEventListener('click', function () {
  var inputsearch = document.getElementById('searchinput').value
  var bookss = document.getElementsByClassName('book')
  Array.from(bookss).forEach(function (element) {
    let txt = element.querySelector('.book .label h3').innerText
    if (txt.includes(inputsearch)) {
      element.style.display = 'block'
    } else {
      element.style.display = 'none'
    }
    searchinput.value = null
  })
})
document.getElementById('searchinput').addEventListener('keydown', function () {
  var inputsearch = document.getElementById('searchinput').value
  var bookss = document.getElementsByClassName('book')
  Array.from(bookss).forEach(function (element) {
    let txt = element.querySelector('.book .label h3').innerText
    if (txt.includes(inputsearch)) {
      element.style.display = 'block'
    } else {
      element.style.display = 'none'
    }
    if (searchinput.value == '') {
      element.style.display = 'block'
    }
  })
})
