export JEKYLL_VERSION=3.5
export VERBOSE=true
export JEKYLL_DEBUG=true
docker run --rm \
  --volume=$PWD:/srv/jekyll \
  -it jekyll/jekyll:$JEKYLL_VERSION \
  jekyll build
