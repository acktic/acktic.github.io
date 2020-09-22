#Legacy Multiline
#curl -q -s "https://acktic.github.io/js/head.js" | grep uri | awk '{print $2}' | tr -d ',' | tr -d '"' | grep http | xargs -n1 -P 10 -I {} bash -c 'curl --connect-timeout 10 -q -s -q -k "{}" -I | grep -e rss -e text -e xml -e html -e json >/dev/null && echo "Feed is live: {}" || echo "Feed is dead: {}"' | gawk '{ print strftime("[%Y-%m-%d %H:%M:%S]"), $0 }'

#Minified
curl -q -s https://acktic.github.io/js/head.js | grep -oP 'uri:".*' | sed 's/uri://g' | cut -f1 -d, | tr -d '"' | grep http | xargs -n1 -P 10 -I {} bash -c 'curl --connect-timeout 10 -q -s -q -k "{}" -I | grep -e rss -e text -e xml -e html -e json >/dev/null && echo "Feed is live: {}" || echo "Feed is dead: {}"' | gawk '{ print strftime("[%Y-%m-%d %H:%M:%S]"), $0 }'
