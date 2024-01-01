# Express Web App


## Backend | API
> /etc/systemd/system/internationalstudentassist.in.service

```
[Unit]
Description=Internal-student-assist-frontend
After=network.target
[Service]
Type=simple
User=internationalstudentassistin
Group=mateors
Restart=always
RestartSec=5s
#Environment=PORT=8104
WorkingDirectory=/var/www/vhosts/internationalstudentassist.in/public_html
ExecStart=/usr/bin/npm run start
[Install]
WantedBy=multi-user.target

```


## Frontend | Site

```
[Unit]
Description=international-student-assist-frontend
After=network.target
[Service]
Type=simple
User=webinternationalstudentassistin
Group=mateors
Restart=on-failure
RestartSec=5s
WorkingDirectory=/var/www/vhosts/web.internationalstudentassist.in/public_html
ExecStart=/usr/bin/npm run start
[Install]
WantedBy=multi-user.target
```



HOST

api.internationalstudentassist.in

person
USERNAME

apiinternationalstudentassistin

password
PASSWORD

oqL#qN=dv$06

chevron_right
SFTP_PORT

22