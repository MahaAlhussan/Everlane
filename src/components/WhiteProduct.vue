<template>

    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <h1>The White Whites Edit</h1>

        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="d-flex justify-content-around">
                    <div class="product-item">
                        <img src="/assets/whiteedit.png" class="d-block" alt="Product 1">
                        <p class="product-title">The Waffle Long-Sleeve Crew </p>
                        <p class="product-title">$60</p>
                        <p class="product-brand text-muted" ><small>Bone</small> </p>

                    </div>
                    <div class="product-item">
                        <img src="/assets/whiteEdit2.png" class="d-block" alt="Product 2">
                        <p class="product-title">The Bomber Jacket | Uniform</p>
                                                <p class="product-title">$80</p>

                     <p class="product-brand text-muted"><small>Toasted Coconut</small> </p>


                    </div>
                    <div class="product-item">
                        <img src="/assets/whiteEdit3.png" class="d-block" alt="Product 3">
                        <p class="product-title">The Slim 4-Way Stretch Organic Jean | Uniform</p>
                                                <p class="product-title">$130</p>

                         <p class="product-brand text-muted"><small>Dark Indigo</small> </p>

                    </div>
                    <div class="product-item">
                        <img src="/assets/whiteEdit4.png" class="d-block" alt="Product 4">
                        <p class="product-title">The Essential Organic Crew</p>
                                                <p class="product-title">$80</p>

                         <p class="product-brand text-muted"><small>Vintage Black</small> </p>

                    </div>
                    <div class="product-item">
                        <img src="/assets/whiteEdit5.png" class="d-block" alt="Product 5">
                        <p class="product-title">The Heavyweight </p>
                        <p class="product-brand text-muted">Heathered Brown</p>
                    </div>
                </div>
            </div>
            
            <div class="carousel-item">
                <div class="d-flex justify-content-around">
                    <div class="product-item">
                        <img src="/assets/item2.png" class="d-block" alt="Product 6">
                    </div>
                    <div class="product-item">
                        <img src="/assets/item4.png" class="d-block" alt="Product 7">
                    </div>
                    <div class="product-item">
                        <img src="/assets/item5.png" class="d-block" alt="Product 8">
                    </div>
                    <div class="product-item">
                        <img src="/assets/item1.png" class="d-block" alt="Product 9">
                    </div>
                    <div class="product-item">
                        <img src="/assets/item2.png" class="d-block" alt="Product 10">
                    </div>
                </div>
            </div>
            
        </div>
        
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        <button class="btn ">Shop Now</button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.productHead {
    text-align: center;
    margin: 40px 0;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
}

.carousel-inner {
    padding: 20px 0;
}

.product-item {
    text-align: left;
    margin: 30px;
    width: 690px;
}

.product-item img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-item img:hover {
    transform: scale(1.05);
    cursor: pointer;
}

.carousel-control-prev,
.carousel-control-next {
    width: 100px;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
color: white;}


.product-item p {
text-align: left;
font-size: 12px
}

.product-title {
  display: inline-block;
  margin-right: 5px;
}
.carousel{
        margin-top: 170px;

}
h1 {
    color: black;
    font-weight: 700;
}
.btn {
    background-color: black;
    color: white;
    width: 230px;
    padding: 15px;
    margin: 10px;
    border-radius: 8px;
    font-weight: 700;
}
</style>