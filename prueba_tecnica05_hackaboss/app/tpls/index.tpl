<!doctype html>

<html lang="en-US">

<head>
  <meta charset="utf-8">
  <meta name="description" content="">
  <meta name="format-detection" content="telephone=no">
  <meta name="msapplication-tap-highlight" content="no">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>prueba_tecnica05_hackaboss</title>
  <!-- Place favicon.ico in the `app/` directory -->

  <!-- Chrome for Android theme color -->
  <meta name="theme-color" content="#303F9F">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">




  <!-- Web Application Manifest -->
  <link rel="manifest" href="manifest.json">

  <!-- Tile color for Win8 -->
  <meta name="msapplication-TileColor" content="#3372DF">

  <!-- Add to homescreen for Chrome on Android -->
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="application-name" content="staticScaffold">
  <link rel="icon" sizes="192x192" href="resources/images/touch/chrome-touch-icon-192x192.png">

  <!-- Add to homescreen for Safari on iOS -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="staticScaffold">
  <link rel="apple-touch-icon" href="resources/images/touch/apple-touch-icon.png">

  <!-- Tile icon for Win8 (144x144) -->
  <meta name="msapplication-TileImage" content="resources/images/touch/ms-touch-icon-144x144-precomposed.png">

  <link rel="stylesheet" href="styles/main.css">
  <script>
    window.IntlMsg = window.IntlMsg || {};
    window.IntlMsg.lang = document.documentElement.lang;
  </script>
</head>

<body class="loading">
  <div id="splash"></div>
  <demo-web-container app-title="Tools App" id="app__content" detail-variant="dark">
    <demo-menu-container-web slot="nav"></demo-menu-container-web>
    <demo-header-container clip-initials="JS" clip-label="Javier Sánchez" slot="app-header"></demo-header-container>
    <demo-detail-container slot="app-detail-content"></demo-detail-container>
  </demo-web-container>

  <!-- for a11y purposes -->
  <div id="announcer" aria-live="polite"></div>

  <script src="vendor/bowser.min.js"></script>

  <script type="module" src="scripts/app-module.js"></script>
</body>

</html>
