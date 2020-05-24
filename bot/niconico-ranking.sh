#!/bin/bash
dirname="/home/vagrant/workspace/bot/niconico-ranking-rss"
mkdir -p $dirname
filename="${dirname}/hourly-ranking-`date +'%Y%m%d%H%M'`.xml"
echo "Save to $filename"
curl -s -o $filename -H "User-Agent: CrawlBot; shogoa301@gmail.com" https://www.nicovideo.jp/ranking/genre/all?rss=2.0&lang=ja-jp