document.addEventListener("DOMContentLoaded", function() {
    let progress = 0;
    const progressBar = document.querySelector('.progress');
    const percentageText = document.getElementById('percentage');
  
    const loadingInterval = setInterval(() => {
      if (progress < 100) {
        progress += 1;
        progressBar.style.width = progress + '%';
        percentageText.textContent = progress + '%';
      } else {
        clearInterval(loadingInterval);
        document.querySelector('.preloader').style.display = 'none';
      }
    }, 30);
  });

  const backToHomePage = document.querySelector("#home-page");

  backToHomePage.addEventListener('click', () => {
    window.open('../index.html');
  })


document.addEventListener("DOMContentLoaded", function() {

  // FIRST VIDEO
  const playVideoBtn = document.getElementById('play-video-btn');
  const videoPopup = document.getElementById('video-popup');
  const youtubeVideo = document.getElementById('youtube-video');

  playVideoBtn.addEventListener('click', () => {
      youtubeVideo.src = "https://www.youtube.com/embed/-C88r0niLQQ?si=52JUkbv2mRoVPavR"; 
      videoPopup.style.display = "flex";
  });

  videoPopup.addEventListener('click', (e) => {
      if (e.target === videoPopup) {
          youtubeVideo.src = ""; // Stops video playback
          videoPopup.style.display = "none";
      }
  });

  // SECOND VIDEO
  const playVideoBtn2 = document.getElementById('play-video-btn2');
  const videoPopup2 = document.getElementById('video-popup2');
  const youtubeVideo2 = document.getElementById('youtube-video2');

  playVideoBtn2.addEventListener('click', () => {
    youtubeVideo2.src = "https://www.youtube.com/embed/fqTU6268u7o?si=Xf5wrZKR3v2Ze_2n";
    videoPopup2.style.display = "flex";
  });

  videoPopup2.addEventListener('click', (e) => {
      if (e.target === videoPopup2) {
          youtubeVideo2.src = ""; // Stops video playback
          videoPopup2.style.display = "none";
      }
  });

  // THIRD VIDEO
  const playVideoBtn3 = document.getElementById('play-video-btn3');
  const videoPopup3 = document.getElementById('video-popup3');
  const youtubeVideo3 = document.getElementById('youtube-video3');

  playVideoBtn3.addEventListener('click', () => {
    youtubeVideo3.src = "https://www.youtube.com/embed/k1ivOkhxxdw?si=4GyXlMd1E4d8NotY"; 
    videoPopup3.style.display = "flex";
  });

  videoPopup3.addEventListener('click', (e) => {
      if (e.target === videoPopup3) {
          youtubeVideo3.src = ""; // Stops video playback
          videoPopup3.style.display = "none";
      }
  });

  //FOURTH VIDEO
  const playVideoBtn4 = document.getElementById('play-video-btn4');
  const videoPopup4 = document.getElementById('video-popup4');
  const youtubeVideo4 = document.getElementById('youtube-video4');

  playVideoBtn4.addEventListener('click', () => {
    youtubeVideo4.src = "https://www.youtube.com/embed/eSYeHlwDCNA?si=rrJKc_DUQWqtJRL8"; 
    videoPopup4.style.display = "flex";
  });

  videoPopup4.addEventListener('click', (e) => {
      if (e.target === videoPopup4) {
          youtubeVideo4.src = ""; // Stops video playback
          videoPopup4.style.display = "none";
      }
  });

    //FIFTH VIDEO
    const playVideoBtn5 = document.getElementById('play-video-btn5');
    const videoPopup5 = document.getElementById('video-popup5');
    const youtubeVideo5 = document.getElementById('youtube-video5');
  
    playVideoBtn5.addEventListener('click', () => {
      youtubeVideo5.src = "https://www.youtube.com/embed/K6NmcS_n0H8?si=PlcmPEfyQrsHxnXF"; 
      videoPopup5.style.display = "flex";
    });
  
    videoPopup5.addEventListener('click', (e) => {
        if (e.target === videoPopup5) {
            youtubeVideo5.src = ""; // Stops video playback
            videoPopup5.style.display = "none";
        }
    });
    
    //SIXTH VIDEO
    const playVideoBtn6 = document.getElementById('play-video-btn6');
    const videoPopup6 = document.getElementById('video-popup6');
    const youtubeVideo6 = document.getElementById('youtube-video6');
  
    playVideoBtn6.addEventListener('click', () => {
      youtubeVideo6.src = "https://www.youtube.com/embed/fAGn-N1TN8k?si=GZ4JV6A8pIpHweJl"; 
      videoPopup6.style.display = "flex";
    });
  
    videoPopup6.addEventListener('click', (e) => {
        if (e.target === videoPopup6) {
            youtubeVideo6.src = ""; // Stops video playback
            videoPopup6.style.display = "none";
        }
    });
    
    //SEVENTH VIDEO
    const playVideoBtn7 = document.getElementById('play-video-btn7');
    const videoPopup7 = document.getElementById('video-popup7');
    const youtubeVideo7 = document.getElementById('youtube-video7');
  
    playVideoBtn7.addEventListener('click', () => {
      youtubeVideo7.src = "https://www.youtube.com/embed/7PDNqmBdtrE?si=0kgyZ0K7UUXqxTNK"; 
      videoPopup7.style.display = "flex";
    });
  
    videoPopup7.addEventListener('click', (e) => {
        if (e.target === videoPopup7) {
            youtubeVideo7.src = ""; // Stops video playback
            videoPopup7.style.display = "none";
        }
    });

    //EIGHT VIDEO
    const playVideoBtn8 = document.getElementById('play-video-btn8');
    const videoPopup8 = document.getElementById('video-popup8');
    const youtubeVideo8 = document.getElementById('youtube-video8');
  
    playVideoBtn8.addEventListener('click', () => {
      youtubeVideo8.src = "https://www.youtube.com/embed/iA0XZwFqqKI?si=NSTzig1w53zRwnpH"; 
      videoPopup8.style.display = "flex";
    });
  
    videoPopup8.addEventListener('click', (e) => {
        if (e.target === videoPopup8) {
            youtubeVideo8.src = ""; // Stops video playback
            videoPopup8.style.display = "none";
        }
    });

});

const sideNavLinks = document.querySelectorAll('.side-nav ul li a');

console.log(sideNavLinks);

sideNavLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    sideNavLinks.forEach(link => link.parentElement.classList.remove('active'));
  
    link.parentElement.classList.add('active');

    const targetId = link.getAttribute('href').substring(1); // Get the ID (without #)
    const targetSection = document.getElementById(targetId);
    
    targetSection.scrollIntoView({ behavior: 'smooth' });
  })
})