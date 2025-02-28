<template>
  <div class="title">
    <h2 class="title">Кафедры университета</h2>
    <div class="departments-grid">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
      <div
          v-for="(department, index) in departments"
          :key="index"
          class="depart-card"
          :style="{ '--color': department.color, '--shadow-color': department.color + '40' }"
      >


        <!-- Иконка кафедры -->
        <font-awesome-icon :icon="department.icon" class="department-icon" />
        <h3>{{ department.name }}</h3>
        <p>{{ department.description }}</p>
        <span class="arrow">→</span>
      </div>


      <!-- Новостная карточка по центру -->
      <div class="depart-card news-card">
        <h3>Новости</h3>
        <p>Последние события и обновления университета</p>
        <span class="arrow">→</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const departments = ref([
  { name: "Менеджмент и Бизнес", color: "#1a6728", icon: "briefcase" },
  { name: "Социально-Гуманитарные Науки", color: "#1a6728", icon: "globe" },
  { name: "Финансы и Учет", color: "#1a6728", icon: "chart-line" },
  { name: "Языковой Центр", color: "#1a6728", icon: "language" },
  { name: "Бизнес Информатика", color: "#1a6728", icon: "laptop" },
  { name: "Туризм и Гостеприимство", color: "#1a6728", icon: "graduation-cap" }
]);
</script>

<style scoped>

.title {
  font-size: 22px; /* Увеличь значение при необходимости */
  font-weight: bold; /* Сделает текст жирнее, если нужно */
  font-family: "Montserrat", sans-serif;
  margin-bottom: 70px; /* Увеличь, если нужно больше отступа */
}
  .departments-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 0.7fr));
    gap: 40px;
    justify-content: center;
    max-width: 1300px;
    margin: 0 auto;

  }

  .depart-card {
    padding: 10px 15px;
    border-radius: 40px;
    background: white;
    box-shadow: 0px 5px 10px var(--shadow-color),
    0px 5px 15px var(--shadow-color), 0px 10px 20px var(--shadow-color),
    0px 15px 30px var(--shadow-color);

    transition: all 0.3s ease-in-out;
    color: var(--color);
    position: relative;
    text-align: left;
    overflow: hidden;
    min-height: 100px;
    height: auto;
  }




  .depart-card:hover {
    background: var(--color);
    color: white;
    box-shadow: none;
  }



  .news-card {
    background: #0056b3;
    color: white;
    text-align: center;
    grid-column: 2;

  }

  .news-card:hover {
    background: #003f7f;

  }


</style>