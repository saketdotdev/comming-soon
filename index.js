<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coming Soon</title>
    <style>
        body {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
            color: white;
            font-family: Arial, sans-serif;
            overflow: hidden;
            position: relative;
            animation: fadeIn 2s ease-in-out;
        }

        h1, h2 {
            opacity: 0;
            animation: fadeIn 2s ease-in-out forwards;
            animation-delay: 1s;
        }

        h1 {
            font-size: 3em;
            text-align: center;
        }

        h2 {
            font-size: 2em;
            text-align: center;
            animation-delay: 1.5s;
        }

        .stars {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
        }

        .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            opacity: 0.7;
            animation: twinkle 1.5s infinite alternate;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes twinkle {
            0% {
                opacity: 0.5;
            }
            100% {
                opacity: 1;
            }
        }
    </style>
</head>
<body>
    <div class="stars">
        <div class="star" style="width: 2px; height: 2px; top: 10%; left: 20%; animation-delay: 0s;"></div>
        <div class="star" style="width: 3px; height: 3px; top: 30%; left: 50%; animation-delay: 0.5s;"></div>
        <div class="star" style="width: 2px; height: 2px; top: 50%; left: 70%; animation-delay: 1s;"></div>
        <div class="star" style="width: 1.5px; height: 1.5px; top: 20%; left: 80%; animation-delay: 1.5s;"></div>
        <div class="star" style="width: 2.5px; height: 2.5px; top: 80%; left: 30%; animation-delay: 2s;"></div>
        <div class="star" style="width: 1.8px; height: 1.8px; top: 60%; left: 10%; animation-delay: 2.5s;"></div>
        <div class="star" style="width: 3px; height: 3px; top: 40%; left: 90%; animation-delay: 3s;"></div>
        <div class="star" style="width: 2px; height: 2px; top: 70%; left: 60%; animation-delay: 3.5s;"></div>
    </div>
    <h1>Coming Soon</h1>
    <h2>Saket Sah</h2>
</body>
</html>
