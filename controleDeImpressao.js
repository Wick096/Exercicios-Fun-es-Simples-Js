
function impressora (qtdPages){
    
	if(qtdPages == 2){
    
	return (qtdPages *0.20)
   
 }
    
	else if(qtdPages == 4){

        
	
	return (qtdPages *0.40)

    
}
    
    
     else if(qtdPages > 4){
       
        
	return (qtdPages *1.50)
    
	
	}

    


}






console.log(impressora(5))