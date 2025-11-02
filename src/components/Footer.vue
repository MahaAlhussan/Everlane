<template>
    
<div class="footer-container container-fluid  p-0 mx-0">
   
    <footer>
     
        <div class="footer-content-head row  mb-0 mt-5 mx-4 row-2 justify-content-xl-around justify-content-sm-between">
            <div class="footer-content col-xl-3 col-lg-6 col-md-6 col-sm-6 pt-4 order-1">
                <ul class="list-unstyled">
                <li class="footer-headings ">Acount</li>
                <li> Log In </li>
                <li>Sign In</li>
                <li>Redeem a Gift Card</li>
                </ul>
                </div>

            <div class="footer-content col-xl-3 col-lg-4 col-md-4 col-sm-6 pt-4 order-2">
                <ul class="list-unstyled">
                    <li class="footer-headings mt-md-0 mt-4">Company</li>
                    <li> <a href="/about">About</a> </li>
                    <li>Environmental Initiatives</li>
                    <li>Factories</li>
                    <li>DEI</li>
                    <li>Careers</li>
                    <li>International</li>
                    <li>Accessability</li>
                    </ul>
                    </div>

            <div class="footer-content col-xl-auto col-lg-6  col-md-6 pt-4 col-sm-6 my-sm-0 order-md-3 order-sm-1 d-flex">
                <ul class="list-unstyled">
                    <li class=" footer-headings mt-md-0 mt-4">Get Help</li>
                    <li>Help Center </li>
                    <li>Return Policy</li>
                    <li>Shipping Info </li>
                    <li>Bulk Orders</li>
                    </ul>
                    </div>

<div class="footer-content col-xl-auto   col-md-2 pt-4 col-sm-6 my-sm-0 order-md-3 order-sm-1 d-flex">
                <ul class="list-unstyled">
                    <li class="footer-headings mt-md-0 mt-4">Connect</li>
                    <li><a href="#">Facebook</a></li>
  	 				<li><a href="#">Instagram</a></li>
  	 				<li><a href="#">Twitter</a></li>
  	 				<li><a href="#">Our Stores</a></li>
                    </ul>
                    </div>

            <div class="email-input footer-content col-xl-auto text-left col-lg-4 col-md-4 col-sm-6 col-12 pt-4 my-sm-0 order-6 my-auto">
                <div class="input-group-lg input-group mb-3 mt-md-0 mt-4">
                    <input type="text" class="form-control" placeholder="Your Email Address" 
                    aria-label="Recipient's username" aria-describedby="button-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-success" type="button" id="button-addon2">
                             <b class="text-white fw-bolder">&#8594;</b>
                             </button>
                             </div>
                             </div>
                             
            </div>
        </div>
        <hr class="line">
         
      
      <div class="row2">
        <a href="#">Privacy Policy</a>
                <a href="#">Terms & Servies</a>
                        <a href="#">Do Not Sell or Share My Personal Information</a>
                        <a href="#">CS Supply Chain Transparency</a>
                        <a href="#">Vendor Code of Conduct</a>
                        <a href="#">Sitemap Pages</a>
                        <a href="#">Sitemap Products</a>
      </div>
        <div class="row text-center py-3">
            <div class="col"><p class="text-muted">
                <b>&copy;2023 All Rights Reserved</b> 
                </p>
                </div>
                 </div>
    </footer>
</div>
</template>
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

button {
    font-size: 14px!important;
    border-radius:0 !important;
    padding-left:  calc(20px + (28 - 20) * ((100vw - 360px) / (1600 - 360))) !important; 
    padding-right: calc(20px + (28 - 20) * ((100vw - 360px) / (1600 - 360))) !important; 
    padding-top:  calc(10px + (12 - 10) * ((100vw - 360px) / (1600 - 360))) !important; 
    padding-bottom:   calc(10px + (12 - 10) * ((100vw - 360px) / (1600 - 360))) !important;
    background-color:#000000 !important; 
    border:none !important; 
 }


li{
    margin-top: 2px ;
    margin-bottom: 8px ;
    cursor: pointer;
}



input::placeholder {
    vertical-align:middle !important;
    text-align: center !important;
    color:#42443E !important;
    font-size: 12px;
    text-align: left;
}

input{
    border-radius:2px !important;
    background: #fff !important;
    color: #000000 !important;
    border-color: #000000 !important;
  

}

input:focus {
     -moz-box-shadow: none !important;
     -webkit-box-shadow: none !important;
     box-shadow: none !important;
     outline-width: 0;
 }



footer{
    overflow-x: hidden !important;
    background-color:#f5f5f5 !important;
} 


p {
    font-size: 11px;
    color: rgb(185, 185, 185);
    font-weight: 300;
}


.btn{
    background-color:#000000 !important;
}


a{
    text-decoration: none !important;
}

.line{
    background-color:rgba(241, 241, 241, 0.638) !important;
    width: 92%;
}
 .footer-container {
    text-align: left;
 }

 li {
    color: rgb(130, 130, 130) ;
    font-size: 12px;
 }

li a{
        color: rgb(130, 130, 130) ;

}
li:hover, li a:hover  {
    color: #000000;
}


 .footer-headings {
    font-size: 16px ;
    color: #000000;
    font-weight: 600;
 }
.footer-content-head {
  display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 1px;
        padding: 15px;

  
}
.footer-content{
    min-width: 140px;
}

.btn b {
    color: white;
    font-size: 12px;
    font-weight: 800;

}

.email-input{ 
    width : 350px;
    margin-right: 40px;
    
}
input {
    border: none;
box-shadow: rgba(195, 195, 195, 0.2) 0px 2px 8px 0px;
    text-align: left;

}
.row2 a {
    color: rgb(130, 130, 130) ;
 
}


</style>