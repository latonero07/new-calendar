 const holidays = {
      newyear: {
        title: "New Year's Day",
        desc: "Celebrated every January 1 to mark the start of the year.",
        img: "image/newyear.jpg"
      },
      maundy: {
        title: "Maundy Thursday",
        desc: "Part of Holy Week, commemorates the Last Supper of Jesus Christ.",
        img: "image/maunday-thurs.jpg"
      },
      goodfriday: {
        title: "Good Friday",
        desc: "Part of Holy Week, commemorates the crucifixion of Jesus Christ.",
        img: "image/good-friday.jpg"
      },
      araw: {
        title: "Araw ng Kagitingan",
        desc: "April 9 – Day of Valor, commemorates the Fall of Bataan in 1942.",
        img: "image/Araw ng kagitingan pubmat.jpg"
      },
      labor: {
        title: "Labor Day",
        desc: "May 1 – Honors workers and the labor movement.",
        img: "image/Labor Day 2025.jpg"
      },
      independence: {
        title: "Independence Day",
        desc: "June 12 – Marks the declaration of Philippine independence from Spain in 1898.",
        img: "image/independece day.jpg"
      },
      heroes: {
        title: "National Heroes Day",
        desc: "Last Monday of August – Honors Filipino heroes who fought for freedom.",
        img: "image/Araw ng mga bayani.jpg"
      },
      bonifacio: {
        title: "Bonifacio Day",
        desc: "November 30 – Birth anniversary of Andrés Bonifacio, a revolutionary hero.",
        img: "image/bonifacio day.jpg"
      },
      christmas: {
        title: "Christmas Day",
        desc: "December 25 – Celebrates the birth of Jesus Christ.",
        img: "image/christmas.jpg"
      },
      rizal: {
        title: "Rizal Day",
        desc: "December 30 – Honors the life and works of national hero Dr. José Rizal.",
        img: "image/rizal day.jpg"
      }
    };

    function showPopup(holidayKey) {
      document.getElementById("holiday-title").innerText = holidays[holidayKey].title;
      document.getElementById("holiday-desc").innerText = holidays[holidayKey].desc;
      document.getElementById("holiday-img").src = holidays[holidayKey].img;
      document.getElementById("popup").style.display = "flex";
    }
    function closePopup() {
      document.getElementById("popup").style.display = "none";
    }