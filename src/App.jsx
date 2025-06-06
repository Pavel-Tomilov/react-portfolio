import './css/normalize.css'
import "./App.css"
import './css/style.css'


function App() {

  return (
      <div className='App'>
       


<label className="switch">
  <input className="switch__input" type="checkbox" role="switch" />
  <svg className="switch__icon switch__icon--light" viewBox="0 0 12 12" width="12px" height="12px" aria-hidden="true">
    <g fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round">
      <circle cx="6" cy="6" r="2" />
      <g strokeDasharray="1.5 1.5">
        <polyline points="6 10,6 11.5" transform="rotate(0,6,6)" />
        <polyline points="6 10,6 11.5" transform="rotate(45,6,6)" />
        <polyline points="6 10,6 11.5" transform="rotate(90,6,6)" />
        <polyline points="6 10,6 11.5" transform="rotate(135,6,6)" />
        <polyline points="6 10,6 11.5" transform="rotate(180,6,6)" />
        <polyline points="6 10,6 11.5" transform="rotate(225,6,6)" />
        <polyline points="6 10,6 11.5" transform="rotate(270,6,6)" />
        <polyline points="6 10,6 11.5" transform="rotate(315,6,6)" />
      </g>
    </g>
  </svg>
  <svg className="switch__icon switch__icon--dark" viewBox="0 0 12 12" width="12px" height="12px" aria-hidden="true">
    <g fill="none" stroke="#fff" strokeWidth="1" strokeLinejoin="round" transform="rotate(-45,6,6)">
      <path
        d="m9,10c-2.209,0-4-1.791-4-4s1.791-4,4-4c.304,0,.598.041.883.105-.995-.992-2.367-1.605-3.883-1.605C2.962.5.5,2.962.5,6s2.462,5.5,5.5,5.5c1.516,0,2.888-.613,3.883-1.605-.285.064-.578.105-.883.105Z" />
    </g>
  </svg>
  <span className="switch__sr">Dark Mode</span>
</label>
<header>
  <div className="container header__container">
    <div className="nav__logo">Frontend Developer</div>
     {/* Бургер-иконка  */}
    <div className="burger-container">
      <div className="burger-menu">
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
    </div>

    {/* <!-- Затемнение фона --> */}
    <div className="overlay"></div>

    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><a className="nav__link link-reset" href="#about">Обо мне</a></li>
        <li className="nav__item"><a className="nav__link link-reset" href="#projects">Проекты</a></li>
        <li className="nav__item"><a className="nav__link link-reset" href="#skills">Ключевые навыки</a></li>
        <li className="nav__item"><a className="nav__link link-reset" href="#contact">Контакты</a></li>
      </ul>
    </nav>
  </div>
</header>
<section id="about">
  <div className="container">
    <h2>Обо мне</h2>
    <div className="about__container">
      <p className="about__name">Привет!</p>
      <p className="about__name">Меня зовут Павел!</p>
      <p className="about__spec">Я Frontend-разработчик, который превращает макеты в быстрые, удобные и красивые цифровые продукты. Мой код — это не просто строчки в редакторе, а логика, доступность и внимание к деталям.</p>
      <p className="about__spec">Использую BEM для CSS, TypeScript для надежности, React + Redux для сложных SPA.</p>
       <p className="about__spec"> Мои интерфейсы работают в любом браузере (кроссбраузерность) и на любом устройстве (адаптивность).</p>
       <p className="about__spec"> Работал с SaaS-платформами и знаю, как сделать интерфейс не просто "красивым", а решающим задачи бизнеса.</p>
       <p className="about__spec"> Освоил Node.js для понимания бэкенда, Babel/Less для оптимизации сборки.</p>
<p className="about__spec">Слежу за трендами, но выбираю технологии осознанно.</p>
      
      {/* <!-- <p className="about__descr">Хотите обсудить проект?</p>
      <button className="btn-reset about__button" id="btn">Напишите мне!</button> -->
      <!-- Модальное окно (изначально скрыто) --> */}

      {/* <!-- <div className="modal" id="modal">

        <div className="modal__content">
          <span className="modal__close">&times;</span>
          <form className="form__body" id="form">
            <p className="form__title">Можете задать ваш вопрос</p>
            <div className="input-group">
              <input type="text" className="input-field _req _email" id="name" placeholder=" ">
              <label for="name" className="input-label required-field">Имя</label>
              <div id="nameError" className="error"></div>
            </div>
            <div className="input-group">
              <input className="input-field _req _email" id="email" placeholder=" ">
              <label for="email" className="input-label required-field">Email</label>
              <div id="emailError" className="error"></div>
            </div>
            <div className="input-group">
              <textarea className="input-field required-field" name="text" id="message" type="text"
                placeholder=" "></textarea>
              <label for="message" className="input-label">Ваш вопрос</label>
              <div id="messageError" className="error"></div>
            </div>
            <button className="btn-reset button" name="submit" type="submit">Отправить</button>
            <p className="form_notice">Ваши данные конфиденциальны</p>
          </form>
          <div className="loading" id="loading">
            <div className="loader"></div>
            <div className="loading-text">Отправка данных...</div>
            <div className="success-message">
              ✅<br>
              <p className="success-text">Сообщение успешно отправлено!</p>
              <p className="success-text">Я свяжусь с вами в ближайшее время.</p>
            </div>
          </div>
        </div>
      </div> --> */}

    </div>
  </div>
</section>

<section id="projects" className="projects">
  <div className="container">
    <h2 className="projects__title">Проекты</h2>
    <div className="container__card">
      <article>
        <a className="link-reset" target="_blank" href="https://pavel-tomilov.github.io/vk-marusia/">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="./images/marusia.jpg" alt="VK Маруся" className="card__icon" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p className="content__descr">Разработал онлайн-платформу «VK Маруся», которая позволяет пользователям
                  находить и оценивать фильмы</p>
                <h3 className="card-title">«VK Маруся»</h3>
              </div>
            </div>
          </div>
        </a>
      </article>
      <article>
        <a className="link-reset" target="_blank" href="https://pavel-tomilov.github.io/irvas/">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="./images/irvas.jpg" alt="Ирвас окна" className="card__icon" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p className="content__descr">
                  Написал сайт используя bootstrap, css-gulp, jquery, нативный JS
                </p>
                <h3 className="card-title">«ИРВАС»</h3>
              </div>
            </div>
          </div>
        </a>
      </article>
      <article>
        <a className="link-reset" target="_blank" href="https://pavel-tomilov.github.io/table-student/">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="./images/table-student.jpg" alt="Blanchard" className="card__icon" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p className="content__descr">Создал панель управления студентами на чистом JS</p>
                <h3 className="card-title">«Student table»</h3>
              </div>
            </div>
          </div>
        </a>
      </article>
      <article>
        <a className="link-reset" target="_blank" href="https://pavel-tomilov.github.io/high-pass/">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img className="card__icon" src="./images/high-pass.jpg" alt="HIGH PASS" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p className="content__descr">Разработал адаптивный сайт используя gulp-сборку, препроцессор SASS и Grid.
                </p>
                <h3 className="card-title">«HIGH PASS»</h3>
              </div>
            </div>
          </div>
        </a>
      </article>
      <article>
        <a className="link-reset" target="_blank" href="https://pavel-tomilov.github.io/final-weblayout/">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="./images/blanchard.jpg" alt="Blanchard" className="card__icon" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p className="content__descr">Разработал адаптивный сайт для художественной галереи с
                  использованием HTML, CSS.</p>
                <h3 className="card-title">«Blanchard»</h3>
              </div>
            </div>
          </div>
        </a>
      </article>
      <article>
        <a className="link-reset" target="_blank" href="https://pavel-tomilov.github.io/skillbox/">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="./images/skillbox.jpg" alt="Skillbox" className="card__icon" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p className="content__descr">Создал одностраничный сайт использую css-grid.</p>
                <h3 className="card-title">«Skillbox»</h3>
              </div>
            </div>
          </div>
        </a>
      </article>
    
      {/* <!-- <article>
        <a className="link-reset" target="_blank" href="https://pavel-tomilov.github.io/evklid/">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img className="card__icon" src="./images/evklid.jpg" alt="EVKLID" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p className="content__descr">Создал адаптивный, кроссбраузерный сайт, с возможностью пользоваться с
                  клавиатуры и с помощью скринридера .</p>
                <h3 className="card-title">«EVKLID»</h3>
              </div>
            </div>
          </div>
        </a>
      </article> --> */}
    </div>
  </div>
</section>
<section id="skills">
  <h2>Ключевые навыки</h2>
  <div className="container skills__container">
    <ul className="list-reset list__skills">
      <li>&bull; HTML5&nbsp;&mdash; Семантическая разметка, структура страниц, основы SEO.</li>
      <li>&bull; CSS3&nbsp;&mdash; Flexbox, Grid, анимации, медиазапросы для адаптивной верстки.</li>
      <li>&bull; JavaScript (ES6)&nbsp;&mdash; Основы программирования, DOM-манипуляции, интерактивные
        элементы.</li>
      <li>&bull; Git&nbsp;&mdash; Контроль версий, работа с&nbsp;GitHub, создание pull-реквестов.</li>
      <li>&bull; Адаптивная верстка (Flexbox, Grid)</li>
      <li>&bull; БЭМ&nbsp;&mdash; Методология наименования классов для чистой и&nbsp;поддерживаемой разметки.
      </li>
      <li>&bull; Sass/SCSS&nbsp;&mdash; Использование препроцессоров для упрощения работы с&nbsp;CSS.</li>
      <li>&bull; Адаптивная верстка&nbsp;&mdash; Создание сайтов, которые корректно отображаются
        на&nbsp;мобильных и&nbsp;десктопных устройствах.</li>
      <li>&bull; Работа с макетами Figma</li>
      <li>&bull; React&nbsp;&mdash; функциональные компоненты, хуки (useState, useEffect), Context API</li>
      <li>&bull; Состояние приложения&nbsp;&mdash; Redux (Toolkit), Zustand, MobX</li>
      <li>&bull; Роутинг&nbsp;&mdash; React Router, Next.js</li>
      <li>&bull; Webpack&nbsp;&mdash; настройка конфигурации, лоадеры (Babel, Sass), плагины</li>
      <li>&bull; Vite&nbsp;&mdash; быстрая сборка для современных проектов</li>
      <li>&bull; Базовый Node.js + Express&nbsp;&mdash; настройка простого API</li>
      <li>&bull; TypeScript&nbsp;&mdash; типизация, интерфейсы, generics</li>
    </ul>
  </div>
</section>

<footer id="contact">
  <div className="container">
    <h2>Контакты</h2>
    
    {/* Email иконка */}
    <p className="contact__social">
      <a className="link" href="mailto:web-dev.pavel.tomilov@yandex.ru">
        <svg className="contact__icons-svg" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#1E88E5" d="M34 42H14c-4.411 0-8-3.589-8-8V14c0-4.411 3.589-8 8-8h20c4.411 0 8 3.589 8 8v20c0 4.411-3.589 8-8 8z"/>
          <path fill="#fff" d="M35.926 17.488L29.414 24l6.511 6.511c.043.165.074.334.074.512V18c0-.178-.031-.347-.074-.512zM26.688 23.899l7.824-7.825c.165-.043.334-.074.512-.074H14c-.178 0-.347.031-.512.074l7.824 7.825c1.483 1.481 3.893 1.481 5.376 0zM24 27.009c-1.44 0-2.873-.542-3.99-1.605l-6.522 6.522c-.165.043-.334.074-.512.074h20c.178 0 .347-.031.512-.074l-6.522-6.522c-1.117 1.063-2.55 1.605-3.99 1.605zM12.074 17.488c-.043.165-.074.334-.074.512v12c0 .178.031.347.074.512L18.586 24l-6.512-6.512z"/>
        </svg>
      </a>
    </p>

    {/* Телефон иконка */}
    <p className="contact__social">
      <a className="link" href="tel:+79819655907">
        <svg className="contact__icons-svg" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#1E88E5" d="M34 42H14c-4.411 0-8-3.589-8-8V14c0-4.411 3.589-8 8-8h20c4.411 0 8 3.589 8 8v20c0 4.411-3.589 8-8 8z"/>
          <path fill="#fff" d="M35.45 31.041l-4.612-3.051c-.563-.341-1.267-.347-1.836-.017 0 0 0 0-1.978 1.153-.265.154-.52.183-.726.145-.262-.048-.442-.191-.454-.201-1.087-.797-2.357-1.852-3.711-3.205-1.353-1.353-2.408-2.623-3.205-3.711-.009-.013-.153-.193-.201-.454-.037-.206-.009-.46.145-.726 1.153-1.978 1.153-1.978 1.153-1.978.331-.569.324-1.274-.017-1.836l-3.051-4.612c-.378-.571-1.151-.722-1.714-.332 0 0-1.445.989-1.922 1.325-.764.538-1.01 1.356-1.011 2.496-.002 1.604 1.38 6.629 7.201 12.45 5.822 5.822 10.846 7.203 12.45 7.201 1.14-.001 1.958-.248 2.496-1.011.336-.477 1.325-1.922 1.325-1.922.39-.563.24-1.336-.332-1.714z"/>
        </svg>
      </a>
    </p>

    {/* GitHub иконка */}
    <p className="contact__social">
      <a className="link" href="https://github.com/Pavel-Tomilov" target="_blank" rel="noopener noreferrer">
        <svg className="contact__icons-svg" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#1E88E5" d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4z"/>
          <path fill="#fff" d="M21 41v-5.5c0-.3.2-.5.5-.5.3 0 .5.2.5.5v5.5h2v-6.5c0-.3.2-.5.5-.5.3 0 .5.2.5.5v6.5h2v-5.5c0-.3.2-.5.5-.5.3 0 .5.2.5.5v5.5h1.8c.2-.3.2-.6.2-1.1v-3.9c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1h1.9z"/>
          <path fill="#fff" d="M14.2 23.5c0-4.4 4.6-8.5 10.3-8.5 5.7 0 10.3 4 10.3 8.5 0 4.5-3.3 7.5-10.3 7.5-7 0-10.3-3.1-10.3-7.5z"/>
          <path fill="#fff" d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8z"/>
        </svg>
      </a>
    </p>

    {/* Telegram иконка */}
    <p className="contact__social">
      <a className="link" href="https://t.me/mimik_87" target="_blank" rel="noopener noreferrer">
        <svg className="contact__icons-svg" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#1E88E5" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z"/>
          <path fill="#fff" d="M33.95 15l-3.746 19.126c0 0-.161.874-1.245.874-.576 0-.873-.274-.873-.274l-8.114-6.733-3.97-2.001-5.095-1.355c0 0-.907-.262-.907-1.012 0-.625.933-.923.933-.923l21.316-8.468c-.001-.001.651-.235 1.126-.234.292 0 .625.125.625.5 0 .25-.05.5-.05.5z"/>
          <path fill="#b0bec5" d="M23 30.505l-3.426 3.374c0 0-.149.115-.348.12-.069.002-.143-.009-.219-.043l.964-5.965z"/>
          <path fill="#cfd8dc" d="M29.897 18.196c-.169-.22-.481-.26-.701-.093l-13.196 7.897c0 0 2.106 5.892 2.427 6.912.322 1.021.58 1.045.58 1.045l.964-5.965 9.832-9.096c.22-.167.261-.48.094-.7z"/>
        </svg>
      </a>
    </p>
  </div>
</footer>
      </div>
  )
}

export default App
