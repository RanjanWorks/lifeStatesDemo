// code written by ranjan
// kashyapranjan9977@gmail.com
// All rights reserved

      let totalseconds;
      let totalminutes;
      let totaldays;
      let section1 = document.getElementById("section1");
      let section2 = document.getElementById("section2");
      let input_day = document.getElementById("day");
      let input_month = document.getElementById("month");
      let input_year = document.getElementById("year");
      let go_btn = document.getElementById("go_btn");
      let date_box = document.getElementById("date_box");
      let show_numday = document.getElementById("show_numday");
      let show_day = document.getElementById("show_day");
      let show_mm = document.getElementById("show_mm");
      let show_yy = document.getElementById("show_yy");
      let show_totalDays = document.getElementById("show_totalDays");
      let heart = document.getElementById("heart");
      let blood = document.getElementById("blood");
      let redbcells = document.getElementById("redbcells");
      let hide = document.querySelectorAll(".hide");
      let grays = document.querySelectorAll(".gray");
      let breath = document.getElementById("breath");
      let sleep = document.getElementById("sleep");
      let age = document.getElementById("age");
      let people = document.getElementById("people");
      let milky = document.getElementById("milky");
      let moonyou = document.getElementById("moonyou");
      let moonaway = document.getElementById("moonaway");
      let eage = document.getElementById("eage");
      let eday = document.getElementById(" eday");
      let eleft = document.getElementById("eleft");

      function changeAvatar() {
        let avatar = document.getElementById("avatar");
        let avatars = [
          "avatar.png",
          "avatar1.png",
          "avatar2.png",
          "avatar3.png",
          "avatar4.png",
          "avatar5.png",
        ];
        let x = 0;
        setInterval(() => {
          x++;

          if (x >= avatars.length) {
            x = 0;
          }
          avatar.src = avatars[x];
        }, 2000);
      }

// validations...

      document.querySelectorAll("input").forEach((elem) => {
        elem.addEventListener("keyup", () => {
          if (
            input_day.value > 0 &&
            input_day.value <= 31 &&
            input_month.value > 0 &&
            input_month.value <= 12 &&
            input_year.value.length === 4 &&
            input_year.value < new Date().getFullYear() &&
            input_year.value >= new Date().getFullYear() - 100
          ) {
      
         go_btn.removeAttribute("disabled");
          } else {
            go_btn.disabled = true;
          }
        });
      });

