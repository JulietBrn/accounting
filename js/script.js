
/* Добавление новых карточек отзыва. Кнопка Показать еще */

const btnMore = document.querySelector('.btn__more')
const btnWrapperMore = document.querySelector('.btn-wrapper__more')
const reviewBox = document.querySelector('.reviews-section__box')

function hiddenButton() {
    btnWrapperMore.style.display = 'none'
}
function showMoreReviews() {
    reviewBox.insertAdjacentHTML('beforeend', 
    `<div class="reviews-section__box-item review-card">
        <img src="img/reviews-6.jpg" alt="client-photo" class="review-card__img">
        <div class="review-card__client paragraph-text paragraph-text_normal">
            <p class="review-card__client-job">Бухгалтер в ООО «СтройСпецМир»</p>
            <p class="review-card__client-name">Иванова Ирина</p>
        </div>
        <p class="review-card__review paragraph-text paragraph-text_normal">Нужно было принять иностранных граждан на работу. Поскольку там особое регулирование и мы с таким раньше не сталкивались — решили обратиться к специалистам. Остались довольны качеством услуг.</p>
    </div>
    <div class="reviews-section__box-item review-card">
        <img src="img/reviews-5.jpg" alt="client-photo" class="review-card__img">
        <div class="review-card__client paragraph-text paragraph-text_normal">
            <p class="review-card__client-job">Индивидуальный предприниматель</p>
            <p class="review-card__client-name">Шепелин Антон</p>
        </div>
        <p class="review-card__review paragraph-text paragraph-text_normal">Отдал все бухгалтерские дела на аутсорс, приятно сотрудничать с такими специалистами. Пока всё устраивает.</p>
    </div>
    <div class="reviews-section__box-item review-card">
        <img src="img/reviews-4.jpg" alt="client-photo" class="review-card__img">
        <div class="review-card__client paragraph-text paragraph-text_normal">
            <p class="review-card__client-job">Собственник ООО «Фронтенд разработки»</p>
            <p class="review-card__client-name">Супин Денис</p>
        </div>
        <p class="review-card__review paragraph-text paragraph-text_normal">Найдут ответ на любой вопрос, обязательно изучат и дадут ссылки на актуальную юридическую практику и авторитетные источники.</p>
    </div>
    <div class="reviews-section__box-item review-card">
        <p class="none"></p>
        <div class="review-card__client paragraph-text paragraph-text_normal">
            <p class="review-card__client-job">Директор ООО «Перевозки»</p>
            <p class="review-card__client-name">Пришин Александр</p>
        </div>
        <p class="review-card__review paragraph-text paragraph-text_normal">Обращались за консультацией по возмещению НДС по международным перевозкам. Удобно, что сотрудники всегда на связи, подробно объясняют и сопровождают весь процесс. В итоге всё получилось!</p>
    </div>`)
    reviewBox.style.marginBottom = '0rem'
}

btnMore.addEventListener('click', (e) => {
    e.preventDefault()
    showMoreReviews()
    hiddenButton()
})
/* Модальные окна */
const modalVAT = document.querySelector('#modal-put-on-service-VAT')
const modalNoVAT = document.querySelector('#modal-put-on-service-no-VAT')
const modalSuccessSubmit = document.querySelector('.success-submit')
const modalGetConsult = document.querySelector('#modal-get-consultation')
const modals = [modalGetConsult, modalVAT, modalNoVAT, modalSuccessSubmit]
let btnGetConsult = document.querySelectorAll('.btn__consultation')
let btnActiveTarif = document.querySelectorAll('.btn__activate')
let btnSend = document.querySelectorAll('.btn__send')

let timer

let body = document.querySelector('body')


