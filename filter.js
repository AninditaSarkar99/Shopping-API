function clickMe()
{
    
    $.ajax({
        url: "https://fakestoreapi.com/products",
        method: "get",
        data: {},
        success: function(response)
        {
            var alldata = response;
            let temp="<div id=newDiv>";

            for(i=0; i<alldata.length; i++)
            {
                
                temp += "<span id='new'>"+ alldata[i].title+'<br>'+'<h4>'+alldata[i].category+'</h4>'+`<img src=${alldata[i].image} style="height: 120px; width: 100px; float:left; padding:10px; margin:10px;">`
                +"<br>"+"<P>"+alldata[i].description+"</P>"+"<br>"+'<br>'+"<h6>"+"Rating  "+alldata[i].rating.rate+"</h6>"+'<br>'+"<h5>"+"<b>"+"Price: "+alldata[i].price+"</b>"+"</h5>";
                
                temp +="<br>"+"<hr>"+"</span>";
            }
            temp += "</div>";

            document.getElementById('result').innerHTML = temp;
        }
    })

    
}


function searchByTitle()
{
    var input = document.getElementById('input').value;  //an

    var oltitle = document.getElementById('newDiv');

    var allTitles = oltitle.getElementsByTagName("span");
    

    var flag = 0;

    for(i=0; i<allTitles.length; i++)
    {
        

        var title = allTitles[i].innerHTML;  //
        
        var input_length = input.length;

        var str = title.substring(0, input_length);

        if(str == input)
        {
            allTitles[i].style.display = "";
            flag = 1;
        }
        else{
            allTitles[i].style.display = "none";
        }
    }
   
    if(flag == 0)
    {
        document.getElementById('error').innerHTML ="<h2>"+ "Data Not Found"+"</h2>";
    }
    else{
        document.getElementById('error').innerHTML = "";
    }
}

function filter(input){
    var radio =  input.value;
            
    var product =document.getElementById('newDiv');

    var allProduct=product.getElementsByTagName("span");
 
    var cat=product.getElementsByTagName("h4");
    
    
            
    for(i=0; i<allProduct.length; i++)
        {
                
            var title = cat[i].innerHTML;
            
            console.log(title);

            if(title == radio)
            {
                allProduct[i].style.display="";
                
            }
            else
            {
                allProduct[i].style.display="none";
                
            }
        }
                    
}
        
