sudo yum list
sudo yum update
sudo yum install gcc-c++ make
sudo yum install openssl-devel
sudo yum install git
cd/usr/local/src
cd /usr/local/src
sudo git clone git://github.com/joyent/node.git
cd node
ls
sudo git checkout v0.10.21
pwd
ls
sudo ./configure
sudo make
sudo make install
sudo su
cd /usr/local/src/node/
sudo su
cd /usr/local/src/
sudo git clone https://github.com/isaacs/npm.git
cd npm/
sudo make install
cd npm
sudo npm install express -g
sudo npm install forever -g
sudo npm install connect serve-static -g
sudo mkdir /var/node
sudo chown ec2-user /var/node
vim simple.js
sudo ll simp*.js
ll simp*.js
caja
caja ..
ll /var/node
chmod /var/node
chmod 666 /var/node
ls -ld /var/node
vim simple.js
vim /var/node/simple.js
ls
cd ..
cd
ls
cd ..
ls
cd ec2-user/
ls
cd /src/npm
sudo ls
cd /usr/local/src
ls
cd npm
ls
sudo mkdir /var/node
cd var
ls -l /var/node
ls -l /var
cd /var/node
pwd
cd node
ls -l /var/node
ls -ld /var
chmod 777 /var/node
ls -ld /var/node
vi simple.js
ls
ll -l /var
cd ..
ls
cd ..
ls
cd ..
ls
cd root/
ls
cd usr/local/src/npm/
ls
vim /var/node/simple.js
sudo node simple.js
sudo node /var/node/simple.js
vim /var/node/simple.js 
sudo node /var/node/simple.js
cd /usr/local/src/npm/
sudo node /var/node/simple.js
ls
ll
pwd
cd ../..
ls
cd ..
ls
ls -ld /var/node
cd usr/
ls
cd local/
ls
cd src/
ls
cd npm/
ls
clear
vim /var/node/server.js
sudo node /var/node/server.js 
ls
cd /usr/
ls
cd src/
ls
cd ..
cd etc
ls
cd ..
ls
cd local/
ls
cd src/
ls
cd npm
ls
cd /var/node
ls
sudo node server.js
exitg
exit
cd /usr/local/src/
ls
cd npm/
ls
cd /var/node
sudo node server.js
vim server.js 
sudo node server.js
vim server.js 
sudo node server.js
scp d -r dhyer3@localhost:/Old-Labs/CS360/Server/cs360 ~/usr/local/src/npm/var/node
which git
git config --global user.name "davishyer"
npm adduser
vim server.js 
cd ..
ls
cd ..
ls
mkdir Lab6
ls
cd Lab6
pwd
cd home/ec2-user
pwd
ls
mkdir Lab6
cd Lab6/
vim server.js
vim server.js 
node server.js
vim server.js
node server.js
vim server.js 
ls
mkdir html
sudo node server.js 
scp dhyer3@localhost:Old-Labs/CS360/Server/cs360/* html
scp dhyer3@localhost:~/Old-Labs/CS360/Server/cs360/* html
ls
cd html/
ls
scp dhyer3@localhost:~/Old-Labs/CS360/Server/cs360/* html
logout
exit
ls
man mvdir
man move
mv cs360 Lab6/html
ls
cd Lab6/
ls
cd html/
ls
cd ..
sudo node server.js 
ls
cd Lab6/
ls
sudo node server.js 
ls
geany server.js 
vim server.js 
sudo node server.js 
clear
sudo node server.js 
clear
sudo node server.js 
cd Lab6/
ls
cd html/
ls
cd cs360/
ls
cd test/
ls
cd ..
vim server.js 
ls
vim server.js
vim server.js 
vim hello.html
ls
mv hello.html html/
ls
cd Lab6/
ls
vim server.js 
cd Lab6/
sudo node server.js 
cd Lab6/
ls
sudo node server.js 
cd Lab6/
sudo node server.js 
cd html/
wget https://students.cs.byu.edu/~dhyer3/CS360/Weather/home.html
ls
cd ..
sudo node server.js 
ls
cd Lab6/
ls
sudo node server.js 
cd .
cp bootstrap.js ~/Lab6/
ls
cd ..
ls
cp bootstrap.js ~/Lab6/
cd Lab6/
ls
cd ..
cp *.js ~/Lab6/
ls
rm bootstrap.js
ls
cd Lab6/
ls
cd ..
ls
rm *.js
ls
mv bootstrap.min.css ~/Lab6/
mv home.html ~/Lab6/
mv index.html ~/Lab6/
ls
mv lab-5.css ~/Lab6/
ls
cd Lab6/
ls
mkdir Weather-Images
ls
vim server.js 
sudo node server.js 
vim server.js 
ls
mv b*.js html
ls
mv *.html html
ls
mv *.css html
ls
mv l*.js html/
ls
mv Weather-Images/ html/
ls
cd html/
ls
cd ..
sudo node server.js 
exit
cd Lab6/
ls
cd html/
ls
cd Weather-Images/
ls
cd ..
ls
sudo node server.js 
cd /usr/local/src/
sudo curl -O http://downloads.mongodb.org/linux/mongodb-linux-x86_64-2.4.8.tgz
sudo tar -zxvf mongodb-linux-x86_64-2.4.8.tgz 
cd mongodb-linux-x86_64-2.4.8
sudo cp bin/* /usr/local/bin/
sudo mkdir /data
ls
sudo mkdir /data/db
sudo nohup mongod --fork --logpath /var/log/mongodb.log
ps ax | grep mongo
