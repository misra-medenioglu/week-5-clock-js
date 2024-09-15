// Kullanıcıdan isim al ve ekrana yerleştir
let userName = prompt("Lütfen adınızı giriniz:");
document.getElementById("myName").innerHTML = userName ? userName : "Ziyaretçi";

// Saati ve günü gösteren fonksiyon
function showTime() {
  const now = new Date();
  
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  
  let day = now.getDay();
  let dayList = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  let currentDay = dayList[day];
  
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  let time = `${hour}:${minute}:${second} - ${currentDay}`;
  
  document.getElementById("myClock").innerHTML = time;
  
  setTimeout(showTime, 1000);
}

showTime(); // Fonksiyonu çağırarak başlatıyoruz
