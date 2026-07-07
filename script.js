// Pindahkan ke luar dari DOMContentLoaded agar bisa diakses global
function toggleMusic() {
    const audio = document.getElementById("background-music");
    const icon = document.getElementById("musicIcon");
    
    if (audio.paused) {
        audio.play();
        icon.classList.remove("paused");
        icon.classList.add("playing");
    } else {
        audio.pause();
        icon.classList.remove("playing");
        icon.classList.add("paused");
    }
}

document.addEventListener("DOMContentLoaded", function () {

    document.body.style.overflow = "hidden";

    // 1. Set Background Luar
    document.documentElement.style.backgroundImage = `url('${CONFIG.bgLuarUrl}')`;
    document.documentElement.style.backgroundSize = "cover";
    
    // 2. Set Teks dari Config
    document.getElementById("groom-name").innerText = CONFIG.text.groom.nickname;
    document.getElementById("bride-name").innerText = CONFIG.text.bride.nickname;
    document.getElementById("main-names").innerText = `${CONFIG.text.groom.nickname} & ${CONFIG.text.bride.nickname}`;

    // 3. Set Warna dari Config
    const root = document.documentElement.style;
    
    // 4. Set Font
    root.setProperty('--font-heading', CONFIG.fonts.heading);
    root.setProperty('--font-body', CONFIG.fonts.body);
    
    // 5. Set Warna
    root.setProperty('--primary', CONFIG.colors.primary);
    root.setProperty('--secondary', CONFIG.colors.secondary);
    root.setProperty('--accent', CONFIG.colors.accent);
    root.setProperty('--bgbutton', CONFIG.colors.bgbutton);
    
    
    // 6. Set Slideshow Cover
    const slideshowContainer = document.getElementById("background-slideshow");
    CONFIG.images.forEach((imgUrl, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        if (index === 0) slide.classList.add("active");
        slide.style.backgroundImage = `url('${imgUrl}')`;
        slideshowContainer.appendChild(slide);
    });

    // 7.Logika animasi Slideshow Cover
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }, 4000);

    // 8.Logika Nama Tamu Dinamis
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');
    const guestElement = document.getElementById('guest-name');

    if (guestName) {
        guestElement.innerText = decodeURIComponent(guestName.replace(/\+/g, ' '));
    } else {
        guestElement.innerText = "Tamu Undangan"; 
    }

    // 9. Logika Tombol Buka Undangan dan Musik
    const audio = document.getElementById("background-music");
    const audioSource = audio.querySelector("source");
    audioSource.src = CONFIG.musicUrl;
    audio.load(); 

    const btnBuka = document.getElementById("btn-utama");
    const coverSection = document.getElementById("cover-section");
    const icon = document.getElementById("musicIcon");

    btnBuka.addEventListener("click", function() {
        coverSection.classList.add("cover-up");
       
        
        setTimeout(() => {
            const mainContent = document.getElementById("main-content");
            mainContent.classList.add("visible");
            document.body.style.overflow = "auto";
                        
            audio.play().then(() => {
                icon.classList.remove("paused");
                icon.classList.add("playing");
            }).catch(error => {
                console.log("Autoplay diblokir:", error);
            });
        }, 500);
    });

    // 10. Inisialisasi Slideshow Utama (Efek Pudar/Berlanjut)
    const mainSlideshow = document.getElementById("main-slideshow");
    const mainSlides = []; // Gunakan array agar foto mudah dipanggil

    CONFIG.imagesMain.forEach((img, index) => {
        const slide = document.createElement("div");
        slide.className = "main-slide";
        
        // Berikan class 'active' HANYA pada gambar pertama
        if (index === 0) {
            slide.classList.add("active");
        }
        
        slide.style.backgroundImage = `url('${img}')`;
        mainSlideshow.appendChild(slide);
        mainSlides.push(slide);
    });

    let mainSlideIndex = 0;
    setInterval(() => {
        if (mainSlides.length > 0) {
            // Pudarkan gambar saat ini
            mainSlides[mainSlideIndex].classList.remove("active");
            
            // Pindah ke gambar selanjutnya (berputar kembali ke 0 jika habis)
            mainSlideIndex = (mainSlideIndex + 1) % mainSlides.length;
            
            // Munculkan gambar selanjutnya
            mainSlides[mainSlideIndex].classList.add("active");
        }
    }, 4000);
        
    // 11. Section Quote (Inisial, Slider, & Foto Besar)
    document.getElementById("initial-groom").innerText = CONFIG.text.groom.nickname.charAt(0);
    document.getElementById("initial-bride").innerText = CONFIG.text.bride.nickname.charAt(0);

    const sliderTrack = document.getElementById("quote-slider");
    
    // MENGGABUNGKAN KEDUA CONFIG GAMBAR
    // Ini akan mengambil semua foto di 'images' dan 'imagesMain' menjadi satu daftar panjang
    const combinedImages = [...CONFIG.images, ...CONFIG.imagesMain]; 
    
    // Kita gandakan array gabungan tersebut agar efek berputarnya (infinite scroll) tidak terputus
    const duplicatedImages = [...combinedImages, ...combinedImages, ...combinedImages]; 
    
    duplicatedImages.forEach(img => {
        const div = document.createElement("div");
        div.className = "slider-box";
        div.style.backgroundImage = `url('${img}')`;
        sliderTrack.appendChild(div);
    });

    // 12. Profil Mempelai
    
    // Update Profil Mempelai
    const setProfile = (idPrefix, data) => {
        document.getElementById(`${idPrefix}-img`).src = data.photo;
        document.getElementById(`${idPrefix}-full-name`).innerText = data.fullName;
        document.getElementById(`${idPrefix}-parents`).innerText = data.parents;
        document.getElementById(`${idPrefix}-ig-text`).innerText = data.instagram;
        document.getElementById(`${idPrefix}-ig`).href = `https://instagram.com/${data.instagram.replace('@', '')}`;
    };

    setProfile('groom', CONFIG.text.groom);
    setProfile('bride', CONFIG.text.bride);

        // --- LOGIKA ANIMASI SCROLL ---
        const observerOptions = {
            threshold: 0.1 // Animasi mulai saat 10% elemen terlihat di layar
        };

        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Jika masuk ke layar, tambahkan class animasi
                entry.target.classList.add('animate-show');
            } else {
                // JIKA KELUAR DARI LAYAR, HAPUS class animasi
                // Ini yang membuat animasi mengulang saat discroll kembali
                entry.target.classList.remove('animate-show');
            }
        });
    }, observerOptions);

        // Seleksi semua elemen yang ingin dianimasikan
        const hiddenElements = document.querySelectorAll('.hidden-scroll');
        hiddenElements.forEach((el) => observer.observe(el));
    });

    const detailImg = document.getElementById("detail-img");
    if(detailImg && CONFIG.imagesMain.length > 0) {
        detailImg.src = CONFIG.imagesMain; // Mengambil foto pertama dari imagesMain
    }

    // 13. section detail 
        function initSlider(wrapperId, images) {
        const wrapper = document.getElementById(wrapperId);
        if (!wrapper) return;

        // Bersihkan & Tambahkan Gambar (Kloning untuk efek infinite)
        wrapper.innerHTML = '';
        
        // Masukkan semua gambar ke wrapper
        images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            wrapper.appendChild(img);
        });

        // Kloning gambar pertama dan taruh di akhir agar transisi mulus saat pindah
        const firstImg = document.createElement("img");
        firstImg.src = images[0];
        wrapper.appendChild(firstImg);

        // Logika Geser Halus
        let index = 0;
        const totalImages = images.length + 1; // +1 karena ada kloning gambar pertama
        
        setInterval(() => {
            index++;
            
            // Geser ke foto berikutnya
            wrapper.style.transition = "transform 1s ease-in-out";
            wrapper.style.transform = `translateX(-${index * 100}%)`;

            // Jika sampai di foto kloning (foto pertama di akhir)
            if (index >= images.length) {
                setTimeout(() => {
                    wrapper.style.transition = "none"; // Matikan transisi
                    wrapper.style.transform = `translateX(0%)`; // Kembali ke awal
                    index = 0; // Reset index
                }, 1000); // Harus sama dengan durasi transition (1s)
            }
        }, 3000); // Durasi per slide 3 detik
    }

        document.addEventListener("DOMContentLoaded", function () {

        // Muat slider akad & resepsi
        initSlider("slider-wrapper", CONFIG.images);
        // Panggil untuk Resepsi
        initSlider("slider-wrapper-resepsi", CONFIG.imagesMain);
        
        // Fungsi Counter
        function animateCounter(id, target, duration) {
            const element = document.getElementById(id);
            if (!element) return;
            
            let start = 0;
            const stepTime = Math.max(1, Math.floor(duration / target));
            const timer = setInterval(() => {
                start += 1;
                element.innerText = start;
                if (start >= target) clearInterval(timer);
            }, stepTime);
        }

        // Intersection Observer untuk Animasi Muncul & Counter
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 1. Jalankan animasi muncul (tambah class visible)
                    entry.target.classList.add('visible');
                    
                    // 2. Jalankan Counter Akad & Resepsi
                    // Pastikan target adalah angka (misal: 24)
                    animateCounter('counter-date', CONFIG.eventDetails.akad.date, 1500); 
                    animateCounter('counter-date-resepsi', CONFIG.eventDetails.resepsi.date, 1500);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        // Terapkan ke box Akad & Resepsi
        const boxAkad = document.querySelector('.box-hitam'); // Sesuaikan class box Anda
        const boxResepsi = document.querySelector('.box-hitam-right');
        
        if (boxAkad) observer.observe(boxAkad);
        if (boxResepsi) observer.observe(boxResepsi);

        // Isi Detail Event (Pastikan data dari CONFIG masuk)
        const akad = CONFIG.eventDetails.akad;
        if (akad) {
            document.getElementById("event-month").innerText = akad.month;
            document.getElementById("event-year").innerText = akad.year;
            document.getElementById("event-time").innerText = akad.time;
            document.getElementById("event-address").innerText = akad.address;
            document.getElementById("event-location").innerText = akad.location;
        }

        const res = CONFIG.eventDetails.resepsi;
        if (res) {
            document.getElementById("event-month-resepsi").innerText = res.month;
            document.getElementById("event-year-resepsi").innerText = res.year;
            document.getElementById("event-time-resepsi").innerText = res.time;
            document.getElementById("event-address-resepsi").innerText = res.address;
            document.getElementById("event-location-resepsi").innerText = res.location;
        }
    });

    // 14. Animasi
        document.addEventListener("DOMContentLoaded", function () {
        // Observer untuk mendeteksi scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Tambahkan class 'visible' agar efek transisi berjalan
                    entry.target.classList.add('visible');
                    // Hentikan pengawasan agar tidak terulang-ulang
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 }); // 20% elemen terlihat di layar, efek jalan

        // Pilih semua elemen yang memiliki class target
        const elements = document.querySelectorAll('.slide-in-left, .slide-in-right');
        elements.forEach(el => observer.observe(el));
    });

    // 15. Countdown Logic
    document.addEventListener("DOMContentLoaded", function () {
        // Menerapkan background countdown dari config
        const countdownBg = document.getElementById("countdown-bg");
        if (countdownBg && CONFIG.countdownBgUrl) {
            countdownBg.src = CONFIG.countdownBgUrl;
        }

        // Ambil data dari CONFIG
        const akad = CONFIG.eventDetails.akad;
        
        // ==========================================
        // LOGIKA COUNTDOWN 
        // ==========================================
        // Dictionary untuk mengubah nama bulan jadi angka index (0-11)
        const bulanIndex = { 
            "januari": 0, "februari": 1, "maret": 2, "april": 3, "mei": 4, "juni": 5, 
            "juli": 6, "agustus": 7, "september": 8, "oktober": 9, "november": 10, "desember": 11 
        };
        
        // Set target date dari config (contoh: 24 Juli 2026)
        const targetDate = new Date(akad.year, bulanIndex[akad.month.toLowerCase()], akad.date).getTime();

        const timer = setInterval(function() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            // Jika waktu sudah lewat, set ke 0
            if (distance < 0) {
                clearInterval(timer);
                document.getElementById("days").innerText = "00";
                document.getElementById("hours").innerText = "00";
                document.getElementById("minutes").innerText = "00";
                document.getElementById("seconds").innerText = "00";
                return;
            }

            // Hitung hari, jam, menit, detik dan format 2 digit (contoh: 05, bukan 5)
            document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
        }, 1000);


        // ==========================================
        // LOGIKA ADD TO CALENDAR
        // ==========================================
        window.addToCalendar = function() {
            const title = encodeURIComponent(CONFIG.text.namaPasangan + " - Akad Nikah");
            const details = encodeURIComponent("Acara bertempat di " + akad.location);
            const location = encodeURIComponent(akad.address);
            
            // Ubah bulan dari teks ("juli") jadi angka ("07") untuk Google Calendar
            const bulanAngka = (bulanIndex[akad.month.toLowerCase()] + 1).toString().padStart(2, '0');
            const tanggalAngka = akad.date.toString().padStart(2, '0');
            const tahunAngka = akad.year;

            // Format waktu Google Calendar (YYYYMMDDTHHMMSSZ)
            // Karena waktu WITA (UTC+8), Jam 08:00 WITA = Jam 00:00 UTC
            // Jam 10:00 WITA = Jam 02:00 UTC
            const startTime = `${tahunAngka}${bulanAngka}${tanggalAngka}T000000Z`;
            const endTime = `${tahunAngka}${bulanAngka}${tanggalAngka}T020000Z`;
            
            const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
            
            // Buka Google Calendar di tab baru
            window.open(url, '_blank');
        };
    });

    // 16. wedding gift
    if (CONFIG.gift) {
        document.getElementById('gift-desc').innerText = CONFIG.gift.description;
        const bankContainer = document.getElementById('bank-cards-container');
        
        // Looping untuk membuat kartu sebanyak rekening yang ada di config
        CONFIG.gift.banks.forEach(bank => {
            const card = document.createElement('div');
            card.className = 'bank-card';
            card.innerHTML = `
                <div class="bank-name">${bank.name}</div>
                <div class="bank-account">${bank.account}</div>
                <div class="bank-recipient">a.n ${bank.recipient}</div>
                <button class="copy-btn" onclick="copyAccount('${bank.account}', this)">
                    <i class="fas fa-copy"></i> Salin Rekening
                </button>
            `;
            bankContainer.appendChild(card);
        });
    }