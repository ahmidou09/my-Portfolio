const nav = document.querySelector('.nav');
const toggelBtn = document.querySelector('.toggel-btn');
const navItem = document.querySelectorAll('.nav-item');
const menuIcon = document.querySelector('.menu-icon');
const overly = document.querySelector('.overly');
const closWindow = document.querySelector('.clos-window');
const detail = document.querySelector('.detail');
const seeProject = document.querySelectorAll('.see-project');
const detailContainer = document.querySelector('.detail-container');

const data = [{
  card: 1,
  title: 'Tonic',
  items: ['canopy', 'Back End Dev', '2015'],
  image: './img/Snapshoot-Portfolio-popup.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  tags: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
},
{
  card: 2,
  title: 'Multi-Post Stories',
  items: ['Facebook', 'Back End Dev', '2014'],
  image: './img/Snapshoot-Portfolio-popup.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  tags: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
},
{
  card: 3,
  title: 'Facebook 360',
  items: ['Facebook', 'Back End Dev', '2012'],
  image: './img/Snapshoot-Portfolio-popup.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  tags: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
},
{
  card: 4,
  title: 'Uber Navigation',
  items: ['Facebook', 'Back End Dev', '2011'],
  image: './img/Snapshoot-Portfolio-popup.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  tags: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
}];

toggelBtn.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  overly.classList.toggle('nav-active');

  if (nav.classList.contains('nav-active')) {
    menuIcon.src = './img/icon/close-icon.svg';
  }

  if (!nav.classList.contains('nav-active')) {
    menuIcon.src = './img/icon/menu.svg';
  }
});

navItem.forEach((btn) => {
  btn.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    overly.classList.remove('nav-active');

    if (nav.classList.contains('nav-active')) {
      menuIcon.src = './img/icon/close-icon.svg';
    }

    if (!nav.classList.contains('nav-active')) {
      menuIcon.src = './img/icon/menu.svg';
    }
  });
});

seeProject.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const i = e.target.dataset.card - 1;
    const html = `<h3 class="heading-3">${data[i].title}</h3>
        <ul class="items items-popup">
          <li class="active">${data[i].items[0]}</li>
          <li><span></span></li>
          <li>${data[i].items[1]}</li>
          <li><span></span></li>
          <li>${data[i].items[2]}</li>
        </ul>

        <img
          src=${data[i].image}
          alt="Snapshoot for project"
          class="popup-img"
        />
        <div class="desciption-window">
          <div class="text-window">
            <p class="para paragraph-1">
             ${data[i].description}
            </p>

            <p class="para">
             ${data[i].description}
            </p>
          </div>

          <div>
            <ul class="tags tags-popup">
              <li>${data[i].tags[0]}</li>
              <li>${data[i].tags[1]}</li>
              <li>${data[i].tags[2]}</li>
              <li>${data[i].tags[3]}</li>
              <li>${data[i].tags[4]}</li>
            </ul>

            <button type="button" class="btn-popup" tabindex="0">
              <a href="#">
                <span> See live</span>
                <img src="./img/icon/export.svg" alt="github icon" tabindex="0"
              /></a>
            </button>

            <button type="button" class="btn-popup" tabindex="0">
              <a href="#">
                <span>See source</span>
                <img
                  src="./img/icon/github-popup.svg"
                  alt="github icon"
                  tabindex="0"
              /></a>
            </button>
          </div>
        </div>
  `;

    detailContainer.insertAdjacentHTML('afterbegin', html);
    detail.classList.add('display-block');
    overly.classList.add('display-block');
  });
});

closWindow.addEventListener('click', () => {
  detail.classList.remove('display-block');
  overly.classList.remove('display-block');
  detailContainer.innerHTML = '';
});
