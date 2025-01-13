rm -r assets *.js *.html *.css
cp -r ../GestioneFinanze/www/browser/* .
echo 'ciao' > index.html
git add .
git commit -a -m "..."
git push
