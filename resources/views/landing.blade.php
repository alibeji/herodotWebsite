<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}">
        <title>Herodot Gaming studio - Placing a dot over gaming</title>
        <link rel="icon" type="image/png" href="/herodot-icon.svg" />
        <link href=" {{ mix('css/app.css') }}" rel="stylesheet">

        <meta name="description" content="Experience the past, today.   (special character) ♦ Indie Game Studio, developing BYGONE. ♦ Blog about inquiries in E-Sports, History and Entrepreneurship. ♦ Most creative Tunisian startup in 2019.">

        <meta property="og:title" content="Herodot Studio - Placing a dot over gaming">
        <meta property="og:description" content="Experience the past, today. ♦ Indie Game Studio, developing BYGONE. ♦ Blog about inquiries in E-Sports, History and Entrepreneurship. ♦ Most creative Tunisian startup in 2019.">
        <meta property="og:image" content="https://www.herodot.com/thumbnail.png">
        <meta property="og:url" content="https://www.herodot.com">

        <meta name="twitter:title" content="Herodot Studio - Placing a dot over gaming">
        <meta name="twitter:description" content="Experience the past, today. ♦ Indie Game Studio, developing BYGONE. ♦ Blog about inquiries in E-Sports, History and Entrepreneurship. ♦ Most creative Tunisian startup in 2019.">
        <meta name="twitter:image" content="https://www.herodot.com/thumbnail.png">
    </head>
    <body>
        <div id="app">
            <app></app>
        </div>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>