/* СТРАНИЦА ЦЕНЫ и ТАРИФЫ */
const modulePricesVat = document.querySelector('.module-prices__vat')
const btnBasic = document.querySelector('#btn-basic')
const btnExplore = document.querySelector('#btn-explore')
const btnVip = document.querySelector('#btn-vip')

const modulePricesNoVat = document.querySelector('.module-prices__no-vat')
const btnIncomeNoVat = document.querySelector('#btn-income-no-vat')
const btnIncomeCostsNoVat = document.querySelector('#btn-income-minus-costs-no-vat')
const btnAutomatic = document.querySelector('#btn-automatic')

/* Модуль ОСНО */
btnBasic.addEventListener('click', ()=> changeTypeOfPrices('basic', true))
btnExplore.addEventListener('click', ()=> changeTypeOfPrices('explore', true))
btnVip.addEventListener('click', ()=> changeTypeOfPrices('vip', true))

/* Модуль УСН */
btnIncomeNoVat.addEventListener('click', ()=> changeTypeOfPrices('incomeNoVat', false))
btnIncomeCostsNoVat.addEventListener('click', ()=> changeTypeOfPrices('incomeCostsNoVat', false))
btnAutomatic.addEventListener('click', ()=> changeTypeOfPrices('automatic', false))

const basicContent = `
<div class="module-prices__content module-prices__vat-content">
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
const exploreContent = `
<div class="module-prices__content module-prices__vat-content">
    <div class="module-prices__content-features">
        <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">40 сотрудников</p>
        <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">До 60 операций</p>
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
                <p class="price">20 000 ₽</p>
            </div>
            <div class="buttons__wrapper">
                <button class="btn btn__activate">Подключить</button>
                <button class="btn btn__consultation">Получить консультацию</button>
            </div>
        </div>
        <div class="module-prices__quarterly">
            <div class="monthly__quarter">
                <p class="month">месяц</p>
                <p class="price">19 000 ₽</p>
                <p class="extra-info">при оплате за квартал</p>
            </div>
            <div class="buttons__wrapper">
                <button class="btn btn__activate">Подключить</button>
                <button class="btn btn__consultation">Получить консультацию</button>
            </div>
        </div>
    </div>
</div>`
const vipContent = `
<div class="module-prices__content module-prices__vat-content">
    <div class="module-prices__content-features">
        <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">100 сотрудников</p>
        <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">До 150 операций</p>
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
                <p class="price">35 000 ₽</p>
            </div>
            <div class="buttons__wrapper">
                <button class="btn btn__activate">Подключить</button>
                <button class="btn btn__consultation">Получить консультацию</button>
            </div>
        </div>
        <div class="module-prices__quarterly">
            <div class="monthly__quarter">
                <p class="month">месяц</p>
                <p class="price">32 000 ₽</p>
                <p class="extra-info">при оплате за квартал</p>
            </div>
            <div class="buttons__wrapper">
                <button class="btn btn__activate">Подключить</button>
                <button class="btn btn__consultation">Получить консультацию</button>
            </div>
        </div>
    </div>
</div>`

const incomeNoVatCont = `
<div class="module-prices__content module-prices__no-vat-content">
    <div class="module-prices__content-features">
        <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">Включая патент</p>
        <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">До 30 операций</p>
        <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">Оборот компании не важен</p>
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
const incomeCostsNoVatCont = `
<div class="module-prices__content module-prices__no-vat-content">
    <div class="module-prices__content-features">
        <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">Включая патент</p>
        <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">До 30 операций</p>
        <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">Оборот компании не важен</p>
    </div>
    <div class="wrapper">
        <div class="module-prices__content-services">
            <ul>
                <li class="list-item open-sans-16">Формирование книги доходов и расходов</li>
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
const automaticContent = `
<div class="module-prices__content module-prices__no-vat-content">
    <div class="module-prices__content-features">
        <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">Включая патент</p>
        <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">До 30 операций</p>
        <p class="module-prices__content-feature open-sans-16 open-sans-16_bold">Оборот компании не важен</p>
    </div>
    <div class="wrapper">
        <div class="module-prices__content-services">
            <ul>
                <li class="list-item open-sans-16">Формирование книги доходов и расходов</li>
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


