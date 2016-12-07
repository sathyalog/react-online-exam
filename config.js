const env = process.env;

//export const nodeEnv = env.NODE_ENV || 'development';

export default {
  port: env.PORT || 3000,
   host: env.HOST || '0.0.0.0',
   get serverUrl() {
     return `http://${this.host}:${this.port}`;
   },
   jsonport: 3001,
   jsonhost:'127.0.0.1',
   getJsonUrl(){
     return `http://${this.jsonhost}:${this.jsonport}`
   }
};
