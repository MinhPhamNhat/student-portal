const socket = io.connect("http://localhost:8080");
(function($) {
    "use strict";

    $(".msg-trigger-btn").on("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        var $this = $(this);
        var $prevTartget = $(this).parent().siblings().children(".msg-trigger-btn").attr('href');
        var target = $this.attr('href');
        $(target).slideToggle();
        $($prevTartget).slideUp();

    });

    //Close When Click Outside
    $('body').on('click', function(e) {
        var $target = e.target;
        if (!$($target).is('.message-dropdown') && !$($target).parents().is('.message-dropdown')) {
            $(".message-dropdown").slideUp("slow");
        }
    });

    //Background Image JS start
    var bgSelector = $(".bg-img");
    bgSelector.each(function(index, elem) {
        var element = $(elem),
            bgSource = element.data('bg');
        element.css('background-image', 'url(' + bgSource + ')');
    });

    // active profile carousel js
    $('.active-profile-carousel').slick({
        speed: 800,
        slidesToShow: 10,
        prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left-rounded"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right-rounded"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 8,
                }
            }
        ]
    });

    // active profile carousel js
    $('.active-profile-mobile').slick({
        speed: 800,
        slidesToShow: 6,
        arrows: false,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
            }
        }]
    });

    // active profile carousel js
    $('.favorite-item-carousel').slick({
        autoplay: true,
        speed: 800,
        slidesToShow: 5,
        arrows: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    // live chat box and friend search box active js
    $(".profile-active").on('click', function() {
        $(".chat-output-box").addClass('show');
    })
    $(".search-field").on('click', function() {
        $(".friend-search-list").addClass('show');
    })
    $(".close-btn").on('click', function() {
        var $this = $(this),
            $target = $this.data('close');
        $('.' + $target).removeClass('show');
    })

    // mobile header seach box active
    $(".search-trigger").on('click', function() {
        $('.search-trigger, .mob-search-box').toggleClass('show');
    })

    $(".chat-trigger, .close-btn").on('click', function() {
        $('.mobile-chat-box').toggleClass('show');
    })
    $(".request-trigger1").on('click', function() {
        $('.portal-request-list').removeClass('show');
        $('.frnd-request-list').toggleClass('show');
    })

    $(".request-trigger2").on('click', function(event) {
        $('.frnd-request-list').removeClass('show');
        $('.portal-request-list').toggleClass('show');
    })

    // mobile friend search active js
    $(".search-toggle-btn").on('click', function() {
        $('.mob-frnd-search-inner').toggleClass('show');
    })

    // profile dropdown triger js
    $('.profile-triger').on('click', function(event) {
        event.stopPropagation();
        $(".profile-dropdown").slideToggle();
    })

    //Close When Click Outside
    $('body').on('click', function(e) {
        var $target = e.target;
        if (!$($target).is('.profile-dropdown') && !$($target).parents().is('.profile-dropdown')) {
            $(".profile-dropdown").slideUp("slow");
        }
    });

    // perfect scroll bar js
    $('.custom-scroll').each(function() {
        var ps = new PerfectScrollbar($(this)[0]);
    });


    // light gallery active js
    $(document).ready(function() {
        $(".img-popup").lightGallery();

        // light gallery images
        $(".img-gallery").lightGallery({
            selector: ".gallery-selector",
            hash: false
        });
    });

    $('.gallery-toggle').on('click', function() {

        var productThumb = $(this).find(".product-thumb-large-view img"),
            imageSrcLength = productThumb.length,
            images = [];
        for (var i = 0; i < imageSrcLength; i++) {
            images[i] = { "src": productThumb[i].src, "thumb": productThumb[i].src };
        }

        $(this).lightGallery({
            dynamic: true,
            actualSize: false,
            hash: false,
            index: 0,
            dynamicEl: images
        });

    });

    // photo filter active js
    $('.photo-filter').imagesLoaded(function() {
        var $grid = $('.photo-filter, .friends-list').isotope({});
        // filter items on button click
        $('.filter-menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
        });

    });

    // nice select active js
    $('select').niceSelect();

    // Scroll to top active js
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 600) {
            $('.scroll-top').removeClass('not-visible');
        } else {
            $('.scroll-top').addClass('not-visible');
        }
    });
    $('.scroll-top').on('click', function(event) {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });


    $('#email').bind("cut copy paste", function(e) {
        e.preventDefault();
    });


})(jQuery);


