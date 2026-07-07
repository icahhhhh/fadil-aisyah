<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Wedding Of Fadil & Aisyah</title>

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

</head>
<body>

    <button id="musicButton" onclick="toggleMusic()" class="music-container">
        <div id="musicIcon" class="music-vinyl paused">
            <div class="vinyl-texture"></div>
            <div class="vinyl-gloss"></div>
            <div class="vinyl-logo">
                <img src="logo.png" alt="Logo" class="logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span class="logo-text">F&A</span>
            </div>
            <div class="vinyl-center-hole"></div>
        </div>
    </button>

    <section id="cover-section" class="cover-section">
        <div class="slideshow-container" id="background-slideshow">
            </div>

        <div class="overlay"></div>

        <div class="cover-content">
            <p class="subtitle">The Wedding Of</p>
            <h1 class="title">
                <span id="groom-name"></span> <div class="row-bride">
                <span class="ampersand">&</span>
                <span id="bride-name"></span>
                </div>
            </h1>
            <p class="invite">Kepada Yth. Bapak/Ibu/Saudara/i</p>
            <h2 class="guest-name" id="guest-name">Tamu Undangan</h2>
        
            
            <button class="btn-open-invitation" id="btn-utama">
                <svg class="envelope-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
                Buka Undangan
            </button>
            <p class="note">*Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
        </div>    
    </section>

   <section id="main-content" class="main-content">
        <div class="slideshow-wrapper" id="main-slideshow"></div>
        <div class="overlay-main"></div>

        <div class="bottom-gradient-overlay"></div>
        
        <div class="main-content-text">
            <h2 class="section-title">The Wedding Of</h2>
            
            <div class="names-container">
                <h1 class="names-main" id="main-names"></h1>
                <div class="line-divider"></div> </div>
            
            <p class="date-main">24 Mei 2026</p>

            <div class="scroll-arrows">
                <span class="arrow"></span>
                <span class="arrow"></span>
            </div>
        </div>
    </section>

    <section id="quote-section" class="quote-section">
        
        <div class="quote-initials hidden-scroll">
            <span id="initial-groom"></span> 
            <span class="divider"></span> 
            <span id="initial-bride"></span>
        </div>

        <div class="slider-container">
            <div class="slider-track" id="quote-slider">
                </div>
        </div>

        <div class="quote-text-wrapper hidden-scroll">
            <h3 class="arabic-text">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</h3>
            <p class="quote-content">
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
            </p>
            <p class="quote-source">(QS. Ar-Rum: 21)</p>
        </div>

    </section>

   <section id="couple-section" class="couple-section">
        <div class="box-putih hidden-scroll">
            <div class="side-label">Groom & Bride</div> 
            
            <div class="container-mempelai hidden-scroll">
                <div class="profile-card">
                    <div class="profile-img-box">
                        <img id="groom-img" src="" alt="Fadil">
                        
                        <div class="info-overlay hidden-scroll">
                            <h2 id="groom-full-name" class="profile-name"></h2>
                            <p class="profile-parents" id="groom-parents"></p>
                            <a id="groom-ig" href="#" target="_blank" class="ig-btn">
                                <i class="fab fa-instagram"></i> <span id="groom-ig-text"></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="profile-card hidden-scroll">
                    <div class="profile-img-box">
                        <img id="bride-img" src="" alt="Aisyah">
                        
                        <div class="info-overlay hidden-scroll">
                            <h2 id="bride-full-name" class="profile-name"></h2>
                            <p class="profile-parents" id="bride-parents"></p>
                            <a id="bride-ig" href="#" target="_blank" class="ig-btn">
                                <i class="fab fa-instagram"></i> <span id="bride-ig-text"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="detail-section" class="detail-section">
        <div class="detail-info hidden-scroll">
                    <h2 class="detail-event-wedding">Wedding</h2>
                    <div class="line-divider-event"></div>
                    <h2 class="detail-event">Event</h2>
                </div>
        <div class="box-hitam slide-in-left">
            <div class="side-label-left">Akad Nikah</div> 
                <div class="profile-card-custom">
                    <div class="profile-img-container">
                        <div class="slider-wrapper" id="slider-wrapper"></div>
                        
                        <div class="info-overlay-event hidden-scroll">
                            <div class="event-container">
                                <div class="event-date-left">
                                    <span id="counter-date" class="counter-date">0</span>
                                </div>
                                
                                <div class="event-date-right slide-in-right">
                                    <div id="event-day" class="event-day">Minggu</div>
                                    <div id="event-month" class="event-month">Mei</div>
                                    <div id="event-year" class="event-year">2026</div>
                                </div>
                            </div>
                            <div class="event-details-wrapper slide-in-right">
                                <p class="event-time" id="event-time"></p>
                                <p class="event-location" id="event-location"></p>
                                <p class="event-address" id="event-address"></p>
                            </div>
                            <a id="event-maps-btn" href="#" target="_blank" class="maps-btn">
                                <i class="fas fa-map-marker-alt"></i> Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="box-hitam-right slide-in-right">
            <div class="side-label-right">Resepsi</div> 
                <div class="profile-card-custom-resepsi">
                    <div class="profile-img-container-resepsi">
                        <div class="slider-wrapper-resepsi" id="slider-wrapper-resepsi"></div>
                        
                        <div class="info-overlay-event">
                            <div class="event-container">
                                <div class="event-date-left">
                                    <span id="counter-date-resepsi" class="counter-date">0</span>
                                </div>
                                
                                <div class="event-date-right slide-in-right">
                                    <div id="event-day-resepsi" class="event-day-resepsi">Minggu</div>
                                    <div id="event-month-resepsi" class="event-month-resepsi">Mei</div>
                                    <div id="event-year-resepsi" class="event-year-resepsi">2026</div>
                                </div>
                            </div>
                            <div class="event-details-wrapper-resepsi slide-in-right">
                                <p class="event-time-resepsi" id="event-time-resepsi"></p>
                                <p class="event-location-resepsi" id="event-location-resepsi"></p>
                                <p class="event-address-resepsi" id="event-address-resepsi"></p>
                            </div>
                            <a id="event-maps-btn" href="#" target="_blank" class="maps-btn">
                                <i class="fas fa-map-marker-alt"></i> Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="countdown-section" class="countdown-section">
        <img id="countdown-bg" src="" alt="Save The Date Background" class="countdown-bg-img">
        

        <div class="countdown-content">
            <div class="countdown-container">
                
                <div id="countdown" class="countdown">
                    <h3>~ Happy Days Countdown ~</h3>
                    <div id="time-box-container" class="time-box-container">
                        <div class="time-box"><span id="days">00</span><small>Days</small></div>
                        <div class="time-box"><span id="hours">00</span><small>Hours</small></div>
                        <div class="time-box"><span id="minutes">00</span><small>Minutes</small></div>
                        <div class="time-box"><span id="seconds">00</span><small>Seconds</small></div>
                    </div>
                    <button onclick="addToCalendar()" class="save-date-btn">
                        <svg class="calendar-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                            <path d="M12 14v4"></path>
                            <path d="M10 16h4"></path>
                        </svg> 
                        Save The Date
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section id="gift-section" class="gift-section">
        <div class="gift-container">
            <h2 class="gift-title">Wedding Gift</h2>
            <p class="gift-desc" id="gift-desc"></p>

            <div class="bank-cards-container" id="bank-cards-container"></div>
        </div>
    </section>
        

    <audio id="background-music" loop>
        <source src="" type="audio/mpeg">
    </audio>

    <script src="config.js"></script>
    <script src="script.js"></script>
</body>
</html>