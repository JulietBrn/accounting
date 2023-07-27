const btnMore = document.querySelector('.btn__more')
const brnWrapperMore = document.querySelector('.btn-wrapper__more')
const reviewBox = document.querySelector('.reviews-section__box')

console.log(btnMore);
function hiddenButton() {
    brnWrapperMore.classList.add('hidden')
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
}

btnMore.addEventListener('click', showMoreReviews)


/* const btnOpenModal = document.querySelectorAll(".show-modal");
const modalWindow = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

for (let value of btnOpenModal) {
  value.addEventListener("click", function () {
    overlay.classList.toggle("hidden");
    modalWindow.classList.toggle("hidden");
  });
}

btnCloseModal.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
  modalWindow.classList.toggle("hidden");
});

overlay.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
  modalWindow.classList.toggle("hidden");
});

document.addEventListener("keydown", function (event) {
  if (event.key == "Escape" && !modalWindow.classList.contains("hidden")) {
    overlay.classList.toggle("hidden");
    modalWindow.classList.toggle("hidden");
  }
});
 */