console.log('script add');

document.getElementById('submit-btn').addEventListener('click',showName,false);

function showName(e){
    
    var name = document.getElementById('Name').value;
    document.getElementById('myformName').reset();
    document.getElementById('myformEmail').reset();

    alert('Thank You '+name+' for your suggestion. We will contact you soon !')    
    e.preventDefault();
}