import './Projects.css'
import marusia  from '../../images/marusia.jpg';
import irvas  from '../../images/irvas.jpg';
import student  from '../../images/table-student.jpg';
import highPass from '../../images/high-pass.jpg';
import blanchard from '../../images/blanchard.jpg';
import skillbox from '../../images/skillbox.jpg';

const Home = () => {
    return ( 
        <section id="projects" className="projects">
  <div className="container">
    <h2 className="projects__title">Проекты</h2>
    <div className="container__card">
      <article>
        <a className="link-reset" target="_blank" href="https://pavel-tomilov.github.io/vk-marusia/">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src={marusia} alt="VK Маруся" className="card__icon" />
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
                <img src={irvas} alt="Ирвас окна" className="card__icon" />
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
                <img src={student} alt="Blanchard" className="card__icon" />
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
                <img className="card__icon" src={highPass} alt="HIGH PASS" />
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
                <img src={blanchard} alt="Blanchard" className="card__icon" />
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
                <img src={skillbox} alt="Skillbox" className="card__icon" />
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
     );
}
 
export default Home;