import pg from "pg";

async function connect(){
    if(global.connection){
        return global.connection.connect();
    }
   const pool = new pg.Pool({
       connectionString: "postgres://krvnhkun:RIptR0PkQdKWoEKzrHlsGb0VzqIrx66q@batyr.db.elephantsql.com/krvnhkun"
   });
   global.connection = pool;
   return pool.connect();
}

export{
    connect
}