let textarea = document.querySelector('#textarea');
let containerPilihan = document.getElementById('container-pilihan');
let elemenTag = document.querySelectorAll('.tags');
let btn = document.getElementById('btn');
let int = 100;
//'console.log(btn);

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
})


btn.addEventListener('click', () => {
  elemenTag.forEach((tag) => {
    tag.classList.remove('select');
  })
  pilihanAcak();
})

function pilihanAcak() {
  //buat Animasi
  if (containerPilihan.childElementCount > 1) {
    let animasiTag = setInterval(selectTag, int);
    setTimeout(() => {
      clearInterval(animasiTag);
      let random = Math.floor(Math.random() * containerPilihan.childElementCount)
      containerPilihan.children[random].classList.add('select');

    }, 4000)
  } else {
    alert('Masukan Pilihan Anda!');
  }

}

function selectTag(arg) {

  let random = Math.floor(Math.random() * containerPilihan.childElementCount)
  containerPilihan.children[random].classList.add('select');

  setTimeout(() => {
    containerPilihan.children[random].classList.remove('select');

  }, int);
}

function createTags(input) {
  let tags = input.split(",").filter((tag) => { return tag.trim() !== "" }).map((tag) => { return tag.trim() });

  containerPilihan.innerHTML = '';

  tags.forEach((tag) => {
    let div = document.createElement('DIV');
    div.setAttribute('class', 'tags')
    div.innerText = tag;
    containerPilihan.appendChild(div);
  });

}