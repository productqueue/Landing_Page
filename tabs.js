class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab='${this.data}']`
    );
    console.log(this.itemElement);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => {
      this.select();
    });
  }

  select() {
    const links = document.querySelectorAll('.tabs-link');
    Array.from(links).forEach(link => {
      link.classList.remove('tabs-link-selected');
    });

    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.tabs-item');

    Array.from(items).forEach(element => {
      element.classList.remove('tabs-item-selected');
    });
    this.element.classList.add('tabs-item-selected');
  }
}

let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map(link => new TabLink(link));
links[0].select();

// function changeImage() {
//   var img = document.querySelector('.blurpc.jpg');
//   img.src = images[x];
//   x++;

//   if (x >= images.length) {
//     x = 0;
//   }
//   var timerid = setInterval(changeImage(), 1000);
// }
// var images = [],
//   x = 0;
// images[0] = '/img/woodpc.jpg';
// images[1] = '/img/pcone.jpg';
// images[2] = '/img/deskpc.jpg';
