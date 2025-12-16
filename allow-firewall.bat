@echo off
echo Adding firewall rule for Python HTTP Server...
netsh advfirewall firewall delete rule name="Python HTTP Server" protocol=TCP localport=8080
netsh advfirewall firewall add rule name="Python HTTP Server" dir=in action=allow protocol=TCP localport=8080
echo.
echo Firewall rule added successfully!
echo You can now access the website on your phone at: http://192.168.1.6:8080
echo.
pause
