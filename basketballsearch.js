const danhsach = {
    "danh_sach": [{
            "ten": "Giannis Antetokounmpo",
            "hinh_anh": "./xep-hang-top-10-cau-thu-10.jpg",
            "doi_bong": " Milwaukee Bucks",
            "vi_tri": "Small Forward",
            "xep_hang_mua_truoc": 4,
            "mo_ta": "Có một cuộc đua MVP 2018-2019 ngang tài ngang sức với James Harden, nhưng Antetokoumnpo vẫn chứng tỏ được mình xứng đáng hơn người xếp suýt soát ở vị trí thứ 2. Giờ đây đã có trong tay danh hiệu cá nhân cao quý nhất, The Greak Freak phải đối mặt với kì vọng to lớn mà người hâm mộ và đồng đội đặt vào anh và biến nó thành động lực để đạt được cột mốc lớn tiếp theo mà anh đặt ra, vô địch NBA."
        },
        {
            "ten": "Kawhi Leonar",
            "hinh_anh": "hi-res-e9ae20397fcf0257ea9dd4f141aff7d5_crop_north (1).jpg",
            "doi_bong": " LA Clipper",
            "vi_tri": "SG/SF",
            "xep_hang_mua_truoc": 6,
            "mo_ta": "Là nhà vô địch NBA năm trước , là nhân tố chính hạ bệ đế chế GSW.Là một người điềm đạm ít cười với lối đánh sát thủ mà mạnh mẽ"
        
        },
        {
            "ten": "Athony Davis",
            "hinh_anh": "hi-res-bb61cc6d9ff672fdde0b786262bd4c27_crop_north.jpg",
            "doi_bong": " LA Laker",
            "vi_tri": "SF/PF",
            "xep_hang_mua_truoc": 7,
            "mo_ta": "Là một trong những trung phong hay nhất thời điểm hiện tại và đang là cặp đôi song sát đâng khuấy đẩo NBA cùng với Lebron James"
        },
        {
            "ten": "Lebron James",
            "hinh_anh": "xep-hang-top-10-cau-thu-8.jpg",
            "doi_bong": " LA Laker",
            "vi_tri": "PG/SG/SF/PF/C",
            "xep_hang_mua_truoc": 2,
            "mo_ta": "King of the NBA là biệt hiệu của lebron james . Mặc dù không còn trẻ nhưng mà lối đánh vẫn rất hiệu quả và mạnh mẽ . Được mọi người trên toàn thế giới yêu quý vì không những chơi bóng rổ hả mà con là một người cha tốt và đóng góp nhiều cho xã hội và quê hương của mình."
        },
        {
            "ten": "Stephen Curry",
            "hinh_anh": "xep-hang-top-10-cau-thu-5.jpg",
            "doi_bong": " Golden State Warriors",
            "vi_tri": "PG/SG",
            "xep_hang_mua_truoc": 5,
            "mo_ta": "Là xạ thủ hay nhất mọi thời đại .Có 3 lần vô địch NBA và 2 lần đạt danh hiệu danh giá nhất NBA (MVP).Người mà làm thay đổi toàn bộ cuc diện và lối chơi của NBA ."
        },
        {
            "ten": "James Harden",
            "hinh_anh": "xep-hang-top-10-cau-thu-7.jpg",
            "doi_bong": " Houston Rocket",
            "vi_tri": "PG/SG/SF",
            "xep_hang_mua_truoc": 3,
            "mo_ta": "Được mệnh danh là thần râu của NBA, trong những năm qua là cầu thủ tấn công hay nhất NBA và từng được nhận MVP 2018"
        },
        {
            "ten": "Michael Jordan",
            "hinh_anh": "michael-jordan (1).jpg",
            "doi_bong": " Chicago Bull",
            "vi_tri": "PG/SG/SF/PF/C",
            "xep_hang_mua_truoc": "Đã giải nghệ",
            "mo_ta": "Michael Jeffrey Jordan là tên đầy đủ của ông. Ông là cầu thủ bóng rổ hay nhất mọi thời đai của NBA và trên toàn thế giới "
        },
        {
            "ten": "Kobe Bryant",
            "hinh_anh": "kobe-bryant-1999-lakers-billboard-650.jpg",
            "doi_bong": " LA Laker",
            "vi_tri": "PG/SG/SF/PF",
            "xep_hang_mua_truoc": "Đã giải nghệ",
            "mo_ta": " Ông là môt trong những cầu thủ bóng rổ huyền thoại nhất NBA và trên trên thế giới.Với môt tình yêu bất diệt với đội bóng vàng tím và 2 số áo 8 và 24 trở thành huyên thoại cùng ông.  "
        },
        {
            "ten": "Luka Doncic",
            "hinh_anh": "download (1).jpeg",
            "doi_bong": " Dallas Mavericks",
            "vi_tri": "PG/SG/SF/PF",
            "xep_hang_mua_truoc": "Rokie of the year",
            "mo_ta": " Là một trong những ứng cử viên MVP mặc dù tuổi đời còn rất trẻ nhưng tài năng đã sớm được bộc lộ . Là ngôi sao mai của NBA và là người được kỳ vọng phá nhiều kỷ lục như Lebron James "
        },
    ]

}
let timkiem = document.getElementById("timkiem");
timkiem.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        let obj;
        let result = document.getElementById("search")
        result.innerHTML = `<div align="center">
        <h1 style="text-align: center;">Kết quả bạn tìm kiếm :<span id="timkiemnba"> </span></h1>
        <h2 id="tenNBA"></h2>
        <div id="border-img" style="padding: 3px;">
            <center>
                <div id="hinhanh"></div>
            </center>
        </div>
        <span>
            <br>
            <div id="tendoibong"></div>
            <br>
            <div id="vitri"></div>
            <br>
            <div id="xephang"></div>
            <br>
            <div id="mieuta"></div>
        </span>
    </div>`;
        for (let i in danhsach.danh_sach) {
            if (timkiem.value == danhsach.danh_sach[i].ten) {
                obj = danhsach.danh_sach[i];
            }
        }
        let clear = document.getElementById("clear")
        clear.style.display = "none";
        let timkiemnba = document.getElementById("timkiemnba")
        timkiemnba.innerHTML = timkiem.value;
        let border = document.getElementById("border-img")
        border.style.display = "none";
        if (obj) {
            search_ok(obj);
        } else {
            alert("Bạn phải ghi đầy đủ tên cầu thủ và ghi hoa chữ cái đầu tiên,Nếu vẫn không được nghĩa là chúng tôi đang cập nhật thêm tên ")
        }
    }
});

function search_ok(obj) {



    let tennba = document.getElementById("tenNBA")
    tennba.innerHTML = "Tên cầu thủ :" + obj.ten;

    let border = document.getElementById("border-img")
    border.style.display = "block";
    let hinhanhnba = document.getElementById("hinhanh")
    hinhanhnba.innerHTML = `<img src='${obj.hinh_anh}'>`;

    let tenDOInba = document.getElementById("tendoibong")
    tenDOInba.innerHTML = "<strong>Tên đội bóng :</strong>" + obj.doi_bong;

    let vitrinba = document.getElementById("vitri")
    vitrinba.innerHTML = "<strong>Vị trí :</strong>" + obj.vi_tri;

    let xephangnba = document.getElementById("xephang")
    xephangnba.innerHTML = "<strong>Xếp hạng mùa trước :</strong>" + obj.xep_hang_mua_truoc;



    let mieutanba = document.getElementById("mieuta")
    mieutanba.innerHTML = "<strong>Miêu tả :</strong> <br>" + obj.mo_ta;











};