wget https://www.google.com/maps/d/u/0/kml?mid=1THN_zVHMNZr7v_AqyXFTm8O2uWF68wZS -O rtwData.kmz ;
unzip rtwData.kmz ;
rm rtwData.kmz ;
mv doc.kml rtwData.kml ;
k2g rtwData.kml static/ ;
rm rtwData.kml ;

