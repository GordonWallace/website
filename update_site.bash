#!/bin/bash
cd ~/Documents/Website
git add *
git commit -m "msg"
git push
cd ~/.ssh
ssh root@142.93.204.107 << EOF
	cd website
	git pull
	pm2 restart app.js
EOF
