#!/bin/bash
dirname="/home/vagrant/workspace/bot/itunes-topsong-rss"
mkdir -p $dirname
filename="${dirname}/hourly-topranking-`date +'%Y%m%d%H%M'`.xml"
echo "Save to $filename"
curl -s -o $filename -H "User-Agent: CrawlBot; shogoa301@gmail.com" https://itunes.apple.com/jp/rss/topsongs/limit=10/xml