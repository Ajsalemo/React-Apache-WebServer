#!/bin/sh
echo "Running custom startup script from $PWD.."
# Enter the source directory to make sure the script runs where the user expects
cd /home/site/wwwroot

FILE=/home/site/wwwroot/apache2.conf
if [ -f "$FILE" ]; then
    echo "$FILE exists."
    # Copy our 'local' apache2.conf to override the generated one on App Service under /etc/apache2/apache2.conf
    cp /home/site/wwwroot/apache2.conf /etc/apache2/apache2.conf
fi

/usr/sbin/apache2ctl -D FOREGROUND