// linking lines to images...

      function linkLines() {
        myFunction()
        let y = Math.round(document.documentElement.scrollTop);

        let z = document.getElementById("h1");
        if (y < 100) {
          grays[0].classList.add("black");

          date_box.style.display = "block";
        } else {
          date_box.style.display = "none";
          grays[0].classList.remove("black");
        }
        if (y >= 100 && y < 200) {
          hide[0].classList.add("show");
          grays[1].classList.add("black");
        } else {
          grays[1].classList.remove("black");
          hide[0].classList.remove("show");
        }
        if (y >= 200 && y < 300) {
          grays[2].classList.add("black");

          hide[1].classList.add("show");
        } else {
          hide[1].classList.remove("show");
          grays[2].classList.remove("black");
        }
        if (y >= 300 && y < 400) {
          grays[3].classList.add("black");

          hide[2].classList.add("show");
        } else {
          hide[2].classList.remove("show");
          grays[3].classList.remove("black");
        }
        if (y >= 400 && y < 500) {
          hide[3].classList.add("show");
          grays[4].classList.add("black");
        } else {
          hide[3].classList.remove("show");
          grays[4].classList.remove("black");
        }
        if (y >= 500 && y < 600) {
          grays[5].classList.add("black");

          hide[4].classList.add("show");
        } else {
          hide[4].classList.remove("show");
          grays[5].classList.remove("black");
        }
        if (y >= 600 && y < 700) {
          grays[6].classList.add("black");

          hide[5].classList.add("show");
        } else {
          hide[5].classList.remove("show");
          grays[6].classList.remove("black");
        }
        if (y >= 700 && y < 800) {
          grays[7].classList.add("black");

          hide[6].classList.add("show");
        } else {
          hide[6].classList.remove("show");
          grays[7].classList.remove("black");
        }
        if (y >= 800 && y < 900) {
          grays[8].classList.add("black");

          hide[7].classList.add("show");
        } else {
          hide[7].classList.remove("show");
          grays[8].classList.remove("black");
        }
        if (y >= 900 && y < 1000) {
          grays[9].classList.add("black");

          hide[8].classList.add("show");
        } else {
          hide[8].classList.remove("show");
          grays[9].classList.remove("black");
        }
        if (y >= 1000 && y < 1100) {
          grays[10].classList.add("black");

          hide[9].classList.add("show");
        } else {
          hide[9].classList.remove("show");
          grays[10].classList.remove("black");
        }
        if (y >= 1100 && y < 1200) {
          grays[11].classList.add("black");

          hide[10].classList.add("show");
        } else {
          hide[10].classList.remove("show");
          grays[11].classList.remove("black");
        }
        if (y >= 1200 && y < 1300) {
          grays[12].classList.add("black");

          hide[11].classList.add("show");
        } else {
          hide[11].classList.remove("show");
          grays[12].classList.remove("black");
        }
        if (y >= 1300 && y < 1400) {
          grays[13].classList.add("black");

          hide[12].classList.add("show");
        } else {
          hide[12].classList.remove("show");
          grays[13].classList.remove("black");
        }
        if (y >= 1400 && y < 1500) {
          grays[14].classList.add("black");

          hide[13].classList.add("show");
        } else {
          hide[13].classList.remove("show");
          grays[14].classList.remove("black");
        }
        if (y >= 1500 && y < 1600) {
          grays[15].classList.add("black");

          hide[14].classList.add("show");
        } else {
          hide[14].classList.remove("show");
          grays[15].classList.remove("black");
        }
        if (y >= 1600 && y < 1800) {
          grays[16].classList.add("black");

          hide[15].classList.add("show");
        } else {
          hide[15].classList.remove("show");
          grays[16].classList.remove("black");
        }
      }

      function TheMainFunction() {
        CalculateTime();
        section1.style.display = "none";
        section2.style.display = "block";
      }

      function CalculateTime() {
        let Months = [
          "jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        let UserBday = `${input_month.value}/${input_day.value}/${input_year.value}`;

        show_day.innerHTML = days[new Date(UserBday).getDay()];
        show_numday.innerText = input_day.value;
        show_mm.innerHTML = Months[new Date(UserBday).getMonth()];
        show_yy.innerText = input_year.value;
        let distance =
          new Date(new Date().getTime()) - new Date(UserBday).getTime();
        totaldays = Math.floor(distance / (1000 * 60 * 60 * 24));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let totalhours = totaldays * 24;
        totalminutes = totalhours * 60 + minutes;
        totalseconds = totalminutes * 60;
        show_totalDays.innerText = totaldays;
        heart.innerText = Math.trunc(totalseconds * 1.2) + seconds;
        blood.innerText = totalminutes * 7;
        sleep.innerText = Math.round(totaldays / 3);
        CalculateAge(UserBday);
        people.innerText = totaldays * 204589;
        moonyou.innerText = Math.round(totaldays / 28.66);
        moonaway.innerText = Math.floor(
          (new Date().getFullYear() - input_year.value) * 3.8
        );
        CalculateRemainingDate(UserBday);
      }
// all calculation functions 
      let bs = 0;
      function breaths() {
        bs++;
        breath.innerText = totalminutes * 12 + bs;
      }
      let b = 0;
      function cellss() {
        b++;
        redbcells.innerText =
          Math.trunc(totalseconds * 2103452) + b + b 
      }
      let bb = 0;
      function blinked() {
        bb++;
        document.getElementById("blink").innerText = totalminutes * 15 + bb;
      }

      function CalculateAge(UserBday) {
        let yyy = new Date(
          Date.now() - new Date(UserBday).getTime()
        ).getUTCFullYear();
        let agg = Math.abs(yyy - 1970);
        age.innerText = agg;
        eage.innerText = agg + 1;
      }
      let et = 0;
      function earthTravel() {
        et++;
        document.getElementById("earthsun").innerHTML =
          totaldays * 260000 + et + et;
        milky.innerText = totaldays * 189977627 + et + et;
      }

      function CalculateRemainingDate(UserBday) {
        let today = new Date();
        let bday = new Date(UserBday);
        let upcoming = new Date(
          today.getFullYear(),
          bday.getMonth(),
          bday.getDate()
        );
        if (today > upcoming) {
          upcoming.setFullYear(today.getFullYear() + 1);
        }
        var one_day = 24 * 60 * 60 * 1000;
        let days_left = Math.ceil(
          (upcoming.getTime() - today.getTime()) / one_day
        );
        eleft.innerText = days_left;
      }

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("bar").style.width = scrolled + "%";
}


// all functions calls 

      setInterval(breaths, 2500);
      setInterval(blinked, 3000);
      setInterval(cellss, 10);
      setInterval(CalculateTime, 1000);
      setInterval(earthTravel, 100);
      changeAvatar();

window.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          go_btn.click()
        }
      });
      window.addEventListener("scroll", linkLines);


// end of the code 