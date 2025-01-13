rm -r assets *.js *.html *.css
cp -r ../GestioneFinanze/www/browser/* .
echo '<!-- 404.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0; URL=/" />
  </head>
  <body>
  </body>
</html>
' > 404.html
git add .
git commit -a -m "..."
git push
