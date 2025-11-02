<template>
  <section class="feedback-section">
    <div class="feedback-container">
      <div class="feedback-text">
        <p class="feedback-label">People Are Talking</p>

        <div class="stars">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>

        <p class="quote">
          “Love this shirt! Fits perfectly and the fabric is thick without being stiff.”
        </p>

        <p class="author">
          — JonSnSF, <a href="#" class="product-link">The Heavyweight Overshirt</a>
        </p>
      </div>

      <div class="feedback-image">
        <img src="/assets/feedback.png" alt="Customer wearing shirt" />
      </div>
    </div>
  </section>
</template>

<style scoped >
.feedback-section {
  width: 100%;
  padding: 10px 30px;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
}

.feedback-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 60px;
}

.feedback-text {
  flex: 1;
}

.feedback-label {
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 1.5px;
  color: #8a8a8a;
  margin-bottom: 10px;
}

.stars {
  margin-bottom: 20px;
}

.checked {
  color: black;
  font-size: 18px;
}

.quote {
  font-size: 26px;
  font-weight: 600;
  line-height: 1.5;
  color: #111;
  margin-bottom: 20px;
  max-width: 500px;
}

.author {
  color: #555;
  font-size: 15px;
}

.product-link {
  color: #000;
  text-decoration: underline;
}

.feedback-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.feedback-image img {
  width: 100%;
  max-width: 500px;
  object-fit: cover;
}


</style>
