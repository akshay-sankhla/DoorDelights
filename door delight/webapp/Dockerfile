FROM node:13.12.0-alpine  
 
# set your working directory  
WORKDIR /app  
 
# add `/app/node_modules/.bin` to $PATH  
ENV PATH /app/node_modules/.bin:$PATH  
 
# install application dependencies  
COPY package.json ./  
COPY package-lock.json ./  
RUN npm install react-scripts -g
RUN npm install   

 
# add app  
COPY . ./  
 
# will start app  
CMD ["npm", "start"] 