var addPr = document.getElementById('add-product')
var goToMain = document.getElementById('go-to-web')
var product = document.getElementById('p-name')
var brand = document.getElementById('p-brand')
var price = document.getElementById('p-price')
var image = document.getElementById('p-image')
var rowProducts = document.getElementsByClassName('row-products')[0]

var productVal = localStorage.getItem("product")
var brandVal = localStorage.getItem("brand")
var priceVal = localStorage.getItem("price")
var imageVal = localStorage.getItem("imgURL")

// filename = imageVal.replace(/^.*[\\\/]/,'')

rowProducts.innerHTML +=  `<div class="col-products col-sm-3">
<a href="#">
<div class="card">
    <img src= "${imageVal}" class="card-img-top" alt="sale">
    <div class="card-body">
        <h4 class="card-text text-muted product-brand"><small>${brandVal}</small></h4>
        <h3 class="card-title product-name">${productVal}</h3>
        <h3 class="price">Price : <span class="text-muted">$ ${priceVal}</span></h3>
        <button type="button" class="btn btn-outline-dark cart">ADD TO CART</button> 
        <a href="#"><i class="fa fa-heart-o wishlist" aria-hidden="true"></i></a> <br>
        <hr>
        <center><a href="#" class="btn btn-buy btn-primary">Buy Now</a></center>
    </div>
</div>`