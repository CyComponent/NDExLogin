
NDEX Valet
==========
Login to an NDEx server

####Usage:
```html
<html>

  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react-with-addons.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react-dom.js"></script>
    <!-- Compiled and minified CSS -->

    <!-- Compiled and minified JavaScript -->
    <script src="CyFramework/build/CyFramework.js"></script>
    <script src="NDExStore/build/NDExStore.js"></script>
    <script src="NDExLogin/build/NDExLogin.js"></script>
  </head>

  <body>
    <div id='valet'></div>
    <script>
      var cyto = CyFramework.config([NDExStore])
      cyto.render(NDExLogin, document.getElementById('valet'), {
        onSubmit: function() {
          var state = cyto.getStore('ndex').server
          //Save login state to cytoscape
        }
      })
    </script>
  </body>

</html>
```

Parameters
----------
- onSubmit: A function that is called when the user clicks the submit button. The server state will be available under state.ndex.server as an immutable map.
