<template>
  <footer class="footer">
    <div class="contacts-grid">
      <div class="column">
        <p><strong>Колл центр:</strong> +7 771 949 9911</p>
        <p><strong>Офис регистратура:</strong> +7 771 949 9955</p>
        <p><strong>Ректорат:</strong> +7 771 949 9966</p>
        <p><strong>Бухгалтерия:</strong> +7 771 949 9944</p>
        <p><strong>Юрист:</strong> +7 705 957 5957</p>
        <p><strong>Молодежный центр:</strong> +7 705 957 5958</p>
        <p><strong>Центр Карьеры:</strong> +7 705 957 5959</p>
      </div>

      <div class="column">
        <p><strong>Деканат:</strong> +7 705 957 5950</p>
        <p><strong>БИ:</strong> +7 705 957 5951</p>
        <p><strong>МИБ:</strong> +7 705 957 5952</p>
        <p><strong>ТИГ:</strong> +7 705 957 5954</p>
        <p><strong>СГН:</strong> +7 705 957 5953</p>
        <p><strong>ФиУ:</strong> +7 705 957 5955</p>
        <p><strong>ЯЦ:</strong> +7 705 957 5956</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #37348f;
  color: white;
  padding: 20px;
  text-align: center;
}

/* Сетка из двух колонок */
.contacts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}

.column p {
  margin: 5px 0;
}
</style>