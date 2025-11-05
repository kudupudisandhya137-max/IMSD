
<head>
  <title>JS Example</title>
</head>
<body>

<h2 id="greeting">Hello!</h2>
<button onclick="changeText()">Click Me</button>
<button onclick="changeColor()">Click To changecolor</button>

<script>
  function changeText() {
    document.getElementById("greeting").innerHTML = "You clicked the button!";
  }
 function changeColor() {
    document.getElementById("greeting").style.color = "red";
  }
</script>
</body>
</html>