function changeTypeOfPrices(type, vatStatus) {
    if (vatStatus === true) {
        btnBasic.classList.remove('active')
        btnExplore.classList.remove('active')
        btnVip.classList.remove('active')
        if (type === 'basic') {
            btnBasic.classList.add('active');
        } else if (type === 'explore') {
            btnExplore.classList.add('active');
        } else if (type === 'vip') {
            btnVip.classList.add('active');
        }
    }
    else if (vatStatus === false) {
        btnIncomeNoVat.classList.remove('active')
        btnIncomeCostsNoVat.classList.remove('active')
        btnAutomatic.classList.remove('active')
        if (type === 'incomeNoVat') {
            btnIncomeNoVat.classList.add('active');
        } else if (type === 'incomeCostsNoVat') {
            btnIncomeCostsNoVat.classList.add('active');
        } else if (type === 'automatic') {
            btnAutomatic.classList.add('active');
        }
    }
    changeModuleContent(vatStatus)
    getBtnsConsult()
    getBtnsActiveTarif()
    openModalCons()
    openModalActivate()
}

function changeModuleContent(vatStatus) {
    let currentPricesContent

    if (vatStatus === true) {
        currentPricesContent = document.querySelector('.module-prices__vat-content')
        currentPricesContent.remove()
        if (btnBasic.classList.contains('active')) {
        modulePricesVat.insertAdjacentHTML('beforeend', basicContent)
        }
        else if (btnExplore.classList.contains('active')) {
        modulePricesVat.insertAdjacentHTML('beforeend', exploreContent)
        }
        else if (btnVip.classList.contains('active')) {
        modulePricesVat.insertAdjacentHTML('beforeend', vipContent)
        }
    } else if (vatStatus === false) {
        currentPricesContent = document.querySelector('.module-prices__no-vat-content')
        currentPricesContent.remove()
        if (btnIncomeNoVat.classList.contains('active')) {
        modulePricesNoVat.insertAdjacentHTML('beforeend', incomeNoVatCont)
        }
        else if (btnIncomeCostsNoVat.classList.contains('active')) {
            modulePricesNoVat.insertAdjacentHTML('beforeend', incomeCostsNoVatCont)
        }
        else if (btnAutomatic.classList.contains('active')) {
            modulePricesNoVat.insertAdjacentHTML('beforeend', automaticContent)
        }
    }
}

/* Модальные окна */
const modalVAT = document.querySelector('#modal-put-on-service-VAT')
const modalNoVAT = document.querySelector('#modal-put-on-service-no-VAT')
const modalSuccessSubmit = document.querySelector('.success-submit')
const modalGetConsult = document.querySelector('#modal-get-consultation')
const modalOrderService = document.querySelector('#modal-order-service')
const modals = [modalGetConsult, modalVAT, modalNoVAT,modalOrderService, modalSuccessSubmit]
let btnGetConsult = document.querySelectorAll('.btn__consultation')
let btnActiveTarif = document.querySelectorAll('.btn__activate')
let btnSend = document.querySelectorAll('.btn__send')
let btnOrder = document.querySelector('.btn__order')
let timer

let body = document.querySelector('body')

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
        })
    }
    
}
// Заказать
btnOrder.addEventListener('click', (e)=> {
    e.preventDefault()
    modalOrderService.classList.remove('hidden')
    document.querySelector('.overlay').classList.remove('hidden');
    body.style.overflow = 'hidden';
})
// close with X
let closeModal = document.querySelectorAll('.close-modal')

closeModal.forEach(val => {
    val.addEventListener('click', (e) => {
        e.preventDefault()
        modals.forEach(modal => {
            modal.classList.add('hidden')
            modal.classList.remove('active-m')
        })
        document.querySelector('.overlay').classList.add('hidden')
        body.style.overflow = 'auto'
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
            modalOrderService.classList.add('hidden')
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


