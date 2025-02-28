<template>
  <div class="home">
    <!-- Название университета -->
    <h1 class="header" data-v-0083f5a8="">Университет
      <br data-v-0083f5a8="">Международного
      <br data-v-0083f5a8="">Бизнеса

    </h1>
    <h2 class="header__subtitle" data-v-0083f5a8="">имени Кенжегали Сагадиева</h2>
    <img src="https://pps.uib.kz/img/uib_logo.275ded02.png" alt="Логотип" class="header__logo">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <!-- Основная часть -->
    <main class="main-content">
      <!-- Кафедры -->

      <DepartNurkxan :items="departments" />

      <!-- Контакты -->
      <h2 class="subtitle">Контакты</h2>
      <div class="contacts-grid">
        <div v-for="(contact, index) in contacts" :key="index" class="contact-item">
          <strong>{{ contact.label }}:</strong> {{ contact.value }}
        </div>
      </div>

      <!-- Футер -->
      <Footer />
    </main>
  </div>
</template>

<script setup>
import Footer from '@/components/AppFooter.vue';
import DepartNurkxan from '@/components/DepartNurkxan.vue';

const departments = [
  "Экономика", "Менеджмент", "Финансы",
  "Цифровой маркетинг", "Прикладная аналитика", "Информационные технологии"
];

const contacts = [
  { label: "Телефон", value: "+7 (727) 123-45-67" },
  { label: "Email", value: "info@uib.kz" }
];
</script>

<style scoped>


.header {
  display: flex;
  margin-left: 20px; /* Увеличивай значение, если нужно больше */
  font-size:45px;
  text-align: left;
  padding: 120px 40px;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  color: black;



}
.header__subtitle {
  font-weight: 400;
  margin-right: 900px; /* Увеличивай значение, если нужно больше */
  font-size:35px;
  margin-top: -210px;

  text-align: left;
  padding:60px;
  white-space: nowrap;
  font-family: "Montserrat", sans-serif;

}



.header__logo {
  height: 400px; /* Подбери подходящий размер */
  width: auto;  /* Чтобы логотип не растягивался */
  margin-left: 670px;
  margin-top: -390px; /* Регулируй значение, если нужно выше */
  margin-bottom: 50px;
}



/* Общий стиль */
.home {
  text-align: center;
  font-family: 'Arial', sans-serif;
  color: #353535;
}







/* Контакты */
.contacts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  max-width: 500px;
  margin: 20px auto;
  text-align: left;
}


.contact-item {
  background: #f4f4f4;

  border-radius: 8px;
}
</style>