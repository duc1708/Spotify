
const $ = document.querySelector.bind(document)
const title = $('title')
const songList = $('.songList')
const singerList = $('.list_singer')
const cdThumb = $('.cd-thumb')
const nameSong = $('#nameSong')
const nameSinger = $('#nameSinger')
const audio = $('#audio')
const btnPlay = $('.btn-toggle-play')
const player = $('.player')
const nextSong = $('.btn-next')
const prevSong = $('.btn-prev')
const progress = $("#progress")
const randomBtn = $(".btn-random")
const repeatBtn = $('.btn-repeat')
const center = $('.center')
const singers_notfollow = $('.singers_notfollow')
const right = $('.right')
const home = $('#home')
const app = {
    currentIndex : 0,
    isPlaying: false,
    isRandom : false,
    isRepeat: false,
    albums:[
        {
            nameAlbum:'Album Leangue of Legends',
            img: 'assets/images/img_songs/album_lol.jpg',
            audio:'assets/sound/songs/y2mate.com - Top Những Bản Nhạc Chung Kết Thế Giới LOL legend of league  TTP Tv.mp3'
        },
        {
            nameAlbum:'Music Edm',
            img: 'assets/images/img_songs/edm.jpg',
            audio:'assets/sound/songs/y2mate.com -  List Nhạc CỰC TRUYỀN ĐỘNG LỰC  Mashup Fake Love  7 Years  Tracklist Nhạc Hot Trong Tháng 4 .mp3'
        },
        {
            nameAlbum:'Album of Central Cee',
            img: 'assets/images/img_songs/album_centralcee.jpg',
            audio:'assets/sound/songs/y2mate.com - Central Cee  King of Rap music  Latest playlist  20 SUPER HITS OF CENTRAL CEE 2024 centralcee.mp3'
        }
    ],

    singers : [
        {
            name:'SonTung',
            img :'assets/images/img_singers/sontung.jpg'
        },
        {
            name:'Tlinh',
            img :'assets/images/img_singers/tlinh.jpg'
        },
        {
            name:'Obito',
            img :'assets/images/img_singers/obito.jpg'
        },
        {
            name:'Soobin',
            img: 'assets/images/img_singers/soobin.jpg'
        }
    ],

centerSongs : [
        {
            nameSong: "Nến và hoa",
            img : 'assets/images/img_songs/nenvahoa.jpg',
            audio: "assets/sound/centerSongs/y2mate.com - Rhymastic  Nến Và Hoa Official Audio.mp3",
            singer: 'Rhymastic'
        },
        {
            nameSong: "Vết mưa",
            img : 'assets/images/img_songs/vetmua.jpg',
            audio: "assets/sound/centerSongs/y2mate.com - MV Vết Mưa  Vũ Cát Tường.mp3",
            singer: 'Vũ Cát Tường'
        },
        {
            nameSong: "Buông đôi tay nhau ra",
            img : 'assets/images/img_songs/buongdoitaynhaura.jpg',
            audio: "assets/sound/centerSongs/y2mate.com - Buông Đôi Tay Nhau Ra  OFFICIAL MUSIC VIDEO  Sơn Tùng MTP (1).mp3",
            singer: 'SonTung'
        },
        {
            nameSong: "GBR/GOODBYE ROCKY",
            img : 'assets/images/img_songs/rocky.jpg',
            audio: "assets/sound/centerSongs/y2mate.com - GBRGOODBYE ROCKY  TRẦN LẢ LƯỚT PROD BY DONAL  OFFICIAL MV.mp3",
            singer: 'Trần Lả Lướt'
        },  
        {
            nameSong: "Phía sau em",
            img : 'assets/images/img_songs/phiasauem.jpg',
            audio: "assets/sound/centerSongs/y2mate.com - Phía Sau Em  Kay Trần  Solo Ver  MV Lyrics.mp3",
            singer: 'Kayn Trần'
        },
        {
            nameSong: "Ghé qua",
            img : 'assets/images/img_songs/ghequa.jpg',
            audio: "assets/sound/centerSongs/y2mate.com - Ghé Qua  Dick x Tofu x PC Official Audio.mp3",
            singer: 'Dick'
        },
        {
            nameSong: "Sự thật sau một lời hứa",
            img : 'assets/images/img_songs/suthatsaumotloihua.jpg',
            audio: "assets/sound/centerSongs/y2mate.com - Sự thật sau một lời hứa  Chi Dân Lyrics.mp3",
            singer: 'Chi Dân'
        },
    ],

    
    songs : [
        {
            nameSong: "Hà nội",
            img : 'assets/images/img_songs/hanoi.jpg',
            audio: "assets/sound/songs/y2mate.com - Obito  Hà Nội ft VSTRA.mp3",
            singer: 'Obito',
        },
        {
            nameSong: "Đánh đổi",
            img : 'assets/images/img_songs/danhdoi.jpg',
            audio: "assets/sound/songs/y2mate.com - Obito  Đánh Đổi ft MCK.mp3",
            singer: 'Obito'
        },
        {
            nameSong: "Ngày mai",
            img : 'assets/images/img_songs/ngaymai.jpg',
            audio: "assets/sound/songs/y2mate.com - NGÀY MAI LÀ TƯƠNG LAI feat Obito.mp3",
            singer: 'Obito'
        },
        {
            nameSong: "Lạc trôi",
            img : 'assets/images/img_songs/lactroi.jpg',
            audio: "assets/sound/songs/y2mate.com - LẠC TRÔI  OFFICIAL MUSIC VIDEO  SƠN TÙNG MTP_360p.mp4",
            singer: 'SonTung'
        },
        {
            nameSong: "Đừng làm trái tim anh đau",
            img : 'assets/images/img_songs/dunglamtraitimanhdau.jpg',
            audio: "assets/sound/songs/y2mate.com - DUCBUI REMIX ĐỪNG LÀM TRÁI TIM ANH ĐAU  SƠN TÙNG MTP.mp3",
            singer: 'SonTung'
        },
        {
            nameSong: "Chúng ta của tương lai",
            img : 'assets/images/img_songs/chungtacuatuonglai.jpg',
            audio: "assets/sound/songs/y2mate.com - SƠN TÙNG MTP  CHÚNG TA CỦA TƯƠNG LAI  OFFICIAL MUSIC VIDEO_360p.mp4",
            singer: 'SonTung'
        },
        {
            nameSong: "There no one at all",
            img : 'assets/images/img_songs/therenooneatall.jpg',
            audio: "assets/sound/songs/y2mate.com - THERES NO ONE AT ALL.mp3",
            singer: 'SonTung'
        },

        {
            
            nameSong: "Nếu lúc đó",
            img : 'assets/images/img_songs/neulucdo.jpg',
            audio: "assets/sound/songs/y2mate.com - tlinh  nếu lúc đó ft 2pillz  OFFICIAL MUSIC VIDEO.mp3",
            singer: 'Tlinh'
        },
        {
            nameSong: "Vài câu nói",
            img : 'assets/images/img_songs/vaicaunoi.jpg',
            audio: "assets/sound/songs/y2mate.com - GREY D x tlinh  vaicaunoicokhiennguoithaydoi  Official Music Video.mp3",
            singer: 'Tlinh'
        },
        {
            nameSong: "Chỉ một đêm nữa thôi",
            img : 'assets/images/img_songs/chimotdem.jpg',
            audio: "assets/sound/songs/y2mate.com - MCK TLINH  CHỈ MỘT ĐÊM NỮA THÔI   LIVE BUJI CLUB by 8849Studio .mp3",
            singer: 'Tlinh'
        },
        {
            nameSong: "Giá như",
            img : 'assets/images/img_songs/gianhu.jpg',
            audio: "assets/sound/songs/y2mate.com - SOOBIN  giá như  Official MV.mp3",
            singer: 'Soobin'
        },
        {
            nameSong: "Tháng năm",
            img : 'assets/images/img_songs/thangnam.jpg',
            audio: "assets/sound/songs/y2mate.com - SOOBIN  THÁNG NĂM Official Music Video.mp3",
            singer: 'Soobin'
        },
        {
            nameSong: "Xin đừng lặng im",
            img : 'assets/images/img_songs/xindunglangim.jpg',
            audio: "assets/sound/songs/y2mate.com - SOOBIN HOÀNG SƠN  XIN ĐỪNG LẶNG IM  Lyrics Video.mp3",
            singer: 'Soobin'
        },
        {
            nameSong: "Phía sau một cô gái",
            img : 'assets/images/img_songs/phiasaumotcogai.jpg',
            audio: "assets/sound/songs/y2mate.com - Phía Sau Một Cô Gái  Soobin Hoàng Sơn Official Music Video 4K.mp3",
            singer: 'Soobin'
        },
        {
            nameSong: "Anh đã quen với cô đơn",
            img : 'assets/images/img_songs/anhdaquenvoicodon.jpg',
            audio: "assets/sound/songs/y2mate.com - Anh Đã Quen Với Cô Đơn  Soobin Hoàng Sơn  Official Music Video 4K.mp3",
            singer: 'Soobin'
        },
        {
            nameSong: "Fake Love",
            img : 'assets/images/img_songs/fakelove.jpg',
            audio: "assets/sound/songs/y2mate.com - Fake Love  방탄소년단 BTS  Orchestral Cover  MDP.mp3",
            singer: 'V Bts'
        },
        {
            nameSong: "Save Me",
            img : 'assets/images/img_songs/saveme.jpg',
            audio: "assets/sound/songs/y2mate.com - BTS 방탄소년단 Save ME Official MV (1).mp3",
            singer: 'V Bts'
        },
        {
            nameSong: "Haru Haru",
            img : 'assets/images/img_songs/haru.jpg',
            audio: "assets/sound/songs/y2mate.com - BIGBANG  HARU HARU하루하루 MV.mp3",
            singer: 'V Bts'
        },
        {
            nameSong: "Yêu một người vô tâm",
            img : 'assets/images/img_songs/yeumotnguoivotam.jpg',
            audio: "assets/sound/songs/y2mate.com - Yêu Một Người Vô Tâm  Bảo Anh Official Audio.mp3",
            singer: 'Bảo Anh'
        },
        {
            nameSong: "Sống xa anh chẳng dễ dàng",
            img : 'assets/images/img_songs/songxaanhchangdedang.jpg',
            audio: "assets/sound/songs/y2mate.com - Sống Xa Anh Chẳng Dễ Dàng  Lyrics Video  Bảo Anh ft Mr Siro.mp3",
            singer: 'Bảo Anh'
        },
        {
            nameSong: "Anh muốn xem sống sao",
            img : 'assets/images/img_songs/anhmuonemsongsao.jpg',
            audio: "assets/sound/songs/y2mate.com - Anh Muốn Em Sống Sao  Bảo Anh  Official MV.mp3",
            singer: 'Bảo Anh'
        },
        {
            nameSong: "Trái tim em cũng biết đau",
            img : 'assets/images/img_songs/traitimemcungbietdau.jpg',
            audio: "assets/sound/songs/y2mate.com - Bảo Anh  Trái Tim Em Cũng Biết Đau ft Mr Siro Lyric Video.mp3",
            singer: 'Bảo Anh'
        },
        {
            nameSong: "That should be me",
            img : 'assets/images/img_songs/thatshouldbeme.jpg',
            audio: "assets/sound/songs/y2mate.com - Justin Bieber  That Should Be Me.mp3",
            singer: 'Justin Bieber'
        },
        {
            nameSong: "Baby",
            img : 'assets/images/img_songs/baby.jpg',
            audio: "assets/sound/songs/y2mate.com - Justin Bieber  Baby Lyrics ft Ludacris.mp3",
            singer: 'Justin Bieber'
        },
        {
            nameSong: "Despacito",
            img : 'assets/images/img_songs/despacito.jpg',
            audio: "assets/sound/songs/y2mate.com - Luis Fonsi Daddy Yankee  Despacito Audio ft Justin Bieber.mp3",
            singer: 'Justin Bieber'
        },
        {
            nameSong: "Stay",
            img : 'assets/images/img_songs/stay.jpg',
            audio: "assets/sound/songs/y2mate.com - The Kid LAROI Justin Bieber  Stay Lyrics.mp3",
            singer: 'Justin Bieber'
        },
        {
            nameSong: "Giàu vì bạn sang vì vợ",
            img : 'assets/images/img_songs/giauvibansangvivo.jpg',
            audio: "assets/sound/songs/y2mate.com - Giàu Vì Bạn Sang Vì Vợ feat RPT MCK.mp3",
            singer: 'MCK RPT'
        },
        {
            nameSong: "Va vào giai điệu này",
            img : 'assets/images/img_songs/vavaogiaidieu.jpg',
            audio: "assets/sound/songs/y2mate.com - 04 Va Vào Giai Điệu Này  RPT MCK  99 the album.mp3",
            singer: 'MCK RPT'
        },
        {
            nameSong: "Thủ đô",
            img : 'assets/images/img_songs/thudo.jpg',
            audio: "assets/sound/songs/y2mate.com - Thủ Đô Cypher  BeckStage X Bitis Hunter  RPT Orijinn LOW G RZMas RPT MCK.mp3",
            singer: 'MCK RPT'
        },
        {
            nameSong: "Faded",
            img : 'assets/images/img_songs/faded.jpg',
            audio: "assets/sound/songs/y2mate.com - Alan Walker  Faded.mp3",
            singer: 'Alan Walker'
        },
        {
            nameSong: "On my way",
            img : 'assets/images/img_songs/onmyway.jpg',
            audio: "assets/sound/songs/y2mate.com - Alan Walker Sabrina Carpenter  Farruko   On My Way.mp3",
            singer: 'Alan Walker'
        },
        {
            nameSong: "Darkside",
            img : 'assets/images/img_songs/darkside.jpg',
            audio: "assets/sound/songs/y2mate.com - Alan Walker  Darkside feat AuRa and Tomine Harket.mp3",
            singer: 'Alan Walker'
        },
        {
            nameSong: "Sing me to sleep",
            img : 'assets/images/img_songs/singmetosleep.jpg',
            audio: "assets/sound/songs/y2mate.com - Alan Walker  Sing Me To Sleep.mp3",
            singer: 'Alan Walker'
        },

    ],
    filteredSongs: [], // Danh sách bài hát đã lọc theo ca sĩ
    singersNotFollow: [
        {
            name: 'V Bts',
            img: 'assets/images/img_singers/v.jpg'
        },
        {
            name: 'MCK RPT',
            img: 'assets/images/img_singers/mck.jpg'
        },
        {
            name: 'Justin Bieber',
            img: 'assets/images/img_singers/justin.jpg'
        },
        {
            name: 'Hiền Hồ',
            img: 'assets/images/img_singers/hienho.jpg'
        },
        {
            name: 'Alan Walker',
            img: 'assets/images/img_singers/alanwalker.jpg'
        },
        {
            name:'Bảo Anh',
            img : 'assets/images/img_singers/baoanh.jpg',
        }
    ],
    renderSongs : function(songsList){
        const htmls = songsList.map((song,index) => {
            return  `
               <div class="song ${index === this.currentIndex ? 'active': ''} " data-index = "${index}" >
                    <img src="${song.img}" >
                    <div><p style="font-size:20px">${song.nameSong}</p>
                        <i style="color:#fff">${song.singer}</i></div>   
                   <div class= "option">
                        <i style="color:#fff; margin-top: 10px;" class = "fas fa-ellipsis-h"></i>
                    </div>
               </div>
               `
       });
       songList.innerHTML = htmls.join('')
    },

    renderAlbums: function(){
        const htmls = this.albums.map(function(album,index){
            return `
                <div style="margin: 10px 10px 10px 10px;" class="albums ${index === this.currentIndex ? 'active': ''} " data-index = "${index}">
                  <img style="width: 100%;" src="${album.img}" alt="">
                  <p style="text-align: center;">${album.nameAlbum}</p>
                </div>
            `
        })
        right.innerHTML = htmls.join('')
    },

    renderSingers : function(){
        const htmls = this.singers.map(function(singer) {
           
            return  `
                <div id="chooseSinger"  class="singer" name ="${singer.name}" img = "${singer.img}">
                    <img  src="${singer.img}" alt="">
                    <p>${singer.name}</p>
                </div>
               `
       });
       singerList.innerHTML = htmls.join('')
    },

    renderSingersNotFollow : function(){
        const htmls = this.singersNotFollow.map(function(singer) {
           
            return  `
                <div style="width: 25%; margin-right: 50px;" class="box_singer">
                    <img id="avt" style="width: 100%;" src="${singer.img}" alt="">
                    <p  id="namesinger">${singer.name}</p>
                    <button class="addSinger" name="${singer.name}" img="${singer.img}">Follow</button>
                </div>
               `
       });
       singers_notfollow.innerHTML = htmls.join('')
    },

    handleEvents : function(){
        const _this = this
        const singerDivs = document.querySelectorAll('.singer');
        const addSinger = document.querySelectorAll(".addSinger")
        const albums = document.querySelectorAll(".albums")
        // Thêm ca sĩ
        addSinger.forEach(function(btn) {
            btn.onclick = function(){
                const nameSingerFollow = this.getAttribute('name');
                const avtSinger = this.getAttribute('img');  
                let newSinger = {
                    name: nameSingerFollow,
                    img: avtSinger
                };
                _this.singers.push(newSinger)
                _this.renderSingers()
                _this.handleEvents(); 
            }
        });

        // Gắn sự kiện click cho từng thẻ <div>
        singerDivs.forEach(function(div) {
                div.onclick = function() {
                    const name = this.getAttribute('name');
                    console.log(name)
                    const img = this.getAttribute('img');                
                    center.style.backgroundImage = `url('${img}')`;
                    _this.filteredSongs = _this.songs.filter(song => song.singer === name);
                    _this.renderSongs(_this.filteredSongs);
                    title.innerHTML = `Song of ${name}`
                };
        });
        
        
        // Xử lý sự kiện khi nghe nhạc
        btnPlay.onclick = function(){
            if(_this.isPlaying){
                audio.pause()
            }else{
                audio.play()
            }
        }

        // Khi audio đang chạy, thì nút bấm sẽ đang playing
        audio.onplay = function(){
            _this.isPlaying = true
            player.classList.add('playing');
            cdThumbAnimate.play()
        }
        // Nếu audio dừng thì nút bấm sẽ là dừng

        audio.onpause = function(){
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

       // Next song
        nextSong.onclick = function(){
            if(_this.isRandom){
                _this.randomSong()
            }else{
                _this.nextSong()
            }
            
            audio.play()
            _this.renderSongs()
        }
        // Prev song
        prevSong.onclick = function(){
            if(_this.isRandom){
                _this.randomSong()
            }else{
                _this.prevSong()
            }
            audio.play()
            _this.renderSongs()
        }

        randomBtn.onclick = function(){
            randomBtn.classList.add('active')
        }

        randomBtn.onclick = function(){
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active',_this.isRandom)
        }

        repeatBtn.onclick = function(){
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active',_this.isRepeat)
        }

        // Xử lý khi hết bài
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play()
            }else{
                nextSong.click()
            }
        }

         // Xử lý khi click vào bài hát
        songList.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)');
            console.log(songNode)
            if (songNode || e.target.closest('.option')) {
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    audio.play();
                    _this.renderSongs(_this.filteredSongs.length > 0 ? _this.filteredSongs : _this.centerSongs);
                }
            }
        };
        // Xử lý khi click vào nghe nhạc của album
        right.onclick = function(e){
            const songNode = e.target.closest('.albums:not(.active)');
            console.log(songNode)
            const currentSongList = _this.albums;
            _this.currentIndex = Number(songNode.dataset.index);
            nameSong.textContent = currentSongList[_this.currentIndex].nameAlbum;
            console.log(currentSongList[Number(songNode.dataset.index)].nameAlbum)
            cdThumb.style.backgroundImage = `url('${currentSongList[_this.currentIndex].img}')`;
            audio.src = currentSongList[_this.currentIndex].audio;
            audio.play()
        },
        // Xử lý khi ấn home quay lại trang chủ
        home.onclick = function(){
            _this.renderSongs(_this.centerSongs)
            center.style.backgroundImage = `url('https://manybackgrounds.com/images/hd/spotify-neon-green-sw8td453uh40k0j7.jpg')`;
        }
        // Khi tiến độ  bài hát thay đổi
        audio.ontimeupdate = function(){
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent;
            }
        }
            // Xử lý khi tua nhạc
        progress.onchange = function(e){
            audio.currentTime = e.target.value * audio.duration / 100
        }
         // Xử lý CD quay / dừng
        const cdThumbAnimate = cdThumb.animate(
            [
                { transform: 'rotate(0deg)' },
                { transform: 'rotate(360deg)' }
            ],
            {
                duration: 20000, // thay đổi duration thành 20000 để quay trong vòng 20 giây
                iterations: Infinity
            }
        );
        cdThumbAnimate.pause()
    },
    
    nextSong : function(){
        this.currentIndex++
        const currentSongList = this.filteredSongs.length > 0 ? this.filteredSongs : this.centerSongs;
        console.log(currentSongList.length)
        if(this.currentIndex>= currentSongList.length){
            this.currentIndex = 0
        }
        
        this.loadCurrentSong()
        audio.play()
    },

    prevSong : function(){
        this.currentIndex--
        const currentSongList = this.filteredSongs.length > 0 ? this.filteredSongs : this.centerSongs;
        if(this.currentIndex < 0){
            this.currentIndex =  currentSongList.length -1
        }
        this.loadCurrentSong()
        audio.play()
    },

    randomSong : function(){
        let newIndex;
        do{
            newIndex = Math.floor(Math.random() * this.centerSongs.length)
        }while(newIndex ===this.currentIndex)
        this.currentIndex = newIndex

        this.loadCurrentSong()
    },

    defineProperties: function(){
        Object.defineProperty(this, 'currentSong', {
            get:function(){
                return this.centerSongs[this.currentIndex]
            }
        })
    },

    // Xử lý load song ở phần Audio Song
    loadCurrentSong: function() {
        const currentSongList = this.filteredSongs.length > 0 ? this.filteredSongs : this.centerSongs;
        nameSong.textContent = currentSongList[this.currentIndex].nameSong;
        nameSinger.textContent = currentSongList[this.currentIndex].singer;
        cdThumb.style.backgroundImage = `url('${currentSongList[this.currentIndex].img}')`;
        audio.src = currentSongList[this.currentIndex].audio;
        console.log(audio.src)
    },
    start : function(){
        this.defineProperties()
        this.loadCurrentSong()
        this.renderSongs(this.centerSongs)
        this.renderAlbums()
        this.renderSingers()
        this.renderSingersNotFollow()
        this.handleEvents()
    }
}

app.start()