/* Переключение ООО - ИП Д - ИП Д-Р */
const btnCompany = document.querySelector('#btn-company')
const btnIncome = document.querySelector('#btn-income')
const btnIncomeCosts = document.querySelector('#btn-income-minus-costs')
const modulePrices = document.querySelector('.module-prices')
const incomeContent = `
<div class="module-prices__content">
  <div class="module-prices__content-features">
    <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">Включая патент</p>
    <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">До 30 операций</p>
    <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">Оборот не важен</p>
  </div>
  <div class="wrapper">
    <div class="module-prices__content-services">
        <ul>
            <li class="list-item open-sans-16">Налоговый учет</li>
            <li class="list-item open-sans-16">Подготовка отчетности</li>
            <li class="list-item open-sans-16">Формирование платежных поручений</li>
            <li class="list-item open-sans-16">Общение с налоговой</li>
        </ul>
    </div>
    <div class="module-prices__content-benefits content-benefits">
        <div class="content-benefits__title ">
            <p class="open-sans-16 open-sans-16_bold">Бонус!</p>
            <img src="icons/benefit.png" alt="benefit">
        </div>
        <div class="content-benefits__content">
            <p class="open-sans-16">Бесплатный экспресс-аудит</p>
            <p class="open-sans-16">Консультации в чате без ограничений</p>
        </div>
    </div>
  </div>
  <div class="module-prices__prices">
    <div class="module-prices__monthly monthly">
        <div class="monthly__month">
            <p class="month">месяц</p>
            <p class="price">3 000 ₽</p>
        </div>
        <div class="buttons__wrapper">
            <button class="btn btn__activate">Подключить</button>
            <button class="btn btn__consultation">Получить консультацию</button>
        </div>
    </div>
    <div class="module-prices__quarterly">
        <div class="monthly__quarter">
            <p class="month">месяц</p>
            <p class="price">2 500 ₽</p>
            <p class="extra-info">при оплате за квартал</p>
        </div>
        <div class="buttons__wrapper">
            <button class="btn btn__activate">Подключить</button>
            <button class="btn btn__consultation">Получить консультацию</button>
        </div>
    </div>
  </div>
</div>`
const incomeCostsContent = `
<div class="module-prices__content">
  <div class="module-prices__content-features">
    <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">Включая патент</p>
    <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">До 30 операций</p>
    <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">Оборот не важен</p>
  </div>
  <div class="wrapper">
    <div class="module-prices__content-services">
        <ul>
            <li class="list-item open-sans-16">Налоговый учет</li>
            <li class="list-item open-sans-16">Подготовка отчетности</li>
            <li class="list-item open-sans-16">Формирование платежных поручений</li>
            <li class="list-item open-sans-16">Учет первичной документации по расходам</li>
            <li class="list-item open-sans-16">Общение с налоговой</li>
        </ul>
    </div>
    <div class="module-prices__content-benefits content-benefits">
        <div class="content-benefits__title ">
            <p class="open-sans-16 open-sans-16_bold">Бонус!</p>
            <img src="icons/benefit.png" alt="benefit">
        </div>
        <div class="content-benefits__content">
            <p class="open-sans-16">Бесплатный экспресс-аудит</p>
            <p class="open-sans-16">Консультации в чате без ограничений</p>
        </div>
    </div>
  </div>
  <div class="module-prices__prices">
    <div class="module-prices__monthly monthly">
        <div class="monthly__month">
            <p class="month">месяц</p>
            <p class="price">6 000 ₽</p>
        </div>
        <div class="buttons__wrapper">
            <button class="btn btn__activate">Подключить</button>
            <button class="btn btn__consultation">Получить консультацию</button>
        </div>
    </div>
    <div class="module-prices__quarterly">
        <div class="monthly__quarter">
            <p class="month">месяц</p>
            <p class="price">5 000 ₽</p>
            <p class="extra-info">при оплате за квартал</p>
        </div>
        <div class="buttons__wrapper">
            <button class="btn btn__activate">Подключить</button>
            <button class="btn btn__consultation">Получить консультацию</button>
        </div>
    </div>
  </div>
</div>`
const companyContent = `
<div class="module-prices__content">
  <div class="module-prices__content-features">
      <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">10 сотрудников</p>
      <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">До 30 операций</p>
      <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">Оборот компании не важен</p>
  </div>
  <div class="wrapper">
      <div class="module-prices__content-services">
          <ul>
              <li class="list-item open-sans-16">Налоговый учет</li>
              <li class="list-item open-sans-16">Подготовка отчетности</li>
              <li class="list-item open-sans-16">Учет первичной документации по расходам</li>
              <li class="list-item open-sans-16">Формирование платежных поручений</li>
              <li class="list-item open-sans-16">Общение с налоговой</li>
          </ul>
      </div>
      <div class="module-prices__content-benefits content-benefits">
          <div class="content-benefits__title ">
              <p class="open-sans-16 open-sans-16_bold">Бонус!</p>
              <img src="icons/benefit.png" alt="benefit">
          </div>
          <div class="content-benefits__content">
              <p class="open-sans-16">Бесплатный экспресс-аудит</p>
              <p class="open-sans-16">Консультации в чате без ограничений</p>
          </div>
      </div>
  </div>
  <div class="module-prices__prices">
      <div class="module-prices__monthly monthly">
          <div class="monthly__month">
              <p class="month">месяц</p>
              <p class="price">15 000 ₽</p>
          </div>
          <div class="buttons__wrapper">
              <button class="btn btn__activate">Подключить</button>
              <button class="btn btn__consultation">Получить консультацию</button>
          </div>
      </div>
      <div class="module-prices__quarterly">
          <div class="monthly__quarter">
              <p class="month">месяц</p>
              <p class="price">14 000 ₽</p>
              <p class="extra-info">при оплате за квартал</p>
          </div>
          <div class="buttons__wrapper">
              <button class="btn btn__activate">Подключить</button>
              <button class="btn btn__consultation">Получить консультацию</button>
          </div>
      </div>
  </div>
</div>`

