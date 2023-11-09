<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Map</title>
    <link rel="stylesheet" href="../../../resources/static/css/map.css"/>
    <link rel="stylesheet" href="../../../resources/static/css/swiper-bundle.min.css"/>
    <script
            src="https://kit.fontawesome.com/64d58efce2.js"
            crossorigin="anonymous"
    ></script>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=8896e5b7ded7d481a0d92d6971d623c3"></script>

</head>
<body>
<div class="container">
    <span class="big-circle"></span>
    <img src="img/shape.png" class="square" alt=""/>
    <div class="form">
        <div class="contact-info" id="map">

        </div>

        <div class="contact-form">
            <span class="circle one"></span>
            <span class="circle two"></span>

            <form action="/" autocomplete="off">
                <h3 class="title">전통시장</h3>
                <div class="input-container focus">
                    <input type="text" name="name" class="input" value="김성민" readonly/>
                    <label for="">Username</label>
                    <span>Username</span>
                </div>
                <div class="input-container focus">
                    <input type="email" name="email" class="input"/>
                    <label for="">T-Market Coin</label>
                    <span>T-Market Coin</span>
                </div>
                <div class="input-container">
                    <input type="tel" name="phone" class="input"/>
                    <label for="">Phone</label>
                    <span>Phone</span>
                </div>
                <div class="input-container textarea">
                    <textarea name="message" class="input"></textarea>
                    <label for="">Message</label>
                    <span>Message</span>
                </div>
                <input type="submit" value="Send" class="btn"/>
            </form>
        </div>
    </div>
</div>

<script src="../../../resources/static/js/map.js"></script>
<script src="../../../resources/static/js/sweet.js"></script>
<script src="../../../resources/static/js/sweetalert2.all.min.js"></script>
</body>
</html>
