function checkMagazine(magazine, note) {
    // Write your code here
    var count = 0;
    if(magazine != note){
        if(magazine.length === note.length){
            return 'No';
        }
        if(magazine.length < note.length){
            return 'No';
        }
        if(magazine.length > note.length){
            for(let i = 0; i <note.length; i++){
                if(magazine.includes(note[i])){
                    magazine = magazine.toString();
                    count++;
                    magazine = magazine.replace(note[i],'0');
                    
                }else{
                    return 'No';
                }
            }
            if(count == palabras.length){
                return 'Yes';
            }
        }
    }else{
        return 'Yes';
    }
}



