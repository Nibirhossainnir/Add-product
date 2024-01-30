//product
function product(info){
    var htmlCode =`
    <div class="product">
    <img src="${info.pUrl}" alt="Product image">
    <h3>${info.title}</h3>
    <p>${info.des}</p>
        <a href="${info.pDUrl}" target="_blank"><button>Details</button></a>
    </div>
    `;
    return htmlCode;
}
var form = document.getElementById('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    var title = e.target.title.value;
    var pUrl = e.target.pUrl.value;
    var pDUrl = e.target.pDUrl.value;
    var des = e.target.des.value;
    
    var producInfo = {
        title,
        pUrl,
        pDUrl,
        des        
    }
    root.innerHTML += product(producInfo);
    e.target.title.value="";
    e.target.pUrl.value="";
    e.target.pDUrl.value="";
    e.target.des.value="";
})
