rm -r assets *.js *.html *.css
cp -r ../GestioneFinanze_/www/browser/* .
git add .
git commit -a -m "..."
git push
