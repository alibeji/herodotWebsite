<!DOCTYPE html>
<html>
    <head>
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-N94MJ4C');</script>
        <!-- End Google Tag Manager -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}">
        <title>Herodot Studio</title>
        <link rel="icon" type="image/png" href="/herodot-icon.svg" />
        <link href=" {{ mix('css/app.css') }}" rel="stylesheet">
       
        <meta name="description" content="Awaking history, cooler! ♦ Indie Game Studio, developing BYGONE. ♦ Blogging ‘Inquiries’ around eSports, History and Entrepreneurship ♦ Most Creative Tunisian Startup in 2019.">

        <meta property="og:title" content="Herodot Studio">
        <meta property="og:description" content="Awaking History, cooler! ♦ Indie Game Studio, developing BYGONE. ♦ Blogging about inquiries arround eSports, History and Entrepreneurship. ♦ Most creative Tunisian startup in 2019.">
        <meta property="og:image" content="https://www.herodot.com/thumbnail.png">
        <meta property="og:url" content="https://www.herodot.com">

        <meta name="twitter:title" content="Herodot Studio">
        <meta name="twitter:description" content="Awaking History, cooler! ♦ Indie Game Studio, developing BYGONE. ♦ Blogging about inquiries arround eSports, History and Entrepreneurship. ♦ Most creative Tunisian startup in 2019.">
        <meta name="twitter:image" content="https://www.herodot.com/thumbnail.png">
    </head>
    <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N94MJ4C"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        <div id="app">
            <app></app>
        </div>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>