/* нажатие на текущую - включает текущую и выключает остальные
+класс актив */
function changeTypeOfPrices(type) {
    btnIncome.classList.remove('active')  
    btnCompany.classList.remove('active')
    btnIncomeCosts.classList.remove('active')
    if (type === 'income') {
        btnIncome.classList.add('active');
    } else if (type === 'company') {
        btnCompany.classList.add('active');
    } else if (type === 'incomeCosts') {
        btnIncomeCosts.classList.add('active');
    }
    changeModuleContent()
    getBtnsConsult()
    getBtnsActiveTarif()
    openModalCons()
    openModalActivate()
}

function clearInputs(){
    let inputs = document.querySelectorAll('.form-input')
    inputs.forEach(input => {
        input.value = ''
    })
}
function changeModuleContent() {
    let currentPricesContent = document.querySelector('.module-prices__content')
    currentPricesContent.remove()
    if (btnIncome.classList.contains('active')) {
    modulePrices.insertAdjacentHTML('beforeend', incomeContent)
    }
    if (btnCompany.classList.contains('active')) {
        modulePrices.insertAdjacentHTML('beforeend', companyContent)
    }
    if (btnIncomeCosts.classList.contains('active')) {
        modulePrices.insertAdjacentHTML('beforeend', incomeCostsContent)
    }
    
}

btnIncome.addEventListener('click', () => changeTypeOfPrices('income'))
btnCompany.addEventListener('click', () => changeTypeOfPrices('company'))
btnIncomeCosts.addEventListener('click', () => changeTypeOfPrices('incomeCosts'))

// /* Получить консультацию. Вызов модального окна */

function getBtnsConsult() {
    btnGetConsult = document.querySelectorAll('.btn__consultation')
}

function openModalCons() {
    for (let value of btnGetConsult) { //для каждого элемента из псевдомассива
        value.addEventListener('click', (e) => {
            e.preventDefault()
            modalGetConsult.classList.remove('hidden')
            modalGetConsult.classList.add('modal-m')
            document.querySelector('.overlay').classList.remove('hidden')
            body.style.overflow = 'hidden'
        })
    }
    getBtnsSend()
}

// /* Подключить тариф */

function getBtnsActiveTarif() {
    btnActiveTarif = document.querySelectorAll('.btn__activate')
}
function openModalActivate() {
    for(let val of btnActiveTarif) {
        val.addEventListener('click', (e) => {
            e.preventDefault()
            const activeElement = document.querySelector('.header-cell.active');
            const modalToShow = activeElement.classList.contains('btn-company') ? modalVAT : modalNoVAT;
            modalToShow.classList.remove('hidden');
            modalToShow.classList.add('active-m')
            document.querySelector('.overlay').classList.remove('hidden');
            body.style.overflow = 'hidden';
            getBtnsSend()
            clearInputs()
        })
    }
    
}

// close with X
let closeModal = document.querySelectorAll('.close-modal')
console.log(closeModal);
closeModal.forEach(val => {
    val.addEventListener('click', (e) => {
        e.preventDefault()
        modals.forEach(modal => {
            modal.classList.add('hidden')
            modal.classList.remove('active-m')
        })
        document.querySelector('.overlay').classList.add('hidden')
        body.style.overflow = 'auto'
        clearInputs()
    })
})
// close with overlay
document.querySelector('.overlay').addEventListener('click', () => {
    modals.forEach(modal => {
        modal.classList.add('hidden')
        modal.classList.remove('active-m')
    })
    document.querySelector('.overlay').classList.add('hidden')
    body.style.overflow = 'auto'
    clearInputs()
})
// close with key 'Escape'
document.addEventListener('keydown', function(event) {
    if (event.key == 'Escape') {
        modals.forEach(modal => {
            modal.classList.add('hidden')
            modal.classList.remove('active-m')
        })
        document.querySelector('.overlay').classList.add('hidden')
        body.style.overflow = 'auto'
        clearInputs()
        }
})
openModalCons()
openModalActivate()

getBtnsSend()
successSubmit()

function getBtnsSend() {
    btnSend = document.querySelectorAll('.btn__send')
}
function successSubmit() {
    for(let val of btnSend) {
        val.addEventListener('click', (e) => {
            e.preventDefault()
            modalSuccessSubmit.classList.remove('hidden')
            modalGetConsult.classList.add('hidden')
            modalVAT.classList.add('hidden')
            modalNoVAT.classList.add('hidden')
            if(document.querySelector('.overlay').classList.contains('hidden')) {
                document.querySelector('.overlay').classList.remove('hidden');
                body.style.overflow = 'hidden';
            }
            timer = setTimeout(()=> {
                modalSuccessSubmit.classList.add('hidden')
                document.querySelector('.overlay').classList.add('hidden')
                body.style.overflow = 'auto'
            },4000)
        }
    )}
    
}
