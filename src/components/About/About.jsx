import './About.css'

const About = () => {
    return ( 
 <>
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
 </>
     );
}
 
export default About;