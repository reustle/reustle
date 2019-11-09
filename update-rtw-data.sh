wget https://gist.githubusercontent.com/reustle/6d27b7f01a98bffb76b150dc860460eb/raw/map.geojson -O static/rawRtwData.geojson ;
jq -c . < static/rawRtwData.geojson > static/rtwData.geojson ;
rm static/rawRtwData.geojson ;
git add static/rtwData.geojson ;
git status

