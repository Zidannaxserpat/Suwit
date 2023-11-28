confirm = confirm("Permainan batu, gunting, kertas");
if(confirm == true){

  let playerInput = prompt("Pilih batu, gunting, kertas:");
  let player = playerInput.toLowerCase(); // Convert input to lowercase

  
  let bot = Math.random();
  
  if(bot < 0.34){
    bot = 'batu';
  }else if(bot > 0.33 && bot <= 0.66){
    bot = 'gunting';
  }else{
    bot = 'kertas';
  }
  
  
  let hasil;
  
  if(player == bot){
    hasil = 'Hasil permainan seri';
  }else if(bot == 'kertas'){
    if(player == 'gunting'){
      hasil = 'Anda Menang';
    }else if(player == 'batu'){
      hasil = 'Anda kalah';
    }else{
      alert("Salah input!")
    }
  }else if(bot == 'batu'){
    if(player == 'gunting'){
      hasil = 'Anda kalah';
    }else if(player == 'kertas'){
      hasil = 'Anda Menang';
    }else{
      alert("Salah input!")
    }
  }else if(bot == 'gunting'){
    if(player == 'batu'){
      hasil = 'Anda Menang';
    }else if(player == 'kertas'){
      hasil = 'Anda kalah';
    }else{
      alert("Salah input!")
    }
  }

  alert("Bot memilih "+bot+" sedangkan kamu milih "+player+" hasil permainan: "+hasil);
}else{
  alert("Kok di cancel? ).;")
}