const newPost = (value) => `
<!-- post status start -->
<div class="post-card">
                <div class="row d-flex align-items-center justify-content-center">
                        <div class="card">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex flex-row align-items-center"> <img src="${ value.author.picture }" width="50" class="rounded-circle">
                                    <div class="d-flex flex-column ml-2"> <span class="font-weight-bold">${ value.author.name }</span> <small class="text-primary">Collegues</small> </div>
                                </div>
                                <div class="ellipsis"> <small class="time">${ value.date }</small> <i class="fa fa-ellipsis-h"></i> </div>
                            </div> 
                        </br>
                                <p class="text-justify">${ value.content }</p>
                        </br>
                                <img src="/images/gallery-1.jpg" class="img-fluid">
                            <div class="p-2">
                                <hr>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex flex-row icons d-flex align-items-center">
                                        <button onclick=vote(this) data-id="${ value._id }" class="post-meta-like ${ value.vote?"voted":"" }">
                                        <div style="background-image: url('/images/icons/${ value.vote?"heart":"unheart" }.png')" class="pic icon-heart"></div>
                                        <span>${ value.meta.votes.length }</span>
                                    </button></div>
                                    <div class="d-flex flex-row muted-color"> <span>${ value.meta.comments.length} comments</span> <span class="ml-2">Share</span> </div>
                                </div>
                                <hr>
                                <div class="comments">
                                    <div class="d-flex flex-row mb-2"> <img src="https://i.imgur.com/9AZ2QX1.jpg" width="40" class="rounded-image">
                                        <div class="d-flex flex-column ml-2"> <span class="name">Daniel Frozer</span> <small class="comment-text">I like this alot! thanks alot</small>
                                            <div class="d-flex flex-row align-items-center status"> <small>Like</small> <small>Reply</small> <small>Translate</small> <small>18 mins</small> </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row mb-2"> <img src="https://i.imgur.com/1YrCKa1.jpg" width="40" class="rounded-image">
                                        <div class="d-flex flex-column ml-2"> <span class="name">Elizabeth goodmen</span> <small class="comment-text">Thanks for sharing!</small>
                                            <div class="d-flex flex-row align-items-center status"> <small>Like</small> <small>Reply</small> <small>Translate</small> <small>8 mins</small> </div>
                                        </div>
                                    </div>
                                    <div class="comment-input"> <input type="text" class="form-control">
                                        <div class="fonts"> <i class="fa fa-camera"></i> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
<!-- post status end -->`

const postStatus = () => {
    $("#textbox").modal("hide")
    var status = $("#share-your-mood").val();
    $.post("http://localhost:8080/status", {
        content: status
    }, (data, status) => {
        console.log(data)
        if (status === 'success') {
            data = JSON.parse(JSON.stringify(data))
            var tag = newPost(data)
            $(".main-body").prepend(tag)
        }
    })
}
const tongleVote = (isVoted) => {

}
const vote = (target) => {
    var postid = target.dataset.id
    var userVote = document.cookie.split('; ').find(row => row.startsWith('userID=')).split('=')[1].replace("j%3A%22", "").replace("%22", "");
    var data = { postid, userVote }
    console.log(userVote)
    fetch("http://localhost:8080/status/vote", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        .then(result => result.json())
        .then(data => {
            console.log(data)
            if (data.code === 0) {
                var likeElement = $("[data-id=" + postid + "]")
                likeElement.find($("span")).html(data.data.no_vote)
                if (data.data.actionVote) {
                    likeElement.toggleClass("voted")
                    $("[data-id=" + postid + "] .icon-heart").css("background-image", "url(/images/icons/heart.png)")
                } else {
                    likeElement.removeClass("voted")
                    $("[data-id=" + postid + "] .icon-heart").css("background-image", "url(/images/icons/unheart.png)")
                }
            }
        })
        .catch()

}

const loadMorePost = (skip) => {
    return fetch(`http://localhost:8080/status?skip=${skip}`)
        .then(result => result.json())
        .then(data => {
            console.log(data)
            if (data.code === 0) {
                return data.data
            } else {}
        })
}

$(".attach .picture").on('click', () => {
    $(".picture-attach-upload").trigger('click')
})

$(".cancel-share-btn, .close-share").on('click', () => {
    $("#share-your-mood").val('');
    $(".picture-attach-upload").val(null)
    $('.image-upload-preview').hide();
})

$(".picture-attach-upload").change((e) => {
    var file = e.target.files[0]
    console.log(file)
    var image = $('#output');
    image.src = URL.createObjectURL(file);

    var reader = new FileReader();
    reader.onload = function() {
        var output = document.getElementById('output');
        output.src = reader.result;
    };
    reader.readAsDataURL(file);
    $(".image-upload-preview").css("display", "block")
})

$('.image-upload-preview .close-icon').on('click', function() {
    $('.image-upload-preview').slideToggle(300, 'swing');
    $(".picture-attach-upload").val(null)
})

window.onscroll = async(e) => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log(1)
        const countPost = $(".post-card").length
        $('.body-loading').css("display", "block")
        loadMorePost(countPost).then(data => {
            var tag;
            if (data) {
                data.forEach(value => {
                    console.log(value)
                    tag = newPost(value)
                    $(".main-body").append(tag)
                })
                $('.body-loading').css("display", "none")
            }
        })

    }
};

