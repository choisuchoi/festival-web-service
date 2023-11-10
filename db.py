import pymysql

class DB :
    def __init__(self, host, user, pw):
        self.host = host
        self.user = user
        self.pw = pw

    def get_all_festival_info(self):
        conn = pymysql.connect(host=self.host ,port=3306, user=self.user ,password=self.pw, database='festival')
        cur = conn.cursor()
        sql = 'select * from table'
        cur.execute(sql)
        all_festival_info = [list(item) for item in cur.fetchall()]
        conn.close()
        return all_festival_info

    def get_festival_info(self, id):
        conn = pymysql.connect(host=self.host ,port=3306, user=self.user ,password=self.pw, database='festival')
        cur = conn.cursor()
        sql = 'select * from table where id = %s'
        cur.execute(sql,(id))
        festival_info = cur.fetchall()
        conn.close()
        return festival_info


    
if __name__ == "__main__" : 


    """
    host = 'localhost'
    user = 'admin'
    pw ='1234'
    

    test = DB(host,user,pw)
    """
