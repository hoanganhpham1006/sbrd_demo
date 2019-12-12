function appendText(image_url, title, link) {
    $(".sidebar.columns").append('<div class="column post-related post type-post status-publish format-standard has-post-thumbnail hentry"><div class="image_frame scale-with-grid"><div class="image_wrapper"><a href=*link*><div class="mask"></div><img width="400" height="240" src="'+image_url+'" class="scale-with-grid wp-post-image" alt="" itemprop="image" srcset="'+image_url+' 400w, '+image_url+' 300w, '+image_url+' 243w, '+image_url+' 50w, '+image_url+' 125w" sizes="(max-width: 400px) 100vw, 400px"></a><div class="image_links double"><a href="'+image_url+'" class="zoom" rel="prettyphoto"><i class="icon-search"></i></a><a href="'+link+'" class="link"><i class="icon-link"></i></a></div></div></div><div class="desc"><h4><a href="'+link+'">'+title+'</a></h4><hr class="hr_color"></div></div>');      // Append the new elements
    $(".sidebar.columns").append('<br>')
}
console.log(window.location.href);
// document.open();
// document.write("<h1>Out with the old - in with the new!</h1>");
// document.close();
$(".sections_group").css('float', 'left');
$(".sections_group").css('width', '70%');
$(".sidebar.columns").css('width', '30%');
$(".sidebar.columns").css('background-color', 'white');
$(".sidebar.columns").css('border', '2px solid red');
$(".sidebar.columns").html("<h4 style='padding-top:30px; text-align:center; color:red;'>RECOMMENDED ITEMS</h4>");
// $(".with_aside").css('float', 'left');

appendText("http://portal.ptit.edu.vn/wp-content/uploads/2019/11/IMG_3975-min-1024x686.jpg", "BỘ TRƯỞNG NGUYỄN MẠNH HÙNG CHÚC MỪNG HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG NHÂN NGÀY NHÀ GIÁO VIỆT NAM", "http://portal.ptit.edu.vn/bo-truong-nguyen-manh-hung-chuc-mung-hoc-vien-cong-nghe-buu-chinh-vien-thong-nhan-ngay-nha-giao-viet-nam/")
appendText("http://portal.ptit.edu.vn/wp-content/uploads/2019/11/IMG_3975-min-1024x686.jpg", "BỘ TRƯỞNG NGUYỄN MẠNH HÙNG CHÚC MỪNG HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG NHÂN NGÀY NHÀ GIÁO VIỆT NAM", "http://portal.ptit.edu.vn/bo-truong-nguyen-manh-hung-chuc-mung-hoc-vien-cong-nghe-buu-chinh-vien-thong-nhan-ngay-nha-giao-viet-nam/")
appendText("http://portal.ptit.edu.vn/wp-content/uploads/2019/11/IMG_3975-min-1024x686.jpg", "BỘ TRƯỞNG NGUYỄN MẠNH HÙNG CHÚC MỪNG HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG NHÂN NGÀY NHÀ GIÁO VIỆT NAM", "http://portal.ptit.edu.vn/bo-truong-nguyen-manh-hung-chuc-mung-hoc-vien-cong-nghe-buu-chinh-vien-thong-nhan-ngay-nha-giao-viet-nam/")