$(".hide-comment-section").on('click', (e) => {
    var id = e.target.dataset.id
    var commentSection = $(`.post-${id} .comments`)
    commentSection.slideUp(300, 'swing')
})

$('.comment-input-section').on('click', (e) => {
    var id = e.target.dataset.id
    var commentSection = $(`.post-${id} .comments`)
    commentSection.slideDown(300, 'swing')
})

$('.post-card .fonts').on('click', () => {
        console.log($('.comments-input').val())
    })
    // $(document).ready(function () {
    //     var tag, x, y, timeOut;
    //     for (var i = 0; i < 50; i++) {
    //         x = Math.floor(Math.random() * 1920);
    //         y = Math.floor(Math.random() * 1080);
    //         timeOut = Math.floor(Math.random() * 2000) + 1000;
    //         tag = `<div class="toast toast-${i}"  id="myToast" style="position: absolute; top: ${y};
    //         right: ${x}; z-index: 100;">
    //         <div class="toast-header">
    //             <strong class="mr-auto"><i class="fa fa-grav"></i> Chào mừng bạn đã vô đây chơi</strong>
    //             <small>0 sec ago</small>
    //             <button type="button" class="ml-2 mb-1 close"
    //                 data-dismiss="toast">
    //                 <span aria-hidden="true">&times;</span>
    //             </button>
    //         </div>
    //         <div class="toast-body">
    //             <div>Chúc bạn trải nghiệm vui vẻ</div>
    //         </div>
    //     </div>`
    //         $("body").append(tag)

//         $(`.toast-${i}`).toast({ delay: timeOut });
//         $(`.toast-${i}`).toast("show")
//     }
//     setTimeout(function () {
//         for (var i = 0; i < 50; i++) {
//             $(`.toast-${i}`).remove()
//         }
//     }, 2500)
// });
// $(".show-toast").click(function () {
//     for (var i = 0; i < 100; i++) {
//         var x = Math.floor(Math.random() * 1920);
//         var y = Math.floor(Math.random() * 1080);
//         var tag = `<div class="toast toast-${i}"  id="myToast" style="position: absolute; top: ${y};
//         right: ${x}; z-index: 100;">
//         <div class="toast-header">
//             <strong class="mr-auto"><i class="fa fa-grav"></i> We miss
//                 you!</strong>
//             <small>11 mins ago</small>
//             <button type="button" class="ml-2 mb-1 close"
//                 data-dismiss="toast">
//                 <span aria-hidden="true">&times;</span>
//             </button>
//         </div>
//         <div class="toast-body">
//             <div>It's been a long time since you visited us. We've
//                 something special for you. <a href="#">Click here!</a></div>
//         </div>
//     </div>`
//         $("body").append(tag)

//         $(`.toast-${i}`).toast("show")
//     }
//     setTimeout(function () {
//         for (var i = 0; i < 100; i++){
//             $(`.toast-${i}`).remove()
//         }
//     }, 1000)



// })