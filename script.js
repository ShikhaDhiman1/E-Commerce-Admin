{/* <script type="module">
    import {addPr, goToMain, product, brand, price, image} from './script2.mjs';
</script> */}

var login = document.getElementById('btn-login')
var email = document.getElementById('InputEmail')
var passw = document.getElementById('InputPassword')


login.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(email.value)
    console.log(passw.value)
    // console.log((form.email.value == 'example@gmail.com'))
    console.log((email.value == 'example@gmail.com')  && (passw.value == 'abc'))
    if((email.value === "example@gmail.com")  && (passw.value === "abc")){

        document.getElementsByClassName("card-body")[0].innerHTML = "<form id='form-product'><div class='mb-3'><label for='p-name' class='form-label'>Product Name<sup>*</sup></label><input type='text' class='form-control' id='p-name' required></div><div class='mb-3'><label for='p-brand' class='form-label'>Product Brand<sup>*</sup></label><input type='text' class='form-control' id='p-brand' required></div><div class='mb-3'><label for='p-price' class='form-label'>Product Price<sup>*</sup></label><input type='number' class='form-control' id='p-price' required></div><div class='mb-3'><label for='p-image' class='form-label'>Product Image<sup>*</sup></label><input type='file'  accept='image/*' name='image' class='form-control' id='p-image' required '><p><img id='output' width='200px'></p></div><br><button type='submit' class='btn btn-primary' id='add-product'>Add Product</button><a href='/index2.html' id='go-to-web'>Go to Website</a></form>"

    }
    // style='display: none;
    else{
        alert("Wrong Password or Wrong Username! Please, try Again.")
    }
    var addPr = document.getElementById('add-product')
    var goToMain = document.getElementById('go-to-web')
    var product = document.getElementById('p-name')
    var brand = document.getElementById('p-brand')
    var price = document.getElementById('p-price')
    var image = document.getElementById('p-image')

    addPr.addEventListener('click', (e)=>{
        e.preventDefault()
        // console.log(product.value)
        // console.log(brand.value)
        // console.log(price.value)
        // console.log(image.value)
        
        localStorage.setItem("product", product.value)
        localStorage.setItem("brand", brand.value)
        localStorage.setItem("price", price.value)
        
        if(image.files && image.files[0]){
            var reader = new FileReader();
            reader.onload = function(e){
                localStorage.setItem("imgURL", e.target.result)
            }
            reader.readAsDataURL(image.files[0]);
        }
    })
    console.log(document.getElementById("sec-1"))